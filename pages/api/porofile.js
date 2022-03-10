import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const postsCollection = db.collection("users");
  const postsGettedCollection = await postsCollection
    .find({
      username: req.body.username,
    })
    .toArray();
  // console.log("fetch", postsGettedCollection);
  res.status(200).json(
    JSON.stringify(
      postsGettedCollection.map((post) => ({
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
      }))
    )
  );
}
