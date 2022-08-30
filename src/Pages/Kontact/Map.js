import React from "react";
import { useTranslation } from "react-i18next";

const Map = () => {
  const {t} = useTranslation()
  return (
    <section className="Contact__map">
      <div className="container">
        <div className="contact-info__map">
          <div className="contact-info__info__map">
            <div className="contact-texts__map">
              <h3 className="contact-info__info-title__map">{t('contact')}</h3>
              <p id="contact-info__info-text__map">{t('direct__number')}</p>
              <h5>+998 90 008 11 60</h5>
              <h5>+998 90 004 11 60</h5>
              <p id="contact-info__info-text__map">{t('short__number')}</p>
              <span>11 60</span>
            </div>
            <div className="contact-texts__map__2">
              <div className="contact-contact__map">
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">{t('adress__map')}</p>
                  <p className="contact-addres-text__map">{t('adress')}</p>
                </div>
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">{t('phone__map')}</p>
                  <p className="contact-addres-text__map">
                    (+998 71) 207-60-00
                  </p>
                </div>
              </div>
              <div className="contact-contact__map">
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">{t('follow_us__map')}</p>
                  <p className="contact-addres-text__map contact-addres-text__map__links">
                    <div>
                      <a href="https://www.instagram.com/uzbekinvest_/">Instagram</a>
                      <a href="https://t.me/uzbekinvest">Telegramm</a>
                    </div>
                    <div>
                      <a href="https://www.facebook.com/Uzbekinvest">Facebook</a>
                      <a href="https://www.youtube.com/channel/UC6hHH4wLKLutWTNZPjx_zew">YouTube</a>
                    </div>
                  </p>
                </div>

                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">{t('email__map')}</p>
                  <p className="contact-addres-text__map">
                    assist@uzbekinvest.uz
                  </p>
                </div>
              </div>
            </div>
          </div>
          <iframe  className="contact-map__map"  frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.660160057668!2d69.20915560486982!3d41.28363127017464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36a50c9793%3A0x995b33e6f8b66565!2s%22Uzbekinvest%22%20Export-Import%20Insurance%20Company!5e0!3m2!1sen!2s!4v1661850027544!5m2!1sen!2s" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
