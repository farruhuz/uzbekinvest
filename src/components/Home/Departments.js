import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import "../../Styles/Departments.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Departments = ({catchDepart}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changeLocal = (el) => {
      catchDepart(el);
      navigate(`depart/${el.id}`)
  }
  const depart = [
    {
      id: 1,
      name:t("depart__international"),
      title:``,
      title__1:`${t("depart__international__1")}`,
      title__2:`${t("depart__international__2")}`,
      title__3:`${t("depart__international__3")}`,
      title__4:`${t("depart__international__4")}`,
    },
    {
      id: 2,
      name:t("depart__car"),
      title:``,
      title__1:`${t("depart__car__1")}`,
      title__2:`${t("depart__car__2")}`,
    },
    {
      id: 3,
      name:t("depart__may"),
      title:``,
      title__1:`${t("depart__may__1")}`,
      title__2:`${t("depart__may__2")}`,
      title__3:`${t("depart__may__3")}`,
      title__4:`${t("depart__may__4")}`,
    },
    {
      id: 4,
      name:  t("depart__legal"),
      title:``,
      title__1:`${t("depart__legal__1")}`,
      title__2:`${t("depart__legal__2")}`,
      title__3:`${t("depart__legal__3")}`,
      title__4:`${t("depart__legal__4")}`,
    },
  ];
  return (
    <div className="departments">
      <div className="container">
        <div className="departments__con">
          <div className="departments__box1">
            <h2>{t("depart")}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper senectus gravida amet, pellentesque egestas. Nisl
              dignissim nulla nunc nulla a volutpat in dapibus nec. Orci eu enim
              vitae mollis sit commodo nullam auctor. Purus.
            </p>
          </div>
          <div className="departments__box2">
            {depart.map((el) => {
              return (
                <div className="departments__box2__child" key={el.id}>
                  <h4>{el.name}</h4>
                  <p>{el.title__1.substring(0,150)+" ... "}</p>
                  <div>
                    <span onClick={() => changeLocal(el)} className="link">
                      {t('read__more__btn')} <img src={arrowRed} alt="red arrow" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/depart" className="departments__btn">
          <button>{t('view__more__btn')}</button>
        </Link>
      </div>
    </div>
  );
};

export default Departments;
