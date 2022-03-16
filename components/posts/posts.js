/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

import Post from "../post/post";
function Posts(props) {
  useEffect(() => {
    if (localStorage.getItem("saved") === null) {
      localStorage.setItem("saved", JSON.stringify({ Posts: [] }));
      console.log("Asfd");
    }
  }, []);
  return (
    <section>
      {props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
}

export default Posts;
