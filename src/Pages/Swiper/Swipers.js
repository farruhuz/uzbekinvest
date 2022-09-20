import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipers.css";

const Swipers = ({xalqaro, xalqaro2, xalqaro3}) => {
  return (
    <div className="slayder">
      <div className="container">
        <Swiper
         spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={xalqaro} alt={xalqaro} /> </SwiperSlide>
        {xalqaro2 && <SwiperSlide><img src={xalqaro2} alt={xalqaro2} /> </SwiperSlide>}
        {xalqaro3 && <SwiperSlide><img src={xalqaro3} alt={xalqaro3} /> </SwiperSlide>}
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
