import React, { useState } from "react";
import NavbarLogo from "../Images/navbar-logo.png";
import "../Styles/Navbar.css";
import burger from "../Images/burger.png";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isModal, setIsModal] = useState(false);

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
              <Link to="/basic" className="navbar-link">Главная</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" className="navbar-link">Новости</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Услуги</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">О нас</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Контакты</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" className="navbar-link">Партнерам</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" className="navbar-link">Помощь</Link>
            </li>
          </ul>
          <ul className="navbar-info">
            <li className="navbar-info__link">
              <a className="exit" href="#">Войти</a>
            </li>
            <select className="navbar-info__language" name="language" id="language">
              <option className="language" value="RU">RU</option>
              <option className="language" value="UZ">UZ</option>
            </select>
          </ul>
          <img className="false" src={burger} onClick={changeIsModal} alt="burger"/>
         {isModal && <Modal changeIsModal={changeIsModal}/>}
        </section>
      </div>
    </nav>
  );
}
