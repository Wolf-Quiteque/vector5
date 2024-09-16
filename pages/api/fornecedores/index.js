// pages/api/fornecedores/index.js

import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name

    if (req.method === 'GET') {
      const fornecedores = await db.collection('fornecedores').find({}).toArray();
      res.status(200).json(fornecedores);
    } else if (req.method === 'PUT') {
      const fornecedores = await db.collection('fornecedores').find(req.body).toArray();
      res.status(200).json(fornecedores);
    }  else if (req.method === 'POST') {
      const { nome, email, telefone } = req.body;

      if (!nome || !email || !telefone) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      const fornecedores = await db.collection('fornecedores').findOne({email:req.body.email})
      
      if(fornecedores.email){
        res.status(405).json({ message: 'Usuario ja existe' });
    
      }else{ const result = await db.collection('fornecedores').insertOne(req.body);
      res.status(201).json({ message: 'Supplier created successfully' });}

     
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
