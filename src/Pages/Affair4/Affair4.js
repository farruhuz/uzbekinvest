import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Home/Slider";

const Affair4 = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
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