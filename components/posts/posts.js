/* eslint-disable @next/next/no-img-element */
import React from "react";

import posts from "./posts.module.css";

import Post from "../post/post";

function Posts(props) {
  return (
    <div className={posts.cantainer}>
      {props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Posts;
