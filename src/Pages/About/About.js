import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./About.css";
import stories from "../../Images/about/stories.png";
import stories1 from "../../Images/about/stories1.png";
import stories2 from "../../Images/about/stories2.png";
import arrowRed from "../../Images/link_red_arrow.png";
import { useTranslation } from "react-i18next";
import direktor from "../../Images/file/direktor.rtf";
import orinbosar from "../../Images/file/orinbosar.rtf";
const About = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="about">
      <div className="container">
        <div className="founders">
          <h2>{t("founders")}</h2>
          <p>
            {t("founders__1")} <br />
            <br /> {t("founders__2")}
          </p>
        </div>
        <div className="founders stories">
          <h2>{t("founders__3")}</h2>
          <ul>
            <li>{t('d')}: <a href={direktor}> {t('direktor')} </a></li>
            <li>{t('d')} {t('d__o')}:<a href={direktor}> {t('direktor__orinbosari')} </a></li>
          </ul>
        </div>
        <div className="stories__image">
            <img src={stories} alt="" />
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
