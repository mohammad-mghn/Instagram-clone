import { MongoClient } from "mongodb";
async function Handler(req, res) {
  // if (req.method === "GET") {
  //   const client = await MongoClient.connect(
  //     "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  //   );
  //   const db = client.db();

  //   const postsCollection = db.collection("posts");
  //   const postsGettedCollection = await postsCollection.find().toArray();
  //   res.body([
  //     postsGettedCollection.map((post) => ({
  //       username: post.username,
  //       img: post.img,
  //       id: post._id.toString(),
  //     })),
  //   ]);
  // }
  if (req.method === "POST") {
    const data = req.body;
    console.log("data:", data);
    const client = await MongoClient.connect(
      "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("posts");
    const result = await postsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(200).json({ message: "successful" });
  }
}
export default Handler;
