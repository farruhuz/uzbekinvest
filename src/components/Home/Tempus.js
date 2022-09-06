import React, { useEffect } from "react";
import "../../Styles/Tempus.css";
import {Link, useLocation} from "react-router-dom"
import firstImg from "../../Images/tempus/med.png";
import secondImg from "../../Images/tempus/yur.jpg";
import thirdtImg from "../../Images/tempus/images.png";
import fourImg from "../../Images/tempus/4.png";
import { useTranslation } from "react-i18next";


export default function Tempus() {
  const { t } = useTranslation()
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const tempus = [
    {
      id: 1,
      image: firstImg,
      title: t('medical__assistance'),
      info: "",
    },
    {
      id: 2,
      image: secondImg,
      title: t('legal__assistance'),
      info: "",
    },
    {
      id: 3,
      image: thirdtImg,
      title: t('technical__assistance'),
      info: "",
    },
    {
      id: 4,
      image: fourImg,
      title: t('personal__assistance'),
      info: "",
    },
  ];
  return (
    <section className="Tempus">
      <div className="container">
        <div className="tempus">
          <h2 className="tempus-title">{t('services')}</h2>
          {tempus.map((element) => {
            return (
              <div className="tempus-info" key={element.id}>
                <div className="tempus-info__img">
                  <img src={element.image} alt="" />
                </div>
                <div className="tempus-info__card">
                  <div>
                    <h3 className="tempus-info__card-title">{element.title}</h3>
                    <p className="tempus-info__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum quam turpis justo, morbi ut id enim. Maecenas
                      facilisis ultrices commodo, sociis. Rhoncus, viverra
                      pharetra urna in malesuada nulla.
                    </p>
                  </div>
                  <Link to="/services">
                    <button className="tempus-info__card-btn">
                      {t('read__more__btn')}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/services"><button className="view-more-btn">{t('view__more__btn')}</button></Link>
      </div>
    </section>
  );
}
