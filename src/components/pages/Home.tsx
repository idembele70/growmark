import React from "react";
import Carousel from "../sections/Carousel";
import Features from "../sections/Features";
import About from "../sections/About";
import Services from "../sections/Services";
import Project from "../sections/Projects";
import Quote from "../sections/Quote";
import Team from "../sections/Team";
import Testimonial from "../sections/Testimonial";
const Home = () => {
  return (
    <>
      <Carousel />
      <Features />
      <About />
      <Services />
      <Project />
      <Quote />
      <Team />
      <Testimonial />
    </>
  );
};

export default Home;
