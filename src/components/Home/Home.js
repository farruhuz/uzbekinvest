import React from "react";
import Contact from "./Contact";
import Departments from "./Departments";
import Est from "./Est";
import Lastesnews from "./Lastesnews";
import Lectus from "./Lectus";
import Newslatter from "./Newslatter";
import Slider from "./Slider";
import Tempus from "./Tempus";

const Home = ({catchDepart, catchDepartTempus}) => {
  return (
    <>
      <Lectus />
      <Lastesnews />
      <Tempus catchDepartTempus={catchDepartTempus}/>
      <Departments catchDepart={catchDepart}/>
      <Newslatter />
      <Est />
      <Slider />
      <Contact />
    </>
  );
};

export default Home;
