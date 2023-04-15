import React from "react";
import Header from "../layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../layouts/Footer";
import Service from "../pages/Service";
import Project from "../pages/Project";
import Feature from "../pages/Feature";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";

const RoutesWrapper = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/quote" element={<Testimonial />} />
        <Route path="*" element={<>not gounf</>} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesWrapper;
