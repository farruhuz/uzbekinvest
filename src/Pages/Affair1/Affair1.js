import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Home/Slider";
import Swipers from "../Swiper/Swipers";
import med__1 from "../../Images/med/med.jpg";
import med__2 from "../../Images/med/med2.jpg";
import med__3 from "../../Images/med/med3.jpg";

const Affair1 = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Swipers xalqaro={med__1} xalqaro2={med__2} xalqaro3={med__3}/>
      <div className="med__affiar">
        <div className="container">
          <div className="med__affiar__name">{t("medical__assistance")}</div>
          <div className="med__affiar__cards">
            <p>{t('medical__assistance__info__1')}</p>
            <p>{t('medical__assistance__info__2')}</p>
            <p>{t('medical__assistance__info__3')}</p>
          </div>
        </div>
      </div>
      <div className="affair__slider">
        <Slider />
      </div>
    </>
  );
};

export default Affair1;