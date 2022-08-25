import React from "react";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./Kontact.css";

const Kontact = () => {
  return (
    <>
      <div className="map">
        <Contact />
      </div>
      <div className="spinner">
        <Slider/>
      </div>
    </>
  );
};

export default Kontact;
