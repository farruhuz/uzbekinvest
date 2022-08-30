import React from "react";
import "../Styles/Footer.css";
import Footerlogo from "../Images/footer-logo.png";
import Footerarrow from "../Images/footer-arrow.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="footer-info__box1">
            <img src={Footerlogo} alt="" />
            <p className="footer-text">
              Республика Узбекистан, г. Ташкент, 100017, ул. Чупон ота, 6.
            </p>
            <div className="footer-sedcras-links">
              <input className="footer-sedcras-link" placeholder="Send message"/>
              <a target="_blank"  rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=info@besthouse.uz">
                <img src={Footerarrow} alt="Footerarrow"/>
              </a>
            </div>
          </div>

          <div className="footer-info__box2">
            <div className="footer-links">
              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/" className="footer-link">
                    Главная
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to="/about" className="footer-link">
                    О нас
                  </Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/news" className="footer-link">
                    Новости
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to="/contact" className="footer-link">
                    Контакты
                  </Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/services" className="footer-link">
                    Услуги
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to="/partners" className="footer-link">
                    Партнерам
                  </Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/depart" className="footer-link">
                    Отделы
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to="/help" className="footer-link">
                    Помощь
                  </Link>
                </li>
              </ul>
            </div>
            <p className="footer-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              maecenas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
