// pages/api/pecas/[id].js

import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const peca = await db.collection('pecas').findOne({ _id: new ObjectId(id) });

      if (!peca) {
        return res.status(404).json({ error: 'Peças Não Encontrada' });
      }

      res.status(200).json(peca);
    } else if (req.method === 'PUT') {
     
      var peca = req.body
      delete peca._id

      const result = await db.collection('pecas').updateOne(
        { _id: new ObjectId(id) },
        { $set: peca }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Peças Não Encontrada' });
      }

      res.status(200).json({ message: 'Peça atualizada com sucesso' });
    } else if (req.method === 'DELETE') {
      const result = await db.collection('pecas').deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Peças Não Encontrada' });
      }

      res.status(200).json({ message: 'Peça elimando com sucesso0' });
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Não Permitado`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
