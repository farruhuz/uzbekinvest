import React from "react";
import "../../Styles/Est.css";
import Arrow from "../../Images/link_white_arrow.png";
import Img1 from "../../Images/est/1.png";
import Img2 from "../../Images/partners/part.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Est() {
  const { t } = useTranslation();
  return (
    <section className="Est">
      <div className="container">
        <div className="est-info">
          <div className="est-info__blog top_esst-info__blog">
            <div className="est-info__blogs">
              <h3 className="est-info__blog-title">{t("about")}</h3>
              <div className="est-info__blogs-info">
                <p className="est-info__blogs-info__text">{t("about__1")}</p>
                <div className="est-info__blogs-info__links">
                  <Link className="est-info__blogs-info__link" to="/about">
                    {t('read__more__btn')}
                  </Link>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>

            <div className="est-info__blogs2">
              <p className="est-info__blogs2-text">{t("about__2")}</p>
              <img src={Img1} alt="" />
            </div>
          </div>

          <div className="est-info__blog middle_esst-info__blog">
            <div className="est-info__blogs3">Партнерам</div>

            <div className="est-info__blogs4">
              <h3 className="est-info__blogs4-title">
                Основными преимуществами компании являются
              </h3>
            </div>
          </div>

          <div className="voluputate-info__blog">
            <img src={Img2} alt="" className="voluputate-info__blog__img" />
            <div className="voluputate-info__blogs etiam">
              <ul>
                <li>
                  • Более чем 21-летний опыт работы в сфере предоставления услуг
                  ассистанс - технической, медицинской и юридической помощи.
                </li>
                <li>
                  • Круглосуточный диспетчерский центр, оснащенный
                  IP-телефонией, интегрированной с уникальной базой данных,
                  запись телефонных разговоров.{" "}
                </li>
                <li>
                  • Работа ведется круглосуточно, без перерывов, выходных и
                  праздничных дней.
                </li>
                <li>
                  • Профессионально подготовленный кадровый состав, включая
                  высококвалифицированных врачей и юристов.{" "}
                </li>
                <li>• Организация госпитализации. </li>
                <li>• Организация репатриации.</li>
              </ul>
              <div className="est-info__blogs-info__links">
                <Link className="est-info__blogs-info__link" to="/partners">
                  {t('read__more__btn')}
                </Link>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
