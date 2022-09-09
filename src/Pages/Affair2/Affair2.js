import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Home/Slider";

const Affair2 = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="med__affiar">
        <div className="container">
          <div className="med__affiar__name">{t("legal__assistance")}</div>
          <div className="med__affiar__cards">
            <p>{t('yurudik__assistance__info__1')}</p>
            <p>{t('yurudik__assistance__info__2')}</p>
            <p>{t('yurudik__assistance__info__3')}</p>
            <p>{t('yurudik__assistance__info__4')}</p>
            <p>{t('yurudik__assistance__info__5')}</p>
            <p>{t('yurudik__assistance__info__6')}</p>
            <p>{t('yurudik__assistance__info__7')}</p>
            <p>{t('yurudik__assistance__info__8')}</p>
          </div>
        </div>
      </div>
      <div className="affair__slider">
        <Slider />
      </div>
    </>
  );
};

export default Affair2;
