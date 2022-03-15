/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "../components/stories/stories.module.css";

function Story(props) {
  return (
    <div className={style.story_container}>
      <div
        className={
          props.story.seen
            ? style.porofile_container_seen
            : style.porofile_container
        }
      >
        <div className={style.porofile_div}>
          <img
            src={props.story.porofile}
            alt={props.story.username}
            className={style.porofile}
            loading="lazy"
          />
        </div>
      </div>
      <div
        onClick={() => {
          router.push(`/${props.story.username}`);
        }}
        className={
          props.story.verified ? style.username_verified : style.username
        }
      >
        {props.story.username}
      </div>
    </div>
  );
}

export default Story;
