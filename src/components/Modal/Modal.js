import React from "react";
import "./Modal.css";

const Modal = ({ changeIsModal }) => {
  const changeModal = () => {
    changeIsModal(true);
  };
  return (
    <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={changeModal}>
            &times;
          </span>
          <ul>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Главная</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Новости</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Услуги</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">О нас</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Контакты</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Партнерам</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Помощь</a>
            </li>
        </ul>
        </div>
    </div>
  );
};

export default Modal;
