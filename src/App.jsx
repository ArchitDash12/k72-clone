import React, { useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Projects from "./pages/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navigation/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
