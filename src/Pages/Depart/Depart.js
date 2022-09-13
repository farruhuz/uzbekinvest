import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import { Link } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import "./Depart.css";
import { useTranslation } from "react-i18next";

const Depart = ({changeInfoLocal}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changeLocal = (value) =>{
    changeInfoLocal(value);
    navigate(`${1}/${value.id}`)
  }
  const changeLocation2 = (value)=>{
    changeInfoLocal(value);
    navigate(`${2}/${value.id}`)
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
  const arrInfo2 = [
    {
      id: 1,
      title: `${t("avto__s__1__title")}`,
      subtitle: `${t("otdel__2__subtitle__1__2")}`,
      button: `${t("read__more__btn")}`,
    },
    {
      id: 2,
      title: `${t("avto__s__2__title")}`,
      subtitle: `${t("otdel__2__subtitle__2__2")}`,
      button: `${t("read__more__btn")}`,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="depart">
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__international')}</h3>
            <p>
              {t('depart__international__1')}<br/><br/> 
              {t('depart__international__2')}<br/><br/> 
              {t('depart__international__3')}<br/><br/>
              {t('depart__international__4')}
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
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__car')}</h3>
            <p>{t('depart__car__1')}<br/><br/>{t('depart__car__2')}</p>
          </div>
          <div className="med__affiar__cards__depart">
            {arrInfo2.map((el) => {
              return (
                <div className="departments__box2__child__depart">
                  <h4>{el.title}</h4>
                  <p className="departments__box2__child__depart__p">{el.subtitle}</p>
                  <div>
                    <span className="link" onClick={()=>changeLocation2(el)}>{t("read__more__btn")}<img src={arrowRed} alt="red arrow" /></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="med__affiar__depart ">
        <div className="container">
          <div className="med__affiar__name__depart med__affiar__3">
            <h3>{t('depart__may')}</h3>
            <p>
              {t('depart__may__1')}<br/><br/> 
              {t('depart__may__2')}<br/><br/>
              {t('depart__may__3')}<br/><br/>
              {t('depart__may__4')}<br/><br/> 
              {t('depart__may__5')}<br/><br/>
              {t('depart__may__6')}<br/><br/>
              {t('depart__may__7')}
            </p>
          </div>
        </div>
      </div>
      <div className="med__affiar__depart ">
        <div className="container">
          <div className="med__affiar__name__depart med__affiar__3">
          <h3>{t('depart__legal')}</h3>
            <p>
              {t('depart__legal__1')}
              <br />
              <br />
              {t('depart__legal__2')}
              <br />
              <br />
              {t('depart__legal__3')}
              <br />
              <br />
              {t('depart__legal__4')}
            </p>
          </div>
        </div>
      </div>
      <div className="affair__slider">
        <Slider />
      </div>
    </div>
  );
};

export default Depart;
