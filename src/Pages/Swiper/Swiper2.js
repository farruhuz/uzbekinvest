import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swiper2 = ({xalqaro, xalqaro2, xalqaro3}) => {
  return (
    <div className="slayder2">
        <Swiper
         spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide><img src={xalqaro} alt={xalqaro} /> </SwiperSlide>
        <SwiperSlide><img src={xalqaro2} alt={xalqaro2} /> </SwiperSlide>
        <SwiperSlide><img src={xalqaro3} alt={xalqaro3} /> </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Swiper2;
