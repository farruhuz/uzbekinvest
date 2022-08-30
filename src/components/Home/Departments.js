import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import "../../Styles/Departments.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Departments = () => {
  const { t } = useTranslation();

  const depart = [
    {
      id: 1,
      name:t("depart__international"),
      title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ullamcorper senectus gravida amet.` ,
    },
    {
      id: 2,
      name:t("depart__car"),
      title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ullamcorper senectus gravida amet.`,
    },
    {
      id: 3,
      name:t("depart__may"),
      title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ullamcorper senectus gravida amet.`,
    },
    {
      id: 4,
      name:  t("depart__legal"),
      title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ullamcorper senectus gravida amet.`,
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
                  <p>{el.title}</p>
                  <div>
                    <Link to="/depart" className="link">
                      {t('read__more__btn')} <img src={arrowRed} alt="red arrow" />
                    </Link>
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
