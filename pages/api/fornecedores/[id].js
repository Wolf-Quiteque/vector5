// pages/api/fornecedores/[id].js

import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const fornecedor = await db.collection('fornecedores').findOne({ _id: new ObjectId(id) });
      
      if (!fornecedor) {
        return res.status(404).json({ error: 'Fornecedor não encotrado' });
      }

      res.status(200).json(fornecedor);
    } else if (req.method === 'PUT') {
      const { nome, email, telefone } = req.body;
      const updatedFornecedor = {
        ...(nome && { nome }),
        ...(email && { email }),
        ...(telefone && { telefone }),
        atualizado_em: new Date(),
      };

      const result = await db.collection('fornecedores').updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedFornecedor }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Fornecedor não Encontrad' });
      }

      res.status(200).json({ message: 'Fornecedor Atualizado com Succeso' });
    } else if (req.method === 'DELETE') {
      const result = await db.collection('fornecedores').deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Fornecedor não Encontrado' });
      }

      res.status(200).json({ message: 'Fornecedor Eliminado com Succeso' });
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Não permitido`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
