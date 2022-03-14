/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import style from "./explore.module.css";
function Explore(props) {
  const router = useRouter();
  console.log(props.data);
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        {props.data !== []
          ? props.data.map((post, index) => {
              console.log(post.image);
              return (
                <div
                  onClick={() => {
                    router.push("/p/" + post.id);
                  }}
                  className={style.post}
                  key={post.id}
                >
                  <img
                    className={style.post_image}
                    src={post.image[0]}
                    alt=""
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Explore;
