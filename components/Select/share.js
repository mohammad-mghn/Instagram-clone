/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "../../styles/create.module.css";

import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
function ShareComponent(props) {
 
  const date = new Date();
  return (
    <div className={styles.create_main_section_share}>
      <header className={styles.header_edit}>
        <svg
          aria-label="Back"
          className={styles.share_back_button}
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          onClick={() => {
            props.setSelect("review");
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
        <h3 className={styles.header_title}>Create new post</h3>
        <h3 onClick={props.ShareButton} className={styles.next_button}>
          Share
        </h3>
      </header>
      <section className={styles.main_section_share_father}>
        <section className={styles.main_section_share}>
          {/* <img className={styles.img_preview} src={props.img_src} alt="" /> */}
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
                <SwiperSlide key={index}>
                  <img className={styles.img_preview} src={postImgSrc} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className={styles.details_main_div}>
          <div className={styles.details_div}>
            <img
              className={styles.porofile_img}
              src={
                "https://mohagheghian.netlify.app/static/media/porofile.2a72b316.png"
              }
              alt=""
            />
            <div className={styles.porofile_username}>vito.mohagheghian</div>
          </div>
          <div className={styles.caption_input_div}>
            <textarea
              onKeyUp={() => {
                props.captionHander();
              }}
              onKeyDown={() => {
                props.captionValueHandler();
              }}
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              ref={props.caption}
              placeholder="Write a caption..."
              className={styles.caption_input}
            ></textarea>
          </div>
          <div className={styles.caption_details_div}>
            <svg
              aria-label="Emoji"
              className={styles.caption_emoji}
              color="#8e8e8e"
              fill="#8e8e8e"
              height="20"
              role="img"
              viewBox="0 0 24 24"
              width="20"
              onClick={() => {
                props.emoji ? props.setEmoji(false) : props.setEmoji(true);
              }}
            >
              <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
            </svg>
            <h5 className={styles.caption_count}>{props.counter}/2000</h5>
          </div>
          {props.emoji ? (
            <Picker
              onEmojiClick={props.emojiHandler}
              native
              className={styles.picker}
            />
          ) : (
            ""
          )}
          <section className={styles.location_main_div}>
            <input
              className={styles.location_input}
              type="text"
              placeholder="Add location"
              ref={props.location}
              onKeyUp={props.locationsHandler}
            />
            <svg
              aria-label="Add location"
              className={styles.location_icon}
              color="#3b3b3b"
              fill="#3b3b3b"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M12.053 8.105a1.604 1.604 0 101.604 1.604 1.604 1.604 0 00-1.604-1.604zm0-7.105a8.684 8.684 0 00-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 001.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0012.053 1zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0113.417 0c0 3.985-3.944 8.538-6.709 11.002z"></path>
            </svg>
          </section>
          <section className={props.accessibilityStyle}>
            <div className={styles.accessibility_review_div}>
              <h5 className={styles.accessibility_section_title}>
                Accessibility
              </h5>
              <svg
                aria-label="Down Chevron Icon"
                className={props.accessibilityIconStyle}
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
                onClick={() => {
                  props.setAdvancedStyle(styles.advanced_section);
                  props.setAdvancedIconStyle(styles.advanced_section_svg);
                  props.setEmoji(false);
                  if (
                    props.accessibilityStyle === styles.accessibility_section
                  ) {
                    props.setAccessibilityStyle(
                      styles.accessibility_section_show
                    );
                    props.setAccessibilityIconStyle(
                      styles.accessibility_section_svg_opened
                    );
                  } else {
                    props.setAccessibilityStyle(styles.accessibility_section);
                    props.setAccessibilityIconStyle(
                      styles.accessibility_section_svg
                    );
                  }
                }}
              >
                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
              </svg>
            </div>
            <div className={styles.accessibility_description}>
              <h6 className={styles.accessibility_section_description}>
                Alt text describes your photos for people with visual
                impairments. Alt text will be automatically created for your
                photos or you can choose to write your own.
              </h6>
              <div className={styles.accessibility_add_description}>
                <img
                  src={props.img_src}
                  alt=""
                  className={styles.accessibility_img_input}
                />
                <input
                  type="text"
                  className={styles.accessibility_input}
                  placeholder="Write alt text..."
                />
              </div>
            </div>
          </section>
          <section className={props.advancedStyle}>
            <div className={styles.advanced_review_div}>
              <h5 className={styles.accessibility_section_title}>
                Advanced settings
              </h5>
              <svg
                aria-label="Down Chevron Icon"
                className={props.advancedIconStyle}
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
                onClick={() => {
                  props.setAccessibilityStyle(styles.accessibility_section);
                  props.setAccessibilityIconStyle(
                    styles.accessibility_section_svg
                  );
                  props.setEmoji(false);
                  if (props.advancedStyle === styles.advanced_section) {
                    props.setAdvancedStyle(styles.advanced_section_opened);
                    props.setAdvancedIconStyle(
                      styles.advanced_section_svg_opened
                    );
                  } else {
                    props.setAdvancedStyle(styles.advanced_section);
                    props.setAdvancedIconStyle(styles.advanced_section_svg);
                  }
                }}
              >
                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
              </svg>
            </div>
            <div className={styles.advanced_settings_section}>
              <h6 className={styles.advanced_comment_title}>
                Turn off commenting
              </h6>
              <input
                type="checkbox"
                name="comment_button"
                id="button"
                ref={props.commentOption}
                className={styles.comment_button}
                checked={!props.comment}
                onChange={() => {
                  props.setComment(() => {
                    if (props.commentOption.current.checked === true) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                }}
                onClick={props.commentsHandler}
              />
              <label htmlFor="button"></label>
            </div>
            <div className={styles.advanced_comment_description}>
              You can change this later by going to the ··· menu at the top of
              your post.
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default ShareComponent;
