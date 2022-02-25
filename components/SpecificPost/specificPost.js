/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import style from "./specificpost.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useRouter } from "next/router";
const Specificpost = (props) => {
  const date = new Date();
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [time, setTime] = useState(
    props.post.date === undefined ? date.getTime() : props.post.date
  );
  const newDate = date.getTime() - time;
  const router = useRouter();
  console.log("post", props.post);
  return (
    <div className={style.container}>
      <section className={style.post_media_section}>
        <Swiper
          cssMode={true}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          className={style.slider}
        >
          {props.post.image.map((postdata) => {
            return (
              <SwiperSlide className={style.media_slide} key={props.post.id}>
                <div className={style.post_div}>
                  <img src={postdata} alt="" className={style.post} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className={style.post_data}>
        <header className={style.header}>
          <div className={style.porofile_container}>
            <img
              src={props.post.user_porofile}
              alt=""
              className={style.porofile}
              onClick={() => {
                router.push(`/${props.data.username}`);
              }}
            />
          </div>
          <div className={style.username__location_container}>
            <h2
              onClick={() => {
                router.push(`/${props.post.username}`);
              }}
              className={style.username}
            >
              {props.post.username}
            </h2>
            <h3 className={style.location}>{props.post.location}</h3>
          </div>
          <svg
            aria-label="More options"
            className={style.menu}
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            onClick={() => {
              setMenu(true);
            }}
          >
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </header>
        <section className={style.comments_and_caption_section}>
          <div className={style.caption}>
            <div className={style.porofile_section}>
              <div className={style.porofile_container_in_caption}>
                <img
                  src={props.post.user_porofile}
                  alt=""
                  className={style.porofile}
                  onClick={() => {
                    router.push(`/${props.data.username}`);
                  }}
                />
              </div>
            </div>
            <div className={style.caption_section}>
              <span className={style.username_in_caption}>
                {props.post.username}
              </span>{" "}
              <span className={style.caption_text}>{props.post.caption}</span>
              <div className={style.date_div}>
                {timeAgo.format(Date.now() - newDate).toLocaleUpperCase()}
              </div>
            </div>
          </div>
          <div>
            a asdfasdfasdfasdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
            <br /> asdfasdfasdfasdfasdf asdfas asdf
          </div>
        </section>
      </section>
    </div>
  );
};

export default Specificpost;
