import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your database name

    if (req.method === 'GET') {
      const cliente = await db.collection('clientes').findOne({ _id: new ObjectId(id) });
      
      if (!cliente) {
        return res.status(404).json({ error: 'Client not found' });
      }

      res.status(200).json(cliente);
    } else if (req.method === 'PUT') {
      const { nome, email, telefone } = req.body;
      const updatedCliente = {
        ...(nome && { nome }),
        ...(email && { email }),
        ...(telefone && { telefone }),
        atualizado_em: new Date(),
      };

      const result = await db.collection('clientes').updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedCliente }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Client not found' });
      }

      res.status(200).json({ message: 'Client updated successfully' });
    } else if (req.method === 'DELETE') {
      const result = await db.collection('clientes').deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Client not found' });
      }

      res.status(200).json({ message: 'Client deleted successfully' });
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}




