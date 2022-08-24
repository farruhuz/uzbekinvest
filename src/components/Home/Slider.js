import React from "react";
import "../../Styles/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Sliderimage from "../../Images/slider-img.jpg";
import { Navigation } from "swiper";

export default function Slider() {
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
                <h3 className="swiper-title">Useful links</h3>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-page">
                  <img src={Sliderimage} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
