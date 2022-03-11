/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import style from "./porofile.module.css";
function Porofile(props) {
  return (
    <main className={style.container}>
      <section className={style.main_section}>
        <section className={style.user_data}>
          <div className={style.porofile_section}>
            <img
              src={props.user.porofile_img}
              alt=""
              className={style.porofile}
            />
          </div>
          <div className={style.user_data_section}>
            <div className={style.user_settings_and_username}>
              <h1 className={style.username}>{props.user.username}</h1>
              <div className={style.settings_section}>
                <button className={style.edit_porofile}>Edit Porofile</button>
                <svg
                  aria-label="Options"
                  className={style.settings_svg}
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={style.posts_following_followers_count}>
              <h4 className={style.count_heading}>
                <span className={style.count_heading_num}>
                  {props.user.posts.length}
                </span>{" "}
                posts
              </h4>
              <h4 style={{ cursor: "pointer" }} className={style.count_heading}>
                <span className={style.count_heading_num}>
                  {props.user.followers.length}
                </span>{" "}
                followers
              </h4>
              <h4 style={{ cursor: "pointer" }} className={style.count_heading}>
                <span className={style.count_heading_num}>
                  {props.user.following.length}
                </span>{" "}
                following
              </h4>
            </div>
            <h3 className={style.fullname_div}>{props.user.fullname}</h3>
            <div className={style.bio_container}>
              <p className={style.bio}>
                {props.user.bio}
                Front-end developer, ReFront-end developer, React.js lover,
                Santur player, student Front-end developer, React.js lover,
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Porofile;
