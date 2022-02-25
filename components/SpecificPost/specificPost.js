import React, { useState, useRef, useEffect } from "react";
import style from "./specificpost.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import EmojiBox from "../emoji_box/emoji_box";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useRouter } from "next/router";
import Comment from "../comment/comment";
const Specificpost = (props) => {
  const [saved, setSaved] = useState(false);
  const comment = useRef(null);
  const [postButtonStatus, setPostButtonStatus] = useState("");

  const [CommentLentgh, setCommentLentgh] = useState(props.post.comments);
  const [stickers, setStickers] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("savedPosts") === null) {
      localStorage.setItem(
        "savedPostsJson",
        JSON.stringify({ savedPosts: [] })
      );
    }
  }, []);
  console.log(props.post);
  const date = new Date();
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(props.post.like);
  const [commentLike, setCommnetLike] = useState(0);
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
          {props.post.caption === "" ? (
            ""
          ) : (
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
                <div className={style.date}>
                  {timeAgo.format(Date.now() - newDate)}
                </div>
              </div>
            </div>
          )}
          <div className={style.comments}>
            {props.post.comments.map((comment) => {
              return <Comment post={props.post} comment={comment} />;
            })}
          </div>
        </section>
        <section className={style.controlers_section}>
          <div className={style.buttons_section}>
            <div>
              {liked ? (
                <svg
                  aria-label="Unlike"
                  className={style.like_icon}
                  color="#ed4956"
                  fill="#ed4956"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                  onClick={async () => {
                    setLiked(false);
                    setLike((like -= 1));
                    props.post.like = like;
                    const fetching = await fetch("/api/updateLike", {
                      method: "POST",
                      body: JSON.stringify(props.post),
                      headers: {
                        "Content-type": "application/json",
                      },
                    });
                    const response = await fetching.json();
                  }}
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="Like"
                  className={style.like_icon_liked}
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  onClick={async () => {
                    setLiked(true);
                    setLike((like += 1));
                    props.post.like = like;
                    const fetching = await fetch("/api/updateLike", {
                      method: "POST",
                      body: JSON.stringify(props.post),
                      headers: {
                        "Content-type": "application/json",
                      },
                    });
                    const response = await fetching.json();
                  }}
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                </svg>
              )}
            </div>
            <div>
              {props.post.comments ? (
                <svg
                  aria-label="Comment"
                  className={style.buttons_icon}
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                    fill="none"
                    stroke="#000"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              ) : (
                ""
              )}
            </div>
            <div>
              <svg
                aria-label="Share Post"
                className={style.buttons_icon}
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </div>
            <div className={style.buttons_icon_save_div}>
              <svg
                aria-label="Save"
                className={
                  props.post.comments
                    ? style.buttons_icon_save
                    : style.buttons_icon_save_nocomment
                }
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                onClick={() => {
                  if (saved) {
                    let savedPostsJson = JSON.parse(
                      localStorage.getItem("savedPostsJson")
                    );
                    savedPostsJson.savedPosts.map((post, index) => {
                      // console.log(post.id === props.post.id, post, props.post);
                      if (post.id === props.post.id) {
                        console.log("yeas");
                        savedPostsJson.savedPosts.splice(index, 1);
                        console.log(savedPostsJson, "removerd");
                        localStorage.setItem(
                          "savedPostsJson",
                          JSON.stringify(savedPostsJson)
                        );
                      }
                      console.log(
                        JSON.parse(localStorage.getItem("savedPostsJson"))
                      );
                    });
                    setSaved(false);
                  } else {
                    const savedPosts = JSON.parse(
                      localStorage.getItem("savedPostsJson")
                    );
                    savedPosts.savedPosts.push(props.post);
                    localStorage.setItem(
                      "savedPostsJson",
                      JSON.stringify(savedPosts)
                    );
                    console.log(
                      JSON.parse(localStorage.getItem("savedPostsJson"))
                    );
                    setSaved(true);
                  }
                }}
              >
                <polygon
                  fill={saved ? "#000000" : "none"}
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className={style.liked_section}>{props.post.like} likes</div>
          <div className={style.post_date}>
            {timeAgo.format(Date.now() - newDate).toLocaleUpperCase()}
          </div>
          {props.post.comments ? (
            <div className={style.add_comment_div}>
              <svg
                aria-label="Emoji"
                className={style.sticker}
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                onClick={() => {
                  if (stickers) {
                    setStickers(false);
                  } else {
                    setStickers(true);
                  }
                }}
              >
                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
              </svg>

              <div className={style.add_comment}>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className={style.add_comment_input}
                  ref={comment}
                  onChange={() => {
                    setPostButtonStatus(comment.current.value);
                  }}
                  onClick={() => {
                    setStickers(false);
                  }}
                />
              </div>
              <button
                className={
                  postButtonStatus === ""
                    ? style.share_comment_button_disabled
                    : style.share_comment_button
                }
                onClick={async () => {
                  setStickers(false);
                  if (comment.current.value !== "") {
                    setPostButtonStatus("");
                    props.post.comments.push(comment.current.value);
                    console.log("post:", JSON.stringify(props.post));
                    setCommentLentgh((CommentLentgh += comment.current.value));
                    const fetching = await fetch("/api/updateComments", {
                      method: "POST",
                      body: JSON.stringify(props.post),
                      headers: {
                        "Content-type": "application/json",
                      },
                    });
                    const response = await fetching.json();
                  }
                  comment.current.value = "";
                }}
              >
                Post
              </button>
            </div>
          ) : (
            ""
          )}
          {stickers ? (
            <div className={style.emoji_box}>
              <EmojiBox
                array="bottom"
                emojiClicked={(e) => {
                  console.log(e);
                  comment.current.value += e;
                }}
              />
            </div>
          ) : (
            ""
          )}
        </section>
      </section>
    </div>
  );
};

export default Specificpost;
