import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your database name

    if (req.method === 'GET') {
      const clientes = await db.collection('clientes').find({}).toArray();
      res.status(200).json(clientes);
    } else if (req.method === 'POST') {
      const { nome, nif, email, telefone, endereco, cidade, codigo_postal, pais } = req.body;

      if (!nome || !nif || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const newCliente = {
        nome,
        nif,
        email,
        telefone,
        endereco,
        cidade,
        codigo_postal,
        pais,
        criado_em: new Date(),
        atualizado_em: new Date()
      };

      const result = await db.collection('clientes').insertOne(newCliente);
      res.status(201).json(result.ops[0]); // Return the newly created client
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
