import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Modal.css";

const Modal = ({ changeIsModal }) => {
  const { t } = useTranslation();
  const changeModal = () => {
    changeIsModal(true);
  };
  return (
    <div id="myModal" class="modal" >
        <div class="modal-content">
          <span class="close" onClick={changeModal}>&times;</span>
          <ul>
            <li className="navbar-item">
              <Link to="/" onClick={changeModal} className="navbar-link">{t('home')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" onClick={changeModal} className="navbar-link">{t('news')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" onClick={changeModal} className="navbar-link">{t('services')}</Link>
            </li>
            <li className="navbar-item">
              <a to="/about" onClick={changeModal} className="navbar-link">{t('about')}</a>
            </li>
            <li className="navbar-item">
              <Link to="/contact" onClick={changeModal} className="navbar-link">{t('contact')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" onClick={changeModal} className="navbar-link">{t('partners')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" onClick={changeModal} className="navbar-link">{t('help')}</Link>
            </li>
        </ul>
        </div>
    </div>
  );
};

export default Modal;
