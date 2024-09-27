// pages/api/pedidos/index.js

import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db('vector5'); // Replace with your actual database name
if (req.method === 'POST') {
  
    var novousuario = req.body;
    const existingUser = await db.collection('usuario').findOne({ email: novousuario.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'usuario ja existe' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(novousuario.password, salt);
    novousuario.password = hashedPassword;

    const result = await db.collection('usuario').insertOne(novousuario);
    res.status(201).json({ success: true, message: 'usuario criado com sucesso'});
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Não Permitido`);
    }

}
