import React from "react";
import Contact from "./Contact";
import Departments from "./Departments";
import Est from "./Est";
import Lastesnews from "./Lastesnews";
import Lectus from "./Lectus";
import Slider from "./Slider";
import Tempus from "./Tempus";

const Home = ({catchDepart, catchDepartTempus, setLanguage}) => {
  return (
    <>
      <Lectus />
      <Lastesnews setLanguage={setLanguage} />
      <Tempus catchDepartTempus={catchDepartTempus}/>
      <Departments catchDepart={catchDepart}/>
      <Est />
      <Slider />
      <Contact />
    </>
  );
};

export default Home;
