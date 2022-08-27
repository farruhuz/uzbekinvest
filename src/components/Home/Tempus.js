import React from "react";
import "../../Styles/Tempus.css";
import {Link} from "react-router-dom"
import firstImg from "../../Images/tempus/med.jpg";
import secondImg from "../../Images/tempus/yur.jpg";
import thirdtImg from "../../Images/tempus/images.jpg";
import fourImg from "../../Images/tempus/4.jpg";

const tempus = [
  {
    id: 1,
    image: firstImg,
    title: "Медицинский ассистанс",
    info: "",
  },
  {
    id: 2,
    image: secondImg,
    title: "Юридический ассистанс",
    info: "",
  },
  {
    id: 3,
    image: thirdtImg,
    title: "Технический ассистанс",
    info: "",
  },
  {
    id: 4,
    image: fourImg,
    title: "Персоналный ассистанс",
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
                <div>
                  <img className="tempus-info__img" src={element.image} alt="" />
                </div>
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
