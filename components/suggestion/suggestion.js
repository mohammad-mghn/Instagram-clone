/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import React from "react";

import style from "./followSuggest.module.css";

function Suggestion(props) {
  const router = useRouter();
  return (
    <div className={style.suggestion}>
      <div className={style.suggestion_porofile_container}>
        <img
          onClick={() => {
            router.push("/" + props.username);
          }}
          src={props.porofile}
          alt=""
          className={style.porofile}
        />
      </div>
      <div className={style.suggestion_description}>
        <h6
          onClick={() => {
            router.push("/" + props.username);
          }}
          className={style.suggestion_username}
        >
          {props.username}
        </h6>
        <h6 className={style.followed_following_details}>{props.detail}</h6>
      </div>
      <div
        onClick={() => {
          alert("This feature is disabled.😅");
        }}
        className={style.suggestion_follow_button}
      >
        Follow
      </div>
    </div>
  );
}

export default Suggestion;
