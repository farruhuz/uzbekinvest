import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import majburiy from "../../Images/otdel/majburiy.jpg";
import majburiy2 from "../../Images/otdel/majburiy2.jpg";
import majburiy3 from "../../Images/otdel/majburiy3.jpg";
import Swipers from "../Swiper/Swipers";
import "./Otdel2.css";

const Otdel2 = ({ otdelInfo, changeInfoLocal }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  const changeLocation = (value)=>{
    changeInfoLocal(value);
    navigate(`${value.id}`)
  }
  const arrInfo = [
    {
      id: 1,
      title: `${t("otdel__2__title__1")}`,
      subtitle: `${t("otdel__2__subtitle__1__2")}`,
      button: `${t("read__more__btn")}`,
    },
    {
      id: 2,
      title: `${t("otdel__2__title__2")}`,
      subtitle: `${t("otdel__2__subtitle__2__2")}`,
      button: `${t("read__more__btn")}`,
    },
  ];
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box2__depart">
          <Swipers
            xalqaro={majburiy}
            xalqaro2={majburiy2}
            xalqaro3={majburiy3}
          />
        </div>
      </div>
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t("depart__car")}</h3>
            <p>
              {t("depart__car__1")}
              <br />
              <br />
              {t("depart__car__2")}
              <br />
              <br />
              {otdelInfo.title__3} <br />
              <br />
              {otdelInfo.title__4}
            </p>
          </div>
          <div className="med__affiar__cards__depart">
            {arrInfo.map((el) => {
              return (
                <div className="departments__box2__child__depart">
                  <h4>{el.title}</h4>
                  <p className="departments__box2__child__depart__p">{el.subtitle}</p>
                  <div>
                    <span className="link" onClick={()=>changeLocation(el)}>{t("read__more__btn")}<img src={arrowRed} alt="red arrow" /></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otdel2;
