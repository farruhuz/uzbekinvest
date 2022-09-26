import React from "react";
import Slider from "../../components/Home/Slider";
import "./Kontact.css";
import Map from "./Map";

const Kontact = () => {
  return (
    <>
      <div className="map" data-aos="flip-left">
        <Map />
      </div>
      <div className="spinner" data-aos="flip-up">
        <Slider/>
      </div>
    </>
  );
};

export default Kontact;
