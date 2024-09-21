// pages/api/pecas/index.js

import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  console.log(req.body)
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const pecas = await db.collection('pecas').find({}).toArray();
      res.status(200).json(pecas);
    } else if (req.method === 'POST') {
      console.log(req.body)
      const result = await db.collection('pecas').insertOne(req.body);
      res.status(201).json({ message: 'Peça Criado Com sucesso', id: result.insertedId });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}
