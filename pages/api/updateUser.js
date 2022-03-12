import { MongoClient, ObjectId } from "mongodb";
async function Handler(req, res) {
  if (req.method === "POST") {
    console.log("posts", req.body.posts);
    const client = await MongoClient.connect(
      "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("users");
    const result = postsCollection.updateOne(
      { username: req.body.username },
      { $set: { posts: req.body.posts } },
      function (err, r) {
        console.log("inside insertOne");
        client.close();
      }
    );
    res.status(200).json({ message: "successful" });
  }
}
export default Handler;
