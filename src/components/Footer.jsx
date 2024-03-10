import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { email } from "../utils/constants";

const Footer = () => {
  return (
    <div
      id="contact"
      className="mt-24 mx-4 md:mx-36 text-center font-semibold flex flex-col items-center"
    >
      <p className="text-gray-600 my-2 dark:text-gray-300">Get In Touch</p>
      <h1 className="text-4xl md:text-6xl my-2">Contact Me</h1>
      <div className="border-2 border-gray-400 px-6 py-4 m-4 rounded-3xl flex justify-around md:w-1/3 mt-12 mb-52 gap-4">
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = email;
            e.preventDefault();
          }}
        >
          <MailIcon fontSize="large" />
          <h1 className="hidden md:block text-xl ml-2">Gmail</h1>
        </Link>
        <div
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/achraf-bouyalloul-437419206/", "_blank")
          }
        >
          <LinkedInIcon fontSize="large" />
          <h1 className="hidden md:block text-xl ml-2">LinkedIn</h1>
        </div>
      </div>
      <div>
        <ul className="flex md:flex-row flex-col gap-4 justify-around text-xl md:text-2xl font-normal">
          <div
            onClick={() =>
              window.open("https://twitter.com/achraf_bll", "_blank")
            }
            className="mx-5 cursor-pointer"
          >
            X (Twitter)
          </div>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/a.f_bouy_02?igsh=MXkxZzJjejF6bXdpZA==","_blank")
            }
            className="mx-5 cursor-pointer"
          >
            Instagram
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/achraf-bouyalloul", "_blank")
            }
            className="mx-5 cursor-pointer"
          >
            Github
          </div>
        </ul>
      </div>
      <p className="font-normal mt-24 mb-12 text-gray-600 dark:text-gray-300 text-xs md:text-base">
        Copyright &copy; 2024 BOUYALLOUL Achraf. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
