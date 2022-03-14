import { useState, useEffect } from "react";
import Loading from "../../components/loading/loading";
import Explore from "../../components/explore/explore";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Home(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(60);
  const [posts, setposts] = useState([
    {
      id: "620cbbe727707974b8c8ba52",
      image: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg",
      ],
      username: "Loading",
      location: "",
      caption: "",
      like: 0,
      comments: false,
      user_porofile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg",
    },
  ]);
  async function addpostHandler() {
    setposts([]);
    const response = await fetch("/api/currentposts");
    const data = await response.json();
    setLoading(100);
    setposts(data);
  }
  useEffect(() => {
    addpostHandler();
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
        router.push("/login");
      }
    }
  }, []);
  return (
    <Loading width={loading}>
      <Head>
        <title>Instagram • Explore</title>
      </Head>
      <Explore data={posts} />
    </Loading>
  );
}
// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   );
//   const db = client.db();`
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
// export async function getServerSideProps(context) {

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
// {typeof window !== "undefined"
// ? JSON.parse(localStorage.getItem("user")).username
// : "Unknowen"}
// {typeof window !== "undefined"
// ? localStorage.getItem("user") !== null
//   ? JSON.parse(localStorage.getItem("user")).username
//   : "Unknowen"
// : "Unknowen"}
