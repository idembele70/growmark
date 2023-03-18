import React from "react";
import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/h" element={<>Home</>} />
        <Route path="*" element={<>not gounf</>} />
      </Routes>
    </>
  );
}

export default App;
