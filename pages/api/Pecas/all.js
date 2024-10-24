import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('vector5');
  const pecasCollection = db.collection('pecas');
  const fornecedoresCollection = db.collection('fornecedores'); // assuming this is your suppliers collection name

  if (req.method === 'GET') {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { search = '' } = req.query;

    let query = {};
    if (search) {
      query = {
        $or: [
          { nome: { $regex: search, $options: 'i' } },
          { marca: { $regex: search, $options: 'i' } },
          { subcategoria: { $regex: search, $options: 'i' } },
          { categoria: { $regex: search, $options: 'i' } },
        ],
      };
    }

    try {
      // First, get the peca documents
      const pecas = await pecasCollection.find(query)
        .skip(skip)
        .limit(limit)
        .toArray();

      // Get unique supplier emails from the pecas results
      const supplierEmails = [...new Set(pecas.map(peca => peca.email))];

      // Fetch corresponding suppliers
      const suppliers = await fornecedoresCollection.find(
        { email: { $in: supplierEmails } },
        {
          projection: {
            senha: 0, // Exclude sensitive information
            _id: 0,
            nif: 0,
            createdAt: 0,
            updatedAt: 0,
            codigo_postal: 0
          }
        }
      ).toArray();

      // Create a map of suppliers by email for easy lookup
      const supplierMap = suppliers.reduce((acc, supplier) => {
        acc[supplier.email] = supplier;
        return acc;
      }, {});

      // Combine peca and supplier information
      const combinedResults = pecas.map(peca => ({
        ...peca,
        fornecedor_info: supplierMap[peca.email] || null
      }));

      const total = await pecasCollection.countDocuments(query);

      res.status(200).json({
        produtos: combinedResults,
        total,
        page,
        totalPages: Math.ceil(total / limit)
      });

    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }

  } else if (req.method === 'POST') {
    const newProdutos = req.body;
    const result = await pecasCollection.insertOne(newProdutos);
    res.status(201).json(result);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}