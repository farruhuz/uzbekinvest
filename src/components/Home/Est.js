import React from "react";
import "../../Styles/Est.css";
import Arrow from "../../Images/link_white_arrow.png";
import Img1 from "../../Images/est/1.png";
import Red from "../../Images/link_red_arrow.png";
import Img2 from "../../Images/est/2.jpg";

export default function Est() {
  return (
    <section className="Est">
      <div className="container">
        <div className="est-info">
          <div className="est-info__blog top_esst-info__blog">
            <div className="est-info__blogs">
              <h3 className="est-info__blog-title">О нас </h3>

              <div className="est-info__blogs-info">
                <p className="est-info__blogs-info__text">
                  Кроме отечественного рынка ООО «Узбекинвест Ассистанс»
                  оказывает услуги и зарубежным ассистанс компаниям. На
                  сегодняшний день нашими партнёрами являются такие ассистанс
                  компании как: Euroasia Assistance, Inter Assist, Мissadena,
                  Jiang Tai Global Assistance, VMA LLC, AP Companies Ltd, Global
                  Voyadger Assistance, Remed Assistance, и Balt Assistance и др.
                </p>
                <div className="est-info__blogs-info__links">
                  <a className="est-info__blogs-info__link" href="#">
                    Lorem ipsum{" "}
                  </a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>

            <div className="est-info__blogs2">
              <p className="est-info__blogs2-text">
                Основанное в 2000 году, ООО «Узбекинвест Ассистанс» является
                одним из главных ассистанс компании в Республике Узбекистан.
              </p>
              <img src={Img1} alt="" />
            </div>
          </div>

          <div className="est-info__blog middle_esst-info__blog">
            <div className="est-info__blogs3">
              Партнерам
            </div>

            <div className="est-info__blogs4">
              <h3 className="est-info__blogs4-title">
                Основными преимуществами компании являются
              </h3>
            </div>
          </div>

          <div className="voluputate-info__blog">
            <img src={Img2} alt="" className="voluputate-info__blog__img" />

            <div className="voluputate-info__blogs">
              <div className="voluputate">
                <h3 className="voluputate-title">
                  Vulputate cursus non id dolor
                </h3>
                <p className="voluputate-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Habitant est aliquam, sit nisi vulputate odio. Justo bibendum
                  mi feugiat eros, ipsum, diam. Id varius odio suspendisse proin
                  pulvinar dignissim sed. Vulputate cursus non id dolor, tortor
                  eleifend congue.{" "}
                </p>
                <div className="est-info__blogs-info__links">
                  <a className="est-info__blogs-info__link2" href="#">
                    Lorem ipsum{" "}
                  </a>
                  <img src={Red} alt="" />
                </div>
              </div>

              <div className="etiam">
                <h3 className="etiam-title">Etiam ultrices blandit ac sit.</h3>
                <p className="etiam-text">
                  Ultrices arcu nibh consequat vitae facilisis molestie
                  lobortis. Libero nunc nisi, mauris risus. Id in vel nulla
                  praesent enim. Nunc, mattis tristique feugiat viverra id sed
                  sit. Urna aliquet quis sit duis elit et.{" "}
                </p>
                <div className="est-info__blogs-info__links">
                  <a className="est-info__blogs-info__link" href="#">
                    Lorem ipsum{" "}
                  </a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
