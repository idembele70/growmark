import React from "react";
import Carousel from "../sections/Carousel";
import Features from "../sections/Features";
import About from "../sections/About";
import Services from "../sections/Services";
import Project from "../sections/Project";
const Home = () => {
  return (
    <>
      <Carousel />
      <Features />
      <About />
      <Services />
      <Project />
    </>
  );
};

export default Home;
