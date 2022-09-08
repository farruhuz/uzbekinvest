import React, { useEffect, useState } from "react";
import "./News.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PaginationControlled from "../../components/Pagination/Pagination";
import axios from "axios";
import { ClipLoader } from "react-spinners";


const News = ({exchangeInfo}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const T = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);

  const plitka = (value = id) => {
    setId(value);
  };
  const changeLocal = (news__innovation) => {
    exchangeInfo(news__innovation);
    navigate(`/news/${news__innovation.id}`)
  };

  const getAllNews = async () => {
    if(T.i18n.language === 'uz'){
      setLoading(true);
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/uz/news/list-news/?page=${id}`);
      setNews(res.data.results);
      setLoading(false);
    }
    else{
      setLoading(true);
      const res = await axios.get(`https://uzbekinvest.kokoagency.uz/ru/news/list-news/?page=${id}`);
      setNews(res.data.results);
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllNews();
  }, [id, T.i18n.language]);

  return (
    <div className="news__box">
      <div className="container">
        <h2>{t("news")}</h2>
        <div className="news">
          {!loading &&
            news?.map((element) => {
              return (
                <div
                  className="new"
                  key={element.id}
                  onClick={() => changeLocal(element)}
                >
                  <div className="new_img">
                    <img src={element.image} alt="new_img" />
                  </div>
                  <div className="new_info">
                    <div className="new_info_date">{element?.created_at?.substring(0, 10)+" "+ element?.created_at?.substring(11, 16)}</div>
                    <div className="new_info_title">{element?.subtitle?.substring(0,100)+" ..."}</div>
                    <div className="new_info_info">{element?.content?.substring(0,200)+" ..."}</div>
                  </div>
                </div>
              );
            })}
          <div className="spinner">
            <ClipLoader size={50} loading={loading} />
          </div>
          <PaginationControlled plitka={plitka} id={id} />
        </div>
      </div>
    </div>
  );
};

export default News;
