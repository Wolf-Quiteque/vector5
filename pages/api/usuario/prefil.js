// pages/api/fornecedores/prefil.js
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Get the MongoDB client
    const client = await clientPromise;
    const db = client.db('vector5');

    // If you're using authentication, get the session
    // const session = await getSession({ req });
    // if (!session) {
    //   return res.status(401).json({ success: false, message: 'Não autorizado' });
    // }

    const profileData = req.body;

    // Validate required fields
    const requiredFields = ['nome_empresa', 'descricao', 'endereco', 'cidade',  'nif'];
    const missingFields = requiredFields.filter(field => !profileData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Campos obrigatórios faltando: ${missingFields.join(', ')}`
      });
    }

    // Add timestamps
    const now = new Date();
    profileData.updatedAt = now;
    if (!profileData.createdAt) {
      profileData.createdAt = now;
    }

    // Validate CNPJ format (basic validation)

    // Validate CEP format


    // If updating an existing profile
    if (profileData._id) {
      const userId = profileData._id
      delete profileData._id
      
      const result = await db.collection('fornecedores').updateOne(
        { _id: new ObjectId(userId) },
        { $set: profileData }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({
          success: false,
          message: 'Perfil não encontrado'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Perfil atualizado com sucesso'
      });
    } 
    // If creating a new profile
    else {
      // Check if CNPJ already exists
      const existingProfile = await db.collection('fornecedores').findOne({
        nif: profileData.nif
      });

      if (existingProfile) {
        return res.status(400).json({
          success: false,
          message: 'Nif já cadastrado'
        });
      }

      // Insert new profile
      const result = await db.collection('fornecedores').insertOne(profileData);

      return res.status(201).json({
        success: true,
        message: 'Perfil criado com sucesso',
        profileId: result.insertedId
      });
    }

  } catch (error) {
    console.error('Error in profile API:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}