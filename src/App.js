import { Outlet } from "react-router-dom";
import "./assets/css/index.css";
import "hover.css/css/hover-min.css";
import Header from "./components/app-route/Header";
import React from "react";
import Footer from "./components/app-route/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skill from "./components/skill/Skill";
import { skill } from "./constatns/skill";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Skill skill={skill} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
