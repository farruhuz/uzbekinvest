import React, { useEffect, useState } from "react";
import "../../Styles/Lastesnews.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Lastesnews({setLanguage}) {
  const T = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fiveGetFullData = async () => {
    if(T.i18n.language === 'uz'){
      setLoading(true);
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/uz/news/list-news-homepage/`);
      setNews(res.data.results);
      setLoading(false);
    }
    else{
      setLoading(true);
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/ru/news/list-news-homepage/`);
      setNews(res.data.results);
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fiveGetFullData();
  }, [T.i18n.language]);


  const { t } = useTranslation();
  return (
    <section className="Lastesnews">
      <div className="container">
        <h2 className="lastes-title">{t("last__news")}</h2>
        <div className="lastes-news">
          {!loading && news?.map((el, index, arr) => {
            if (index === 0) {
              return (
                <div className="lastes-info" key={el.index}>
                  <img
                    className="lastes-news-img1 lastes-news-img"
                    src={arr[4].image}
                    alt={el.title}
                  />
                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">
                      {arr[4].created_at.substring(0, 10) + " " + arr[4].created_at.substring(11, 16)}
                    </p>
                    <h3 className="lastes-info__title">
                      {arr[4].title.substring(0, 80)+ "..."}
                    </h3>
                    <p className="lastes-info__info">
                      {arr[4].content.substring(0, 500)}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 1) {
              return (
                <div className="lastes-info">
                  <img
                    className="lastes-news-img2 lastes-news-img"
                    src={arr[3].image}
                    alt={el.title}
                  />
                  <div className="lastes-info__texts mb-106">
                    <p className="lastes-info__data">
                      {arr[3].created_at.substring(0, 10)+ " " + arr[4].created_at.substring(11, 16)}
                    </p>
                    <h3 className="lastes-info__title">
                      {arr[3].title.substring(0, 20)+ "..."}
                    </h3>
                    <p className="lastes-info__info">
                      {arr[3].content.substring(0, 200)}
                    </p>
                  </div>

                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">
                      {arr[2].created_at.substring(0, 10)+ " " + arr[4].created_at.substring(11, 16)}
                    </p>
                    <h3 className="lastes-info__title">
                      {arr[2].title.substring(0, 20)+ "..."}
                    </h3>
                    <p className="lastes-info__info">
                      {arr[2].content.substring(0, 200)}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 2) {
              return (
                <div className="lastes-info">
                  <div className="lastes-info__texts mb-81">
                    <p className="lastes-info__data">
                      {arr[1].created_at.substring(0, 10)+ " " + arr[4].created_at.substring(11, 16)}
                    </p>
                    <h3 className="lastes-info__title">
                      {arr[1].title.substring(0, 20)+ "..."}
                    </h3>
                    <p className="lastes-info__info">
                      {arr[1].content.substring(0, 200)}
                    </p>
                  </div>
                  <img className="lastes-news-img3 lastes-news-img" src={arr[0].image}/>
                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">
                      {arr[0].created_at.substring(0, 10)+ " " + arr[4].created_at.substring(11, 16)}
                    </p>
                    <h3 className="lastes-info__title">
                      {arr[0].title.substring(0, 20)+ "..."}
                    </h3>
                    <p className="lastes-info__info">
                      {arr[0].content.substring(0, 200)}
                    </p>
                  </div>
                </div>
              );
            }
          })}
          <div className="spinner">
            <ClipLoader size={50} loading={loading} />
          </div>
        </div>
        <Link to="/news">
          <button className="view-more-btn">{t("view__more__btn")}</button>
        </Link>
      </div>
    </section>
  );
}
