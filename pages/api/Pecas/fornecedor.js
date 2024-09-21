import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const client = await clientPromise;

  const db = client.db("vector5");

  try {
   const pecas = await db.collection("pecas").find(req.body).toArray();
    res.status(200).json(pecas);
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Houve um erro!" });
  }
}

export default handler;