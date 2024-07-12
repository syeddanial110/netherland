"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ericssonImg from "../../assets/images/ericsson.png";
import vmWareImg from "../../assets/images/vmWare.png";
import serviceNowImg from "../../assets/images/serviceNow.png";
import amazonImg from "../../assets/images/amazon.png";
import Image from "next/image";

const PastWorkSlider = () => {
  const arr = [
    ericssonImg,
    vmWareImg,
    serviceNowImg,
    amazonImg,
    ericssonImg,
    vmWareImg,
    serviceNowImg,
    amazonImg,
  ];
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="pastWorkSwiper"
    >
      {arr.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={item}
              height={150}
              width={180}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PastWorkSlider;
