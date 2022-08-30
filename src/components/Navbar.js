import React, { useState } from "react";
import NavbarLogo from "../Images/navbar-logo.png";
import "../Styles/Navbar.css";
import burger from "../Images/burger.png";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar({changeLang}) {
  const { t } = useTranslation();
  const [isModal, setIsModal] = useState(false);

  const changeLanguageHandler = (e) =>{
    changeLang(e.target.value);
  }
  const changeIsModal = (event)=>{
    if(event){
      event ? setIsModal(false) : setIsModal(true)
    }
    isModal ? setIsModal(false) : setIsModal(true)
  }
  
  return (
    <nav className="navbar">
      <div className="container">
        <section className="nav-bar">
          <ul className="navbar-list">
            <img className="navbar-logo" src={NavbarLogo} alt="" />
            <li className="navbar-item">
              <Link to="/" className="navbar-link">{t('home')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" className="navbar-link">{t('news')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">{t('services')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">{t('about')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">{t('contact')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" className="navbar-link">{t('partners')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" className="navbar-link">{t('help')}</Link>
            </li>
          </ul>
          <ul className="navbar-info">
            <li className="navbar-info__link">
              <a className="exit" href="#">{t('login')}</a>
            </li>
            <select className="navbar-info__language" name="language" id="language" onClick={changeLanguageHandler}>
              <option className="language" value="ru">{t('ru')}</option>
              <option className="language" value="uz">{t('uz')}</option>
            </select>
          </ul>
          <img className="false" src={burger} onClick={changeIsModal} alt="burger"/>
         {isModal && <Modal changeIsModal={changeIsModal}/>}
        </section>
      </div>
    </nav>
  );
}
