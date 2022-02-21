import React from "react";
import style from "./emoji_box.module.css";
import EmojiArray from "../../Assists/svgs/svgs";
import Emojiiii from "./emoji";
import { PopularEmojiArray14, AllEmojiArray } from "./emoji_box_array";
function EmojiBox(props) {
  return (
    <section className={style.emoji_box}>
      <section className={style.emoji_box_container}>
        <div className={style.main_container}>
          <h1 className={style.title}>Most Popular</h1>
          <div className={style.emoji_container}>
            {PopularEmojiArray14.map((emoji) => (
              <div
                key={emoji}
                onClick={() => {
                  props.emojiClicked(emoji);
                }}
                className={style.emoji}
              >
                {emoji}
              </div>
            ))}
          </div>
          <h1 className={(style.title, style.title_2nd)}>
            {"Smileys & People"}
          </h1>
          <div className={style.emoji_container}>
            {AllEmojiArray.map((emoji) => (
              <div
                key={emoji}
                onClick={() => {
                  props.emojiClicked(emoji);
                }}
                className={style.emoji}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className={
          props.array === "bottom"
            ? style.triangle_bottom
            : props.array === "top"
            ? style.triangle_top
            : props.array === "right"
            ? style.triangle_right
            : props.array === "left"
            ? style.triangle_left
            : style.triangle_none
        }
      ></div>
    </section>
  );
}

export default EmojiBox;
