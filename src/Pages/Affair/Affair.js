import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import "./Affair.css";
import uslug from "../../Images/uslug/uslugi.jpg";
import { useTranslation } from "react-i18next";

const Affair = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="affair__hero">
        <div className="container">
          <div className="affair__hero__box2">
            <img src={uslug} alt="" />
          </div>
        </div>
      </div>
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
      <div className="med__affiar">
        <div className="container">
          <div className="med__affiar__name">{t("technical__assistance")}</div>
          <div className="med__affiar__cards">
             <p>{t('techno__assitance__info__1')}</p>
             <p>{t('techno__assitance__info__2')}</p>
             <p>{t('techno__assitance__info__3')}</p>
             <p>{t('techno__assitance__info__4')}</p>
          </div>
        </div>
      </div>
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

export default Affair;
