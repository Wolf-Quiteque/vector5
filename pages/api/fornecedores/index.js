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

    try {

      const existingUser = await db.collection('fornecedores').findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email ja existe' });
      }
      const existingUser2 = await db.collection('fornecedores').findOne({ nif: req.body.nif });
      if (existingUser2) {
        return res.status(400).json({ success: false, message: 'Nif ja existe' });
      }

      const result = await db.collection('fornecedores').insertOne(req.body);

      res.status(201).json({ message: 'criado com successo' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Email ou NIF do forncecedor ja existe' });
    }
  }  else {
    res.setHeader('Allow', ['GET', 'POST','PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

}
