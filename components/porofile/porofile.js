/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import style from "./porofile.module.css";
function Porofile(props) {
  var date = new Date();
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
              <p className={style.bio}>{props.user.bio}</p>
            </div>
          </div>
        </section>
        <section className={style.menu}>
          <div className={style.menu_items}>
            <button type="radio" className={style.menu_item_clicked}>
              <svg
                aria-label=""
                className={style.meun_item_icon}
                color="#262626"
                fill="#262626"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              <h5 className={style.menu_header}>POSTS</h5>
            </button>

            <button type="radio" className={style.menu_item}>
              <svg
                aria-label=""
                className={style.meun_item_icon}
                color="#8e8e8e"
                fill="#000"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path>
              </svg>
              <h5 className={style.menu_header}>VIDOES</h5>
            </button>
            <button type="radio" className={style.menu_item}>
              <svg
                aria-label=""
                className={style.meun_item_icon}
                color="#000"
                fill="#000"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
              <h5 className={style.menu_header}>SAVED</h5>
            </button>
            <button type="radio" className={style.menu_item}>
              <svg
                aria-label=""
                className={style.meun_item_icon}
                color="#262626"
                fill="#262626"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              <h5 className={style.menu_header}>TAGGED</h5>
            </button>
          </div>
        </section>
        <section className={style.posts}>
          {props.user.posts !== []
            ? props.user.posts.map((post) => {
                console.log(post.image);
                return (
                  <div className={style.post} key={post.id}>
                    <img
                      className={style.post_image}
                      src={post.image[0]}
                      alt=""
                    />
                  </div>
                );
              })
            : ""}
        </section>
      </section>
      <footer className={style.footer}>
        <section className={style.links}>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Meta
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            About
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Blog
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Jobs
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Help
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            API
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Privacy
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Terms
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Top
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Accounts
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Hashtags
          </a>
          <a href="https://about.facebook.com/meta" className={style.link}>
            Locations
          </a>
        </section>
        <section className={style.copy_right_and_language}>
          <select
            aria-label="Switch Display Language"
            className={style.language_select}
          >
            <option value="af">Afrikaans</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="el">Ελληνικά</option>
            <option value="en" selected>
              English
            </option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt-br">Português (Brasil)</option>
            <option value="pt">Português (Portugal)</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="th">ภาษาไทย</option>
            <option value="tl">Filipino</option>
            <option value="tr">Türkçe</option>
            <option value="zh-cn">中文(简体)</option>
            <option value="zh-tw">中文(台灣)</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="hr">Hrvatski</option>
            <option value="hu">Magyar</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="si">සිංහල</option>
            <option value="sk">Slovenčina</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh-hk">中文(香港)</option>
            <option value="bg">Български</option>
            <option value="fr-ca">Français (Canada)</option>
            <option value="ro">Română</option>
            <option value="sr">Српски</option>
            <option value="uk">Українська</option>
          </select>

          <div className={style.copy_right_part}>
            © {date.getFullYear()} Instagram from Meta
          </div>
        </section>
      </footer>
    </main>
  );
}

export default Porofile;
