import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import xalqaro from "../../Images/otdel/xalqaro.jpg";
import Swipers from "../Swiper/Swipers";
import "./Otdel.css";

const Otdel = ({ changeInfoLocal }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  const changeLocal = (value) =>{
    changeInfoLocal(value);
    navigate(`${value.id}`)
  }
  const arrInfo = [
    {
      id:1,
      title: `${t("otdel__1__title__1")}`,
      subtitle: `${t("otdel__1__subtitle__1")}`,
      button: `${t("read__more__btn")}`,
    },
    {
      id:2,
      title: `${t("otdel__1__title__2")}`,
      subtitle: `${t("otdel__1__subtitle__2")}`,
      button: `${t("read__more__btn")}`,
    },
    {
      id:3,
      title: `${t("otdel__1__title__3")}`,
      subtitle: `${t("otdel__1__subtitle__3")}`,
      button: `${t("read__more__btn")}`,
    },
  ];
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <Swipers xalqaro={xalqaro} />
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
            {arrInfo.map((el) => {
              return (
                <div className="departments__box2__child__depart" key={el.id}>
                  <h4>{el.title}</h4>
                  <p className="departments__box2__child__depart__p">{el.subtitle}</p>
                  <div>
                    <span  className="link" onClick={()=>changeLocal(el)}>{el.button}<img src={arrowRed} alt="red arrow" /></span>
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

export default Otdel;
