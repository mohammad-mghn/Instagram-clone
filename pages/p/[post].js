import React from "react";

import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import LoginHandler from "../../modules/LoginHandler/loginHandler";
import Specificpost from "../../components/SpecificPost/specificPost";
function Post(props) {
  if (props.post !== undefined) {
    return (
      <LoginHandler>
        <Head>
          <title>Instagram</title>
        </Head>
        <div
          style={{
            position: "absolute",
            top: "3.65rem",
            backgroundColor: "rgb(250, 250, 250)",
            width: "100%",
            height: "calc(100vh - 3.65rem)",
          }}
        >
          <Specificpost post={props.post[0]} />
        </div>
      </LoginHandler>
    );
  }
  return <></>;
}

export default Post;
export async function getStaticPaths({ router }) {
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postsCollection = db.collection("posts");

  const postsGettedCollection = await postsCollection.find({}).toArray();

  return {
    paths: postsGettedCollection.map((postu) => {
      return { params: { post: postu._id.toString() } };
    }),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const blogId = params.post;
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postsCollection = db.collection("posts");

  const postsGettedCollection = await postsCollection
    .find({ _id: ObjectId(blogId) })
    .toArray();

  return {
    props: {
      post: postsGettedCollection.map((post) => ({
        username: post.username,
        image: post.image,
        id: post._id.toString(),
        caption: post.caption,
        like: post.like,
        comments: post.comments,
        location: post.location,
        date: post.date,
        user_porofile: post.user_porofile,
      })),
    }, // will be passed to the page component as props
  };
}
