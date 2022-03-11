import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Porofile from "../components/porofile/porofile";
import { MongoClient } from "mongodb";
function User(props) {
  console.log(props.data[0]);
  // const router = useRouter();
  // const [user, setUser] = useState([
  //   {
  //     id: "123",
  //     username: "qwe",
  //     fullname: "3 mohagheghian",
  //     email: "vito.mohagheghian@gmail.com",
  //     porofile_img:
  //       "https://pbs.twimg.com/profile_images/1447440740506906624/Gy5X-BwQ_400x400.jpg",
  //     bio: "",
  //     followers: [],
  //     following: [],
  //     posts: [],
  //     story: [],
  //   },
  //   [
  //     {
  //       id: "s4",
  //       username: "vito",
  //       fullname: "vito mohagheghian",
  //       email: "vito.mohagheghian@gmail.com",
  //       porofile_img:
  //         "https://pbs.twimg.com/profile_images/1447440740506906624/Gy5X-BwQ_400x400.jpg",
  //       bio: "",
  //       followers: [],
  //       following: [],
  //       posts: [],
  //       story: [],
  //     },
  //   ],
  // ]);

  // const fetchHandler = async () => {
  //   if (router.query.user !== undefined) {
  //     var username = {
  //       username: "vito",
  //     };

  //     const fetching = await fetch("/api/porofile", {
  //       method: "POST",
  //       body: JSON.stringify(username),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     const response = await fetching.json();
  //     console.log(router.query.user, response);
  //     setUser(response);
  //   }
  // };
  // fetchHandler();

  return <Porofile user={props.data[0]} />;
  return <div>asdf</div>;
}

export default User;
// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const postsCollection = db.collection("users");
//   const postsGettedCollection = await postsCollection.find({}).toArray();
//   return {
//     paths: postsGettedCollection.map((post) => ({
//       params: post.username,
//     })),
//     fallback: true,
//   };
// }
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
  // console.log("fetch", postsGettedCollection);

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
