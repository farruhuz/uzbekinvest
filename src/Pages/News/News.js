import React, { useEffect } from "react";
import "./News.css";
import { useLocation, useNavigate} from "react-router-dom";

const news = [
  {
    id: 1,
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
  
  const changeLocal = (id) => {
    console.log(id);
    navigate(`/news/${id}`);
  }

  return (
    <div className="news__box">
      <div className="container">
        <h2>Все новости</h2>
        <div className="news">
          {news.map((element) => {
            return (
              <div
                className="new"
                key={element.id}
                onClick={() => changeLocal(element.id)}
              >
                <div className="new_img">
                  <img src="" alt="new_img" />
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
