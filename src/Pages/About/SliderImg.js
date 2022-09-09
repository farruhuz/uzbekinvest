import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Sliderimage from "../../Images/slider-img.jpg";
import { Navigation } from "swiper";

const SliderImg = () => {
  return (
    <div className="slider__about">
      <div className="swiper__about">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper__about"
        >
          <SwiperSlide className="slide-page__about">
            <a target="_blank" href="https://ariainsurance.uz/">
              <img src={Sliderimage} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-page__about">
            <img src={Sliderimage} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderImg;
