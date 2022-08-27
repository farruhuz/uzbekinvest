import React from "react";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./About.css";
import SliderImg from "./SliderImg";
import stories from "../../Images/about/stories.png";
import stories1 from "../../Images/about/stories1.png";
import stories2 from "../../Images/about/stories2.png";
import arrowRed from "../../Images/link_red_arrow.png";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__about__title">О нас</h2>
      <div className="founders">
        <h2>Основатели</h2>
        <p>
          Основанное в 2000 году, ООО «Узбекинвест Ассистанс» является одним из
          главных ассистанс компании в Республике Узбекистан. Кроме
          отечественного рынка ООО «Узбекинвест Ассистанс» оказывает услуги и
          зарубежным ассистанс компаниям. На сегодняшний день нашими партнёрами
          являются такие ассистанс компании как: Euroasia Assistance, Inter
          Assist, Мissadena, Jiang Tai Global Assistance, VMA LLC, AP Companies
          Ltd, Global Voyadger Assistance, Remed Assistance, и Balt Assistance и
          др.
        </p>
      </div>
      <SliderImg />
      <div className="founders stories">
        <h2>Рассказы</h2>
        <p>
          Enim, quis cras condimentum fermentum consectetur arcu aliquet.
          Consequat risus aenean euismod facilisis integer arcu molestie. Eget
          semper ullamcorper dolor aliquam quis lectus quis. Massa sed ipsum non
          sollicitudin pulvinar dictum morbi at nec. Vestibulum ornare orci
          massa nisi, enim a sed. In amet at ipsum egestas elementum morbi
          adipiscing nunc, lacus. In fames ut habitant dui suspendisse euismod
          etiam. Sapien lacus id fermentum enim facilisi sit tempor lorem. At
          potenti consectetur nunc, sit sit magna amet aliquet porttitor. A,
          posuere ultrices pretium ac. Diam tortor quis etiam a. Velit habitasse
          non aliquet phasellus consequat feugiat at nulla. Odio non aliquet
          purus arcu proin sollicitudin. Vel, ultricies nisi proin fermentum
          felis velit a integer tincidunt. Feugiat nec sed odio hac blandit.
          Fames pulvinar varius integer purus scelerisque rhoncus vitae, posuere
          porttitor. Vivamus volutpat accumsan mattis at. Vulputate ornare in
          sapien lectus non sed. Risus ultricies pellentesque tincidunt lorem
          consequat massa. Arcu volutpat sed nisl, elementum, sit. Nulla eget
          sit facilisi magna. Risus lectus viverra congue vel mi, id morbi nulla
          donec. Mi aliquam id eu quis commodo phasellus tortor lacus et.
          Curabitur facilisis malesuada elementum, turpis morbi in sed ac. Non
          urna viverra sit felis aliquet feugiat elit nibh. Facilisis mauris, ac
          auctor quis in vitae. Interdum enim purus tristique mattis non, semper
          nunc. Senectus neque platea risus lacus arcu erat quis lacinia et.
          Egestas ipsum id pellentesque amet, nec. Habitant mollis commodo, sed
          sed. Pharetra sed vestibulum mollis quis. Venenatis, euismod vel eget
          pellentesque tellus, quis.
        </p>
      </div>
      <div className="stories__image">
        <img src={stories} alt="" />
      </div>
      <div className="founders parners">
        <h2>Партнеры</h2>
        <div>
          <p>
            A, posuere ultrices pretium ac. Diam tortor quis etiam a. Velit
            habitasse non aliquet phasellus consequat feugiat at nulla. Odio non
            aliquet purus arcu proin sollicitudin. Vel, ultricies nisi proin
            fermentum felis velit a integer tincidunt. Feugiat nec sed odio hac
            blandit. Fames pulvinar varius integer purus scelerisque rhoncus
            vitae, posuere porttitor. Vivamus volutpat accumsan mattis at.
            Vulputate ornare in sapien lectus non sed. Risus ultricies
            pellentesque tincidunt lorem consequat massa.
          </p>
          <span>
            Lorem ipsum <img src={arrowRed} alt="" />
          </span>
          <div className="parners__images">
            <img src={stories1} alt="" />
            <img src={stories2} alt="" />
          </div>
        </div>
      </div>
      <div className="slider__about">
        <Slider />
      </div>
      <div className="contact__about">
        <Contact />
      </div>
    </div>
  );
};

export default About;
