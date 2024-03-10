import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Parascolaire from "./parascolaire";

const Body = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Body;
//<Parascolaire />