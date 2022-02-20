/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
// import { MongoClient } from "mongodb";
import styles from "../styles/Home.module.css";
import Loading from "../components/loading/loading";
import FollowSuggest from "../components/suggestion/followSuggest";
import story from "../components/stories/stories.module.css";

import Stories from "../components/stories/stories";
import Posts from "../components/posts/posts";

export default function Home(props) {
  const [loading, setLoading] = useState(60);
  const [posts, setposts] = useState([
    {
      id: "620cbbe727707974b8c8ba52",
      image: ["https://i.stack.imgur.com/sIIwU.gif"],
      username: "Loading",
      location: "",
      caption: "",
      like: 0,
      comments: false,
      user_porofile:
        "data:image/jpeg;base64,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",
    },
  ]);
  async function addpostHandler() {
    const response = await fetch("/api/currentposts");
    const data = await response.json();
    setLoading(100);
    setposts(data);
  }
  useEffect(() => {
    addpostHandler();
  }, []);
  return (
    <Loading width={loading}>
      <div className={styles.container}>
        <section className={styles.posts_and_stories}>
          <section className={story.container}>
            <div className={story.story}>
              <Stories />
            </div>
          </section>
          <section className={styles.posts}>
            <Posts posts={posts} />
          </section>
        </section>
      </div>
      <FollowSuggest />
    </Loading>
  );
}
// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const postsCollection = db.collection("posts");
//   const postsGettedCollection = await postsCollection
//     .find({ username: "vito" })
//     .toArray();
//   return {
//     props: {
//       posts: [
//         postsGettedCollection.map((post) => ({
//           username: post.username,
//           image: post.image,
//           id: post._id.toString(),
//           caption: post.caption,
//           like: post.like,
//           comments: post.comments,
//           location: post.location,
//         })),
//       ],
//     },
//     revalidate: 1,
//   };
// }
//
//
//
//
// const response = await fetch("/api/newpost", {
//   method: "POST",
//   body: dfaa,
//   headers: {
//     "Content-type": "application/json",
//   },
// });
// const data = await response.json();
// console.log(data);

{
  /* <Swiper
  cssMode={true}
  navigation={true}
  pagination={true}
  mousewheel={true}
  keyboard={true}
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
  {posts.map((post) => {
    return (
      <SwiperSlide key={posts.id}>
        <div className={styles.porofileeee}>
          <img src={post} alt="" className={styles.porofilee} />
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>; */
}
