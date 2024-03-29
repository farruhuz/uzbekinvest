import React from "react";
import "../Styles/Footer.css";
import Footerlogo from "../Images/footer-logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation()
  return (
    <>
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="footer-info__box1">
            <img src={Footerlogo} alt="" className="img__1"/>
          </div>

          <div className="footer-info__box2">
            <div className="footer-links">
              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/" className="footer-link">{t('home')}</Link>
                </li>
                <li className="footer-item">
                  <Link to="/about" className="footer-link">{t('about')}</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/news" className="footer-link">{t('news')}</Link>
                </li>
                <li className="footer-item">
                  <Link to="/contact" className="footer-link">{t('contact')}</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/services" className="footer-link">{t('services')}</Link>
                </li>
                <li className="footer-item">
                  <Link to="/partners" className="footer-link">{t('partners')}</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/depart" className="footer-link">{t('depart')}</Link>
                </li>
                <li className="footer-item">
                  <Link to="/help" className="footer-link">{t('help')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <div className="koko">
        <a target="_blank" rel="noreferrer" href="https://kokoagency.uz/">
          © 2022 by <span>Koko Digital Agency</span> 
        </a>
      </div>
    </>
  );
}
