import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Home/Slider";
import personal__1 from "../../Images/personal/personal_1.jpeg";
import personal__2 from "../../Images/personal/personal_2.jpg";
import personal__3 from "../../Images/personal/personal_3.jpg";
import Swipers from "../Swiper/Swipers";

const Affair4 = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <Swipers xalqaro={personal__1} xalqaro2={personal__2} xalqaro3={personal__3}/>
      <div className="med__affiar">
        <div className="container">
          <div className="med__affiar__name">{t("personal__assistance")}</div>
          <div className="med__affiar__cards">
            <p>{t('personal__assistance__info__1')}</p>
          </div>
        </div>
      </div>
      <div className="affair__slider">
        <Slider />
      </div>
    </>
  );
};

export default Affair4;
