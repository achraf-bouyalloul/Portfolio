import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="mx-5 my-36 flex justify-center gap-56">
      <img
        className="hidden md:block rounded-full w-96 shadow-2xl object-cover"
        src="/profile-pic-1.png"
        alt="protfolio"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold">
          <p className="md:text-xl text-gray-600 my-2 dark:text-gray-300">
            Hello I'm
          </p>
          <h1 className="text-4xl md:text-6xl my-2">BOUYALLOUL Achraf</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 my-2 dark:text-gray-300">
            Smart Systems Engineering | Student-ENSIAS
          </h2>
        </div>
        <div className="my-2 font-semibold">
          <a
            href="RamanathKP-Resume.pdf"
            download="RamanathKP-Resume.pdf"
            target="_blank"
          >
            <button className="border-2 border-black py-2 md:py-3 px-3 md:px-5 rounded-full m-3 dark:bg-white dark:border-white dark:text-black hover:shadow-xl">
              Download CV
            </button>
          </a>
          <Link
            className="mx-5 cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <button className="border-2 border-black bg-black text-white py-2 md:py-3 px-3 md:px-5 rounded-full m-3 dark:border-white hover:shadow-xl">
              Contact Info
            </button>
          </Link>
        </div>
        <div className="my-2 flex gap-4">
          <div
            className="cursor-pointer"
            onClick={() =>
              window.open("https://github.com/achraf-bouyalloul/", "_blank")
            }
          >
            <GitHubIcon fontSize="large" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/achraf-bouyalloul-437419206/", "_blank")
            }
          >
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
