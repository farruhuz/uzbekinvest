import React from 'react'
import '../Styles/Footer.css'
import Footerlogo from '../Images/footer-logo.png'
import Footerarrow from '../Images/footer-arrow.png'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='footer-info'>

          <div>
            <img src={Footerlogo} alt="" />
            <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique fermentum, montes, non sodales posuere ut porttitor. </p>
            <div className='footer-sedcras-links'>
              <a className='footer-sedcras-link' href="#">Sed cras integer massa.</a>
              <img src={Footerarrow} alt="" />
            </div>
          </div>

          <div>
            <div className="footer-links">
              <ul className="footer-list">
                <li className="footer-item"><a href="#" className="footer-link">Главная</a></li>
                <li className="footer-item"><a href="#" className="footer-link">О нас</a></li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item"><a href="#" className="footer-link">Новости</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Контакты</a></li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item"><a href="#" className="footer-link">Услуги</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Партнерам</a></li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item"><a href="#" className="footer-link">Помощь</a></li>
              </ul>
            </div>
            <p className='footer-info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem maecenas.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
