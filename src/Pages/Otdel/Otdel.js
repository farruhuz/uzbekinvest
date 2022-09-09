import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import xalqaro from "../../Images/otdel/xalqaro.jpg";
import Swipers from "../Swiper/Swipers";

const Otdel = ({ otdelInfo }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <Swipers xalqaro={xalqaro}/>
      </div>
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t("depart__international")}</h3>
            <p>
              {t("depart__international__1")}
              <br />
              <br />
              {t("depart__international__2")}
              <br />
              <br />
              {t("depart__international__3")}
              <br />
              <br />
              {t("depart__international__4")}
            </p>
          </div>
          <div className="med__affiar__cards__depart">
            <div className="departments__box2__child__depart">
              <h4>{t("otdel__1__title__1")}</h4>
              <p className="departments__box2__child__depart__p">{t('otdel__1__subtitle__1')}</p>
              <div>
                <Link to="/servic" className="link">
                  {t("read__more__btn")} <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>{t('otdel__1__title__2')}</h4>
              <p className="departments__box2__child__depart__p">{t('otdel__1__subtitle__2')}</p>
              <div>
                <Link to="/servic" className="link">
                  {t("read__more__btn")} <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>{t('otdel__1__title__3')}</h4>
              <p className="departments__box2__child__depart__p">{t('otdel__1__subtitle__3')}</p>
              <div>
                <Link to="/servic" className="link">
                  {t("read__more__btn")} <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otdel;
