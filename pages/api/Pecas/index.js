// pages/api/pecas/index.js

import clientPromise from '../../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const pecas = await db.collection('pecas').find({}).toArray();
      res.status(200).json(pecas);
    } else if (req.method === 'POST') {
      const { nome, descricao, preco } = req.body;

      if (!nome || !descricao || !preco) {
        return res.status(400).json({ error: 'Falta Campo' });
      }

      const newPeca = {
        nome,
        descricao,
        preco,
        criado_em: new Date(),
        atualizado_em: new Date(),
      };

      const result = await db.collection('pecas').insertOne(newPeca);
      res.status(201).json({ message: 'Peça Criado Com sucesso', id: result.insertedId });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
