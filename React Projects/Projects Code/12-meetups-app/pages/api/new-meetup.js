import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "request sent successfully" });
  }
}

export default handler;
