import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './Pages/About/About';
import News from './Pages/News/News';
import Affair from './Pages/Affair/Affair';
import Partners from './Pages/Partners/Partners';
import Help from './Pages/Help/Help';
import Kontact from './Pages/Kontact/Kontact';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/services" element={<Affair/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Kontact/>}/>
          <Route path="/partners" element={<Partners/>}/>
          <Route path="/help" element={<Help/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
