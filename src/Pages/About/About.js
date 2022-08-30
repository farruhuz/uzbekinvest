import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./About.css";
import SliderImg from "./SliderImg";
import stories from "../../Images/about/stories.png";
import stories1 from "../../Images/about/stories1.png";
import stories2 from "../../Images/about/stories2.png";
import arrowRed from "../../Images/link_red_arrow.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const {pathname} = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className="about">
      <h2 className="about__about__title">{t('about')}</h2>
      <div className="founders">
        <h2>{t('founders')}</h2>
        <p>{t('founders__1')} <br/><br/> {t('founders__2')}</p>
      </div>
      <SliderImg />
      <div className="founders stories">
        <h2>{t('founders__3')}</h2>
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
        <h2>{t('founders__4')}</h2>
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
          <Link className="lorem" to='/partners'>
            {t('read__more__btn')} <img src={arrowRed} alt="arrow" />
          </Link>
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
