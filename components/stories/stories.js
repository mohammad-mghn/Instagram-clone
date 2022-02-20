/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./stories.module.css";
import story from "./stories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { StoriesData } from "./storiesdb";
import { useRouter } from "next/router";
function Stories() {
  const router = useRouter();
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={30}
      navigation={true}
      cssMode={true}
      allowTouchMove={true}
      modules={[Navigation]}
      className={story.mySwiperStory}
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
      {StoriesData.map((Story, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={story.story_div}>
              <div
                className={Story.seen ? story.img_main_seen : story.img_main}
                onClick={() => {
                  alert("This option is disabled.");
                }}
              >
                <div className={story.story_img}>
                  <img
                    src={Story.porofile}
                    alt={Story.username}
                    className={story.porofile}
                  />
                </div>
              </div>
              <div
                onClick={() => {
                  router.push(`/${Story.username}`);
                }}
                className={story.username}
              >
                {Story.username}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Stories;
