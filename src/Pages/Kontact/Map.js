import React from "react";

const Map = () => {
  return (
    <section className="Contact__map">
      <div className="container">
        <div className="contact-info__map">
          <div className="contact-info__info__map">
            <div className="contact-texts__map">
              <h3 className="contact-info__info-title__map">Контакты</h3>
              <p id="contact-info__info-text__map">Прямой контактный номер</p>
              <h5>+998 90 008 11 60</h5>
              <h5>+998 90 004 11 60</h5>
              <p id="contact-info__info-text__map">Короткий номер</p>
              <span>11 60</span>
            </div>
            <div className="contact-texts__map__2">
              <div className="contact-contact__map">
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">Адресс</p>
                  <p className="contact-addres-text__map">
                    Республика Узбекистан, г. Ташкент, 100017, ул. Чупон ота, 6.
                  </p>
                </div>
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">Телефон</p>
                  <p className="contact-addres-text__map">
                    (+998 71) 207-60-00
                  </p>
                </div>
              </div>
              <div className="contact-contact__map">
                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">Follow us</p>
                  <p className="contact-addres-text__map contact-addres-text__map__links">
                    <div>
                      <a href="#">ingtagramm</a>
                      <a href="#">telegramm</a>
                    </div>
                    <div>
                      <a href="#">facebook</a>
                      <a href="#">youtube</a>
                    </div>
                  </p>
                </div>

                <div className="contact-adddres-info__map">
                  <p className="contact-addres-title__map">Почта</p>
                  <p className="contact-addres-text__map">
                    assist@uzbekinvest.uz
                  </p>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className="contact-map__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5823.4391687421585!2d69.30665471328076!3d41.30800517387095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5c8f1bb33a3%3A0xa193c5c2e7c5a340!2sKoko%20Digital%20Agency!5e0!3m2!1sru!2s!4v1660646813473!5m2!1sru!2s"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
