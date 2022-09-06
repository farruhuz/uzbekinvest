import React, { useEffect } from "react";
import Slider from "../../components/Home/Slider";
import "./Partners.css";
import arrowRed from "../../Images/link_red_arrow.png";
import ArrowRed from "../../Images/arrow__RED.png";
import partners from "../../Images/partners/part.png"
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const {t} = useTranslation()
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__box">
          <h2 className="partners__h2">{t('partners')}</h2>
          <div className="partners__box__1">
            <div className="partners__box__1__info">
              <h3>{t('about__3')}</h3>
              <ul>
              <li>{t('partners__title__1')}</li>
                <li>{t('partners__title__2')}</li>
                <li>{t('partners__title__3')}</li>
                <li>{t('partners__title__4')}</li>
                <li>{t('partners__title__5')}</li>
                <li>{t('partners__title__6')}</li>
                <li>
                  <Link className="us" to='/contact'> Contact us <img src={arrowRed} alt="arrow_red" /></Link> 
                </li>
              </ul>
            </div>
            <div className="partners__box__1__img">
              <img src={partners} alt="" />
            </div>
          </div>
        </div>
        <div className="partners__box__div">
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Partners;
