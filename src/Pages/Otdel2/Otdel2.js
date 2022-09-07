import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import majburiy from "../../Images/otdel/majburiy.jpg";

const Otdel2 = ({otdelInfo}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const {t} = useTranslation()
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box2__depart">
          <img src={majburiy} alt={otdelInfo.name} />
        </div>
      </div>
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__car')}</h3>
            <p>
              {t('depart__car__1')}
              <br />
              <br />
              {t('depart__car__2')}
              <br />
              <br />
              {otdelInfo.title__3}{" "}
              <br />
              <br />
              {otdelInfo.title__4}{" "}
            </p>
          </div>
          <div className="med__affiar__cards__depart">
            <div className="departments__box2__child__depart">
              <h4>{t("otdel__2__title__1")}</h4>
              <p className="departments__box2__child__depart__p">{t('otdel__2__subtitle__1__2')}</p>
              <div>
                <Link to="/servic" className="link">
                  {t('read__more__btn')} <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>{t('otdel__2__title__2')}</h4>
              <p className="departments__box2__child__depart__p">{t('otdel__2__subtitle__2__2')}</p>
              <div>
                <Link to="/servic" className="link">
                  {t('read__more__btn')} <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otdel2;
