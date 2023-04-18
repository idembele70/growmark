import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../layouts/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../layouts/Footer";
import Service from "../pages/Service";
import Project from "../pages/Project";
import Feature from "../pages/Feature";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Loader from "../shared/Loader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const RoutesWrapper = () => {
  // Loader state changes
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [pathname]);
  return loading ? (
    <Loader />
  ) : (
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
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesWrapper;
