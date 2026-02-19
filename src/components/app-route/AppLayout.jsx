import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/HomePage";
import About from "../about/SubAbout";
import App from "../../App";
import Portfolio from "../portfolio/SubPortfolio";
import Contact from "../Contact/SubContact";
function AppLayout() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppLayout;
