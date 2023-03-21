import React from "react";
import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/h" element={<>Home</>} />
        <Route path="*" element={<>not gounf</>} />
      </Routes>
    </>
  );
}

export default App;
