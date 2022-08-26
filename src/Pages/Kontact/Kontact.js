import React from "react";
import Slider from "../../components/Home/Slider";
import "./Kontact.css";
import Map from "./Map";

const Kontact = () => {
  return (
    <>
      <div className="map">
        <Map />
      </div>
      <div className="spinner">
        <Slider/>
      </div>
    </>
  );
};

export default Kontact;
