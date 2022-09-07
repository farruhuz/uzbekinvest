import React, { useEffect, useState } from "react";
import "../../Styles/Lastesnews.css";
import Card1 from "../../Images/img/123.png";
import Card2 from "../../Images/img/146.jpg";
import Card3 from "../../Images/news/invest.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Lastesnews() {
  const T = useTranslation();
  const [news, setNews] = useState([]);
  const fiveGetFullData = async () => {
    if (T.i18n.language === "uz") {
      if (news.length > 0) {
        setNews(res.data.results);
      }
      const res = await axios.get(
        `https://uzbekinvest.herokuapp.com/uz/news/list-news-homepage/`
      );
      setNews(res.data.results);
    } else {
      const res = await axios.get(
        `https://uzbekinvest.herokuapp.com/ru/news/list-news-homepage/`
      );
      setNews(res.data.results);
    }
  };
  useEffect(() => {
    fiveGetFullData();
  }, [T.i18n.language]);

  const { t } = useTranslation();
  return (
    <section className="Lastesnews">
      <div className="container">
        <h2 className="lastes-title">{t("last__news")}</h2>
        <div className="lastes-news">
          {/* <div className="lastes-info">
            <img
              className="lastes-news-img1 lastes-news-img"
              src={Card1}
              alt=""
            />
            <div className="lastes-info__texts">
              <p className="lastes-info__data">August 9,2022 </p>
              <h3 className="lastes-info__title">
                Dolor sit amet, consectetur adipiscing elit.{" "}
              </h3>
              <p className="lastes-info__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada proin vitae, sit vel sit ac quam. Imperdiet ut
                imperdiet cursus in donec. Odio dictum.
              </p>
            </div>
          </div>
          <div className="lastes-info">
            <img
              className="lastes-news-img2 lastes-news-img"
              src={Card2}
              alt=""
            />
            <div className="lastes-info__texts mb-106">
              <p className="lastes-info__data">August 9,2022 </p>
              <h3 className="lastes-info__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.{" "}
              </h3>
              <p className="lastes-info__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                interdum dui pellentesque gravida lacus, ultrices at elementum.
                Pellentesque dictum risus ultrices tortor. Sapien morbi sagittis
                quis cursus. Sit tellus neque ornare mauris. Ut cras at tempus
                metus.{" "}
              </p>
            </div>

            <div className="lastes-info__texts">
              <p className="lastes-info__data">August 9,2022 </p>
              <h3 className="lastes-info__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.{" "}
              </h3>
              <p className="lastes-info__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                viverra tincidunt luctus morbi dui. Volutpat sollicitudin
                adipiscing quam egestas tempus ut. Sollicitudin sem facilisis
                vel urna amet dui nibh ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="lastes-info">
            <div className="lastes-info__texts mb-81">
              <p className="lastes-info__data">August 9,2022 </p>
              <h3 className="lastes-info__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.{" "}
              </h3>
              <p className="lastes-info__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis bibendum non eget fermentum purus tristique arcu enim
                enim. Volutpat a neque, ornare nisl tincidunt enim facilisis
                eros. Natoque nulla vel faucibus sed.{" "}
              </p>
            </div>

            <img
              className="lastes-news-img3 lastes-news-img"
              src={Card3}
              alt=""
            />

            <div className="lastes-info__texts">
              <p className="lastes-info__data">August 9,2022 </p>
              <h3 className="lastes-info__title">Posuere ac at at mi sed. </h3>
              <p className="lastes-info__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                viverra tincidunt luctus morbi dui. Volutpat sollicitudin
                adipiscing quam egestas tempus ut. Sollicitudin sem facilisis
                vel urna amet dui nibh ipsum.
              </p>
            </div>
          </div> */}
          {news?.map((el, index, arr) => {
            if (index === 0) {
              return (
                <div className="lastes-info" key={el.index}>
                  <img className="lastes-news-img1 lastes-news-img" src={Card1} alt={el.title}/>
                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">{arr[4].created_at.substring(0,10)}</p>
                    <h3 className="lastes-info__title">{arr[4].title}</h3>
                    <p className="lastes-info__info">{arr[4].content.substring(0,200)}</p>
                  </div>
                </div>
              );
            } else if (index === 1) {
              return (
                <div className="lastes-info">
                  <img className="lastes-news-img2 lastes-news-img" src={Card2} alt={el.title}/>
                  <div className="lastes-info__texts mb-106">
                    <p className="lastes-info__data">{arr[3].created_at.substring(0,10)}</p>
                    <h3 className="lastes-info__title">{arr[3].title}</h3>
                    <p className="lastes-info__info">{arr[3].content.substring(0,200)}</p>
                  </div>

                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">{arr[2].created_at.substring(0,10)}</p>
                    <h3 className="lastes-info__title">{arr[2].title}</h3>
                    <p className="lastes-info__info">{arr[2].content.substring(0,200)}</p>
                  </div>
                </div>
              );
            } else if (index === 2) {
              return (
                <div className="lastes-info">
                  <div className="lastes-info__texts mb-81">
                    <p className="lastes-info__data">{arr[1].created_at.substring(0,10)}</p>
                    <h3 className="lastes-info__title">{arr[1].title}</h3>
                    <p className="lastes-info__info">{arr[1].content.substring(0,200)}</p>
                  </div>
                  <img className="lastes-news-img3 lastes-news-img" src={Card3} alt=""/>
                  <div className="lastes-info__texts">
                    <p className="lastes-info__data">{arr[0].created_at.substring(0,10)}</p>
                    <h3 className="lastes-info__title">{arr[0].title}</h3>
                    <p className="lastes-info__info">{arr[0].content.substring(0,200)}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Link to="/news">
          <button className="view-more-btn">{t("view__more__btn")}</button>
        </Link>
      </div>
    </section>
  );
}
