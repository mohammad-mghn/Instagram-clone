/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "./stories.module.css";

import Story from "../../elements/story";

import { StoriesData } from "./storiesdb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Stories = () => {
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={30}
      navigation={true}
      cssMode={true}
      allowTouchMove={true}
      modules={[Navigation]}
      className={style.Slider}
      breakpoints={{
        "@0.00": {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        "@0.05": {
          slidesPerView: 4.5,
          spaceBetween: 5,
        },
        "@0.25": {
          slidesPerView: 4.75,
          spaceBetween: 5,
        },
        "@0.60": {
          slidesPerView: 6,
          spaceBetween: 5,
        },
        "@0.80": {
          slidesPerView: 8,
          spaceBetween: 12,
        },
        "@1.00": {
          slidesPerView: 8,
          spaceBetween: 15,
        },
        "@1.50": {
          slidesPerView: 8.35,
          spaceBetween: 30,
        },
      }}
    >
      {StoriesData.map((story, index) => {
        return (
          <SwiperSlide key={index}>
            <Story story={story} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Stories;
