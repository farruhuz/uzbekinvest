import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ixtiyoriy from "../../Images/otdel/ix__1.png";
import ixtiyoriy2 from "../../Images/otdel/ix__2.png";
import Swipers from "../Swiper/Swipers";
import "./Otdel3.css";

const Otdel3 = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const {t} = useTranslation()
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box2__depart">
          <Swipers xalqaro={ixtiyoriy} xalqaro2={ixtiyoriy2}/>
        </div>
      </div>
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart ixtiyoriy__otdel">
            <h3>{t('depart__may')}</h3>
            <p>
              {t('depart__may__1')}
              <br />
              <br />
              {t('depart__may__2')}
              <br />
              <br />
              {t('depart__may__3')}
              <br />
              <br />
              {t('depart__may__4')}
              <br />
              <br />
              {t('depart__may__5')}
              <br />
              <br />
              {t('depart__may__6')}
              <br />
              <br />
              {t('depart__may__7')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otdel3;
