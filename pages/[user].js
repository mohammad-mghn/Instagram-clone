import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Porofile from "../components/porofile/porofile";
import { MongoClient } from "mongodb";
function User(props) {
  console.log(props.data[0]);

  return <Porofile user={props.data[0]} />;
}

export default User;
export async function getServerSideProps({ query }) {
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const postsCollection = db.collection("users");
  const postsGettedCollection = await postsCollection
    .find({
      username: query.user,
    })
    .toArray();
  return {
    props: {
      data: postsGettedCollection.map((post) => ({
        id: post._id.toString(),
        username: post.username,
        fullname: post.fullname,
        email: post.email,
        porofile_img: post.porofile_img,
        bio: post.bio,
        followers: post.followers,
        following: post.following,
        posts: post.posts,
        story: post.story,
      })),
    },
  };
}
