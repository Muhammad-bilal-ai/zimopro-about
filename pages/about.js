// src/SwiperComponent.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div style={{ background: "lightblue", height: "300px" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "lightcoral", height: "300px" }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "lightgreen", height: "300px" }}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "lightpink", height: "300px" }}>Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
