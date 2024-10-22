// pages/api/Pedidos/[id].js

import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('vector5');
  const collection = db.collection('pedidos');

  const { id } = req.query;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const order = await collection.findOne({ 
          "_id": new ObjectId(id) 
        });
        
        if (!order) {
          return res.status(404).json({ error: 'Order not found' });
        }
        
        res.status(200).json(order);
        break;

      case 'PATCH':
        const updateData = req.body;
        
        // Validate the update data
        const validFields = ['estadoPagamento', 'estadoEnvio'];
        const hasValidFields = Object.keys(updateData).every(key => 
          validFields.includes(key) && typeof updateData[key] === 'boolean'
        );

        if (!hasValidFields) {
          return res.status(400).json({ 
            error: 'Invalid update data. Only estadoPagamento and estadoEnvio can be updated to boolean values.' 
          });
        }

        const result = await collection.updateOne(
          { "_id": new ObjectId(id) },
          { $set: updateData }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: 'Order not found' });
        }

        if (result.modifiedCount === 0) {
          return res.status(400).json({ error: 'No changes made to the order' });
        }

        res.status(200).json({ 
          message: 'Order updated successfully',
          modifiedCount: result.modifiedCount
        });
        break;

      case 'DELETE':
        const deleteResult = await collection.deleteOne({
          "_id": new ObjectId(id)
        });

        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json({ 
          message: 'Order deleted successfully',
          deletedCount: deleteResult.deletedCount
        });
        break;

      default:
        res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}