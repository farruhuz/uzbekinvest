import React from "react";
import Contact from "./Contact";
import Departments from "./Departments";
import Lectus from "./Lectus";
import Slider from "./Slider";
import Tempus from "./Tempus";

const Home = ({catchDepart, catchDepartTempus }) => {
  return (
    <>
      <Lectus />
      <Tempus catchDepartTempus={catchDepartTempus}/>
      <Departments catchDepart={catchDepart}/>
      <Slider />
      <Contact />
    </>
  );
};

export default Home;
