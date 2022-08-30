import React, { useEffect } from "react";
import "./News.css";
import { useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";
import news1 from "../../Images/news/news1.jpg";
import news2 from "../../Images/news/news2.jpg";
import news3 from "../../Images/news/news3.png";
import news4 from "../../Images/news/news4.png";
import news5 from "../../Images/news/news5.jpg";
import { useTranslation } from "react-i18next";


const news = [
  {
    id: 1,
    image: news1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 2,
    image: news2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 3,
    image: news3,
    title: "Santa Monica",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 4,
    image: news4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 5,
    image: news5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 6,
    image: news1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 7,
    image: news2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 8,
    image: news3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
  {
    id: 9,
    image: news4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui.",
    info: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Fusce interdum dui pellentesque gravida lacus, 
    ultrices at elementum. Pellentesque dictum risus 
    ultrices tortor. Sapien morbi sagittis quis cursus. 
    Sit tellus neque ornare mauris. Ut cras at tempus metus. `,
    due: "August 9,2022",
  },
];

const News = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const { t } = useTranslation()
  const changeLocal = (id) => {
    navigate(`/news/${id}`);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className="news__box">
      <div className="container">
        <h2>{t('news')}</h2>
        <div className="news">
          {news.map((element) => {
            return (
              <div
                className="new"
                key={element.id}
                onClick={() => changeLocal(element.id)}
              >
                <div className="new_img">
                  <img src={element.image} alt="new_img" />
                </div>
                <div className="new_info">
                  <div className="new_info_date">{element.due}</div>
                  <div className="new_info_title">{element.title}</div>
                  <div className="new_info_info">{element.info}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
