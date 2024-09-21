import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('vector5'); // Use your actual database name

  if (req.method === 'GET') {
    const fornecedores = await db.collection('fornecedores').find({}).toArray();
    res.status(200).json(fornecedores);
  } else if (req.method === 'PUT') {
    const fornecedores = await db.collection('fornecedores').find(req.body).toArray();
    res.status(200).json(fornecedores);
  } else if (req.method === 'POST') {
    const { nome, preco, image } = req.body;

    if (!nome || !preco || !image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const result = await db.collection('pecas').insertOne({
        fornecedor,
        nome,
        preco,
        image, // Cloudinary image URL
        createdAt: new Date(),
      });

      res.status(201).json({ message: 'Peça created successfully', data: result.ops[0] });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create peça' });
    }
  }  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

}
