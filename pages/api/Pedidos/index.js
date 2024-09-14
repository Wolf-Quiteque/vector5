// pages/api/pedidos/index.js

import clientPromise from '../../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const pedidos = await db.collection('pedidos').find({}).toArray();
      res.status(200).json(pedidos);
    } else if (req.method === 'POST') {
      const { clienteId, items, total, status } = req.body;

      if (!clienteId || !items || !total || !status) {
        return res.status(400).json({ error: 'Falta campo' });
      }

      const newPedido = {
        clienteId: new ObjectId(clienteId),
        items,  // Expected to be an array of items in the order
        total,
        status,
        criado_em: new Date(),
        atualizado_em: new Date(),
      };

      const result = await db.collection('pedidos').insertOne(newPedido);
      res.status(201).json({ message: 'Pedido feito com sucesso', id: result.insertedId });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Não Permitido`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
