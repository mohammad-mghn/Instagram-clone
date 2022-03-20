import { MongoClient } from "mongodb";
async function Handler(req, res) {
  const data = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const usersCollection = db.collection("users");

  const userEmailDocument = await usersCollection
    .find({ email: req.body.email })
    .toArray();
  const userUsernameDocument = await usersCollection
    .find({ username: req.body.username })
    .toArray();

  if (userEmailDocument.length === 0 && userUsernameDocument.length === 0) {
    res.status(200).json({ message: "successful" });
    await usersCollection.insertOne(data);
  } else {
    res.status(200).json({ message: "unsuccessful" });
  }

  client.close();
}
export default Handler;
