/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

import styles from "./followSuggest.module.css";
import HomeStyles from "../../styles/Home.module.css";

import Suggestion from "./suggestion";

// SuggestionsDB is containing suggested accounts
import SuggestionsDB from "./followSuggestDB";

import LoginHandler from "../../modules/LoginHandler/loginHandler";

function FollowSuggest() {
  const links = [
    { href: "https://about.instagram.com/", title: "About" },
    { href: "https://about.instagram.com/", title: "Help" },
    { href: "https://about.instagram.com/", title: "Press" },
    { href: "https://about.instagram.com/", title: "API" },
    { href: "https://about.instagram.com/", title: "Jobs" },
    { href: "https://about.instagram.com/", title: "Privacy" },
    { href: "https://about.instagram.com/", title: "Terms" },
    { href: "https://about.instagram.com/", title: "Locations" },
    { href: "https://about.instagram.com/", title: "Top Accounts" },
    { href: "https://about.instagram.com/", title: "Hashtags" },
    { href: "https://about.instagram.com/", title: "Language" },
  ];

  const date = new Date();

  // porofileSrc is fot logined in user which default value is grey image
  // however after mounting component it will reset to user porofile
  const [porofileSrc, setPorofileSrc] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
  );

  useEffect(() => {
    // <useEffectDescription> this part of code is for checking that does it renders at
    // client or server, because server doesn't have localStorge, so we have to check that
    // it's rendering at clinetSide or serverSide </useEffectDescription>
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
      } else {
        setPorofileSrc(JSON.parse(localStorage.getItem("user")).porofile_img);
      }
    }
  }, []);

  return (
    <LoginHandler>
      <aside className={HomeStyles.follow_suggestion}>
        <section className={styles.switch}>
          <div className={styles.porofile_img_div}>
            <img src={porofileSrc} alt="" className={styles.porofile_img} />
          </div>
          <div className={styles.username_div}>
            <h5 className={styles.username}>
              {/* <usernameInLocalStorgeDescription> this piece of code
             is for checking user is defined or not. </usernameInLocalStorgeDescription> */}
              {typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("user")).username
                : "Unknowen"}
            </h5>
            <h5 className={styles.name}>
              {typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("user")).fullname
                : "Unknowen"}
            </h5>
          </div>
          <div className={styles.switch_div}>
            <button
              onClick={() => {
                alert("This feature is disabled.");
              }}
              className={styles.switch_button}
            >
              Switch
            </button>
          </div>
        </section>
        <section className={styles.follow_suggestions}>
          <header className={styles.header}>
            <h4 className={styles.header_title}>Suggestions For You</h4>
            <h4 className={styles.see_all}>See All</h4>
          </header>
          {SuggestionsDB.map((suggestion, index) => (
            <Suggestion
              key={index}
              porofile={suggestion.porofile}
              username={suggestion.username}
              detail={suggestion.detail}
            />
          ))}
        </section>
        <section className={styles.links_div}>
          {links.map((link) => (
            <a key={link.title} href={link.href} className={styles.link}>
              {link.title}
            </a>
          ))}
        </section>
        <section className={styles.copyright}>
          © {date.getUTCFullYear()} INSTAGRAM FROM META
        </section>
      </aside>
    </LoginHandler>
  );
}

export default FollowSuggest;
