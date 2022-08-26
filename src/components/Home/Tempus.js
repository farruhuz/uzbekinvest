import React from "react";
import "../../Styles/Tempus.css";
import InfoImg from "../../Images/tempus-info.png";
import {Link} from "react-router-dom"
const tempus = [
  {
    id: 1,
    image: "",
    title: "Медицинский ассистанс",
    info: "",
  },
  {
    id: 2,
    image: "Юридический ассистанс",
    title: "",
    info: "",
  },
  {
    id: 3,
    image: "Технический ассистанс",
    title: "",
    info: "",
  },
  {
    id: 4,
    image: "Персоналный ассистанс",
    title: "",
    info: "",
  },
];
export default function Tempus() {
  const changeLocation = () => {};
  return (
    <section className="Tempus">
      <div className="container">
        <div className="tempus">
          <h2 className="tempus-title">Услуги.</h2>
          {tempus.map((element) => {
            return (
              <div className="tempus-info" key={element.id}>
                <img className="tempus-info__img" src={InfoImg} alt="" />
                <div className="tempus-info__card">
                  <div>
                    <h3 className="tempus-info__card-title">{element.title}</h3>
                    <p className="tempus-info__card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum quam turpis justo, morbi ut id enim. Maecenas
                      facilisis ultrices commodo, sociis. Rhoncus, viverra
                      pharetra urna in malesuada nulla.{" "}
                    </p>
                  </div>
                  <Link to="/services">
                    <button className="tempus-info__card-btn">
                      Lorem ipsum
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/services"><button className="view-more-btn">View more</button></Link>
      </div>
    </section>
  );
}
