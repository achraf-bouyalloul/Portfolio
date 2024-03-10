import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../utils/appSlice";
import { Link as Link1 } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

const Header = () => {
  const [panel, setPanel] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.app.darkMode);

  const switchDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={
        panel
          ? "flex justify-between md:justify-around items-center pt-10 md:mb-10 md:mx-5"
          : "flex justify-between md:justify-around items-center pt-10 mb-10 mx-5"
      }
    >
      <Link1 to="/">
        <h1
          className={
            panel
              ? "hidden md:block font-semibold text-xl md:text-3xl"
              : "font-semibold text-xl md:text-3xl"
          }
        >
          Portfolio 
        </h1>
      </Link1>
      <ul className="hidden md:flex justify-around text-2xl">
        <Link2
          className="mx-5 cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </Link2>
        <Link2
          className="mx-5 cursor-pointer"
          to="experience"
          spy={true}
          smooth={true}
          duration={700}
          offset={-70}
        >
          Experience
        </Link2>
        <Link2
          className="mx-5 cursor-pointer"
          to="projects"
          spy={true}
          smooth={true}
          duration={900}
          offset={-30}
        >
          Projects
        </Link2>
        <Link2
          className="mx-5 cursor-pointer"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-70}
        >
          ParaScolaire
        </Link2>
        <Link2
          className="mx-5 cursor-pointer"
          to="ParaScolaire"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-70}
        >
          Contact
        </Link2>
        {!darkMode ? (
          <div onClick={switchDarkMode} className="cursor-pointer">
            <DarkModeIcon fontSize="large" />
          </div>
        ) : (
          <div onClick={switchDarkMode} className="cursor-pointer">
            <LightModeIcon fontSize="large" />
          </div>
        )}
      </ul>
      {!panel && (
        <div className="md:hidden flex gap-4">
          {!darkMode ? (
            <div onClick={switchDarkMode} className="cursor-pointer">
              <DarkModeIcon />
            </div>
          ) : (
            <div onClick={switchDarkMode} className="cursor-pointer">
              <LightModeIcon />
            </div>
          )}
          <div onClick={() => setPanel(true)} className="cursor-pointer">
            <MenuIcon />
          </div>
        </div>
      )}
      {panel && (
        <div className="md:hidden bg-white w-screen h-screen pr-5 dark:bg-black">
          <div
            className="flex justify-end mb-4 cursor-pointer"
            onClick={() => setPanel(false)}
          >
            <CloseIcon />
          </div>
          <div className="w-screen h-screen z-10 pr-2">
            <ul className="flex flex-col gap-4 items-end text-xl">
              <Link2
                className="mx-5 cursor-pointer"
                to="about"
                onClick={() => setPanel(false)}
                spy={true}
                smooth={true}
                duration={500}
                offset={-850}
              >
                About
              </Link2>
              <Link2
                className="mx-5 cursor-pointer"
                to="experience"
                onClick={() => setPanel(false)}
                spy={true}
                smooth={true}
                duration={700}
                offset={-950}
              >
                Experience
              </Link2>
              <Link2
                className="mx-5 cursor-pointer"
                to="projects"
                onClick={() => setPanel(false)}
                spy={true}
                smooth={true}
                duration={900}
                offset={-1000}
              >
                Projects
              </Link2>
              <Link2
                className="mx-5 cursor-pointer"
                to="paraScolaire"
                onClick={() => setPanel(false)}
                spy={true}
                smooth={true}
                duration={900}
                offset={-1000}
              >
                ParaScolaire
              </Link2>
              
              <Link2
                className="mx-5 cursor-pointer"
                to="contact"
                onClick={() => setPanel(false)}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
              >
                Contact
              </Link2>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
