import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const NewCard = ({ innovation }) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [newobj, setNewObj] = useState(innovation)
  const T = useTranslation();

  const changeLanguageInfo = async() => {
    if(T.i18n.language === 'uz'){
      setLoading(true)
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/uz/news/news-detail/${innovation.id}/`);
      setNewObj(res.data)
      setLoading(false)
    }
    else{
      setLoading(true)
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/ru/news/news-detail/${innovation.id}/`);
      setNewObj(res.data)
      setLoading(false)
    }
  };

  useEffect(() => {
    changeLanguageInfo();
    window.scrollTo(0, 0);
  }, [pathname, T.i18n.language]);

  return (
      <div className="cards">
        <div className="container">
          {!loading &&
            <div className="card" data-aos="fade-up-right">
              <img className="card__img" data-aos="flip-down" src={newobj.image} alt={newobj.title} />
              <div className="card__info">
                <h2>{newobj?.title}</h2>
                <h4>{newobj?.subtitle}</h4>
                <p>{newobj?.content}</p>
              </div>
            </div>
          }
          <div className="spinner">
            <ClipLoader size={50} loading={loading} />
          </div>
        </div>
      </div>
  );
};

export default NewCard;
