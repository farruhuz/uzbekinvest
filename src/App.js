import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Affair from "./Pages/Affair/Affair";
import Partners from "./Pages/Partners/Partners";
import Help from "./Pages/Help/Help";
import Kontact from "./Pages/Kontact/Kontact";
import NewCard from "./Pages/News/NewCard";
import Partner from "./Pages/Partners/Partner";
import Servic from "./Pages/Affair/Servic";
import Depart from "./Pages/Depart/Depart";

function App() {
  return (
    <>
    {/* <ScrollToTop/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />}/>
        <Route path="news/:id" element={<NewCard />} />
        <Route path="services" element={<Affair />} />
        <Route path="servic" element={<Servic />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Kontact />} />
        <Route path="partners" element={<Partners />} />
        <Route path="partners/:id" element={<Partner />} />
        <Route path="help" element={<Help />} />
        <Route path="depart" element={<Depart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
