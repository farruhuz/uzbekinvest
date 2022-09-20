import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Modal.css";

const Modal = ({ changeIsModal, isBoll }) => {

  const { t } = useTranslation();

  const changeModal = ( bool) => {
    changeIsModal(bool);
  }

  return (
    <div className={isBoll ? "modal__2" : "modal"}>
        <div className={isBoll ? "modal-content__2" : "modal-content"}>
          <p className="close"><span onClick={()=>changeModal(false)}>&times;</span></p>
          <ul className="modal-menu"> 
            <li className="navbar-item">
              <Link to="/" onClick={()=>changeModal(false)} className="navbar-link">{t('home')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" onClick={()=>changeModal(false)} className="navbar-link">{t('news')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" onClick={()=>changeModal(false)} className="navbar-link">{t('services')}</Link>
            </li>
            <li className="navbar-item">
              <a to="/about" onClick={()=>changeModal(false)} className="navbar-link">{t('about')}</a>
            </li>
            <li className="navbar-item">
              <Link to="/contact" onClick={()=>changeModal(false)} className="navbar-link">{t('contact')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" onClick={()=>changeModal(false)} className="navbar-link">{t('partners')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" onClick={()=>changeModal(false)} className="navbar-link">{t('help')}</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Modal;
