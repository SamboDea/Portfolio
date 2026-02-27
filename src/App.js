import { Outlet } from "react-router-dom";
import "./assets/css/index.css";
import "hover.css/css/hover-min.css";
import Header from "./components/app-route/Header";
import React, { useState } from "react";
import Footer from "./components/app-route/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skill from "./components/skill/Skill";
import { skill } from "./constatns/skill";
import ThunderVideoController from "./widget/ThunderVideoController";

function App() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const rainArray = [];
    for (let i = 0; i < 200; i++) {
      rainArray.push({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 2.5 + 2.5,
        delay: Math.random() * 2,
      });
    }
    setDrops(rainArray);
  }, []);

  return (
    <>
      <Skill skill={skill} />
      <Header />
      <div className="rain-container">
        {drops.map((drop) => (
          <span
            key={drop.id}
            className="rain-drop"
            style={{
              left: `${drop.left}%`,
              animationDuration: `${drop.duration}s`,
              animationDelay: `${drop.delay}s`,
            }}
          />
        ))}
      </div>
      <ThunderVideoController />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
