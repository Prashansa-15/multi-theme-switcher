import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderTheme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
