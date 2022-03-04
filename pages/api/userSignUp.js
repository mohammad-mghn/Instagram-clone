import { MongoClient } from "mongodb";
async function Handler(req, res) {
  const data = req.body;
  //   console.log("data:", data);
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const usersCollection = db.collection("users");
  const postsGettedCollection = await usersCollection
    .find({ email: req.body.email })
    .toArray();
  const postsGettedCollections = await usersCollection
    .find({ username: req.body.username })
    .toArray();
  console.log(
    postsGettedCollection,
    postsGettedCollection.length === 0 ? true : false
  );
  console.log(
    postsGettedCollections,
    postsGettedCollections.length === 0 ? true : false
  );
  if (
    postsGettedCollection.length === 0 &&
    postsGettedCollections.length === 0
  ) {
    res.status(200).json({ message: "successful" });
    var result = await usersCollection.insertOne(data);
  } else {
    res.status(200).json({ message: "unsuccessful" });
  }
  client.close();
}
export default Handler;
