import React, { useState } from "react";
import styles from "../../styles/create.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
function ReviewComponent(props) {
  const [reload, setreload] = useState(true);
  const [reloadd, setreloadd] = useState(true);
  function slider() {
    return (
      <>
        <div
          className={styles.add_another_img}
          onClick={() => {
            props.addHandler();
            setreload(() => {
              if (reload) {
                return false;
              } else {
                return true;
              }
            });
            slider();
          }}
        >
          <svg
            aria-label="Open Media Gallery"
            className={styles.add_another_img_svg}
            color="#ffffff"
            fill="#ffffff"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <path
              d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          cssMode={true}
          allowTouchMove={true}
          modules={[Navigation]}
          className={styles.mySwiperStory}
        >
          {props.img_src.map((postImgSrc, index) => {
            return (
              <SwiperSlide className={styles.mySwiperStoryImg} key={index}>
                <img className={styles.img_preview} src={postImgSrc} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
  return (
    <div className={styles.create_main_section_edit}>
      <header className={styles.header_edit}>
        <svg
          aria-label="Back"
          className={styles.edit_back_button}
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          onClick={() => {
            props.setSelect("select");
            props.setImg_src(props.img_src);
          }}
        >
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="2.909"
            x2="22.001"
            y1="12.004"
            y2="12.004"
          ></line>
          <polyline
            fill="none"
            points="9.276 4.726 2.001 12.004 9.276 19.274"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polyline>
        </svg>
        <h3 className={styles.header_title}>Crop</h3>
        <h3
          onClick={() => {
            props.setSelect("share");
          }}
          className={styles.next_button}
        >
          Next
        </h3>
      </header>
      <section className={styles.main_section_edit}>{slider()}</section>
    </div>
  );
}

export default ReviewComponent;
