
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('vector5');
      const { email, password } = req.body;

      const user = await db.collection('usuario').findOne({ email });

      if (user && await bcrypt.compare(password, user.password)) {
        const { password, ...userWithoutPassword } = user;
        res.status(200).json({ success: true, user: user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}