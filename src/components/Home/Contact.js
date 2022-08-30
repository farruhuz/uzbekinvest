import React from "react";
import { useTranslation } from "react-i18next";
import "../../Styles/Contact.css";

const Contact = () => {
  const {t} = useTranslation()
  return (
    <section className="Contact">
      <div className="container">
        <div className="contact-info">
          <div className="contact-info__info">
            <div className="contact-texts">
              <h3 className="contact-info__info-title">{t('contact')}</h3>
              <p className="contact-info__info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
                  vitae volutpat, ultricies justo cursus. Vel, vitae, commodo
                  bibendum tellus, et laoreet.
              </p>
            </div>

            <div className="contact-contact">
              <div className="contact-adddres-info">
                <p className="contact-addres-title">{t('adress__map')}</p>
                <p className="contact-addres-text">{t('adress')}</p>
              </div>
              <div className="contact-adddres-info">
                <p className="contact-addres-title">{t('phone__map')}</p>
                <p className="contact-addres-text">+998 90 3279955</p>
              </div>
            </div>
            <div className="contact-contact">
              <div className="contact-adddres-info">
                <p className="contact-addres-title__map">{t('follow_us__map')}</p>
                <p className="contact-addres-text__map contact-addres-text__map__links">
                  <div>
                    <a target="_blank" href="https://www.instagram.com/assistance.uzb/?igshid=YmMyMTA2M2Y%3D">
                      Instagram
                    </a>
                    <a target="_blank" href="https://t.me/assistance_uzb">Telegram</a>
                  </div>
                  <div>
                    <a target="_blank" href="https://www.facebook.com/assistanceuzb">Facebook</a>
                    <a href="https://www.youtube.com/channel/UC1iuUOmZnP1LCce8_b7WIlg">
                      YouTube
                    </a>
                  </div>
                </p>
              </div>

              <div className="contact-adddres-info">
                <p className="contact-addres-title">{t('email__map')}</p>
                <p className="contact-addres-text">assist@uzbekinvest.uz</p>
              </div>
            </div>
          </div>
          <iframe  className="contact-map"  frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.660160057668!2d69.20915560486982!3d41.28363127017464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36a50c9793%3A0x995b33e6f8b66565!2s%22Uzbekinvest%22%20Export-Import%20Insurance%20Company!5e0!3m2!1sen!2s!4v1661850027544!5m2!1sen!2s" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
