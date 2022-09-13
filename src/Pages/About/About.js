import React, { useEffect } from "react";
import {useLocation } from "react-router-dom";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./About.css";
import stories from "../../Images/about/stories.png";
import { useTranslation } from "react-i18next";
import direktor from "../../Images/file/direktor.pdf";
import orinbosar from "../../Images/file/orinbosar.pdf";
import menejer from "../../Images/file/menejer.pdf";

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
            <li>{t('d')} {t('d__o')}:<a href={orinbosar}> {t('direktor__orinbosari')} </a></li>
            <li>{t('d__2')}:<a href={menejer}> {t('menejer')} </a></li>
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
