import React from "react";
import "../../Styles/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import aria from "../../Images/links/aria.png";
import avto from "../../Images/links/avto.png";
import ingo from "../../Images/links/ingo.png";
import invest from "../../Images/links/invest.png";
import med__center from "../../Images/links/med__center.png";
import xmed from "../../Images/links/xmed.png";

import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="swiper">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <h3 className="swiper-title">{t("useFull__links")}</h3>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="https://ariainsurance.uz/">
                    <img src={aria} alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="http://avtoritetgroup.uz/ru/">
                    <img src={avto} alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="https://ingo.uz/?lang=uz">
                    <img src={ingo} alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="https://uzbekinvest.uz/">
                    <img src={invest} alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="https://shox.hospital/">
                    <img src={med__center} alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <a target="_blank" href="http://ixmed.uz/">
                     <img src={xmed} alt="" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
