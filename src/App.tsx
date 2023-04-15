import React from "react";
import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/layouts/Footer";
import RoutesWrapper from "./components/containers/RoutesWrapper";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return <RoutesWrapper />;
}

export default App;
