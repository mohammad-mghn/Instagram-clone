import { MongoClient, ObjectId } from "mongodb";
async function Handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;
    console.log("data:", data);
    const client = await MongoClient.connect(
      "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("posts");
    const result = postsCollection.updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: { like: req.body.like } },
      function () {
        client.close();
      }
    );
    console.log(result);

    res.status(200).json({ PostMessage: "successful" });
  }
}
export default Handler;
