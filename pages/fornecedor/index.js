import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { deleteCookie, getDecryptedCookie } from "../../lib/session";
import Sidebar from '../../components/Sidebar';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FornecedorHome = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [pedidos, setPedidos] = useState([]);
  const [pecas, setPecas] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetUser = async () => {
    const response = await getDecryptedCookie("authsesh") || false;
    if (response) {
      setUser(response);
    }
  };

  const fetchData = async () => {
    try {
      const [pedidosRes, pecasRes] = await Promise.all([
        fetch('/api/Pedidos'),
        fetch('/api/Pecas/all')
      ]);
      
      const pedidosData = await pedidosRes.json();
      const pecasData = await pecasRes.json();
      console.log(pedidosData)
      setPedidos(pedidosData);
      setPecas(pecasData.produtos);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetUser();
    fetchData();

  }, []);

  const handleSignout = async () => {
    await deleteCookie("authsesh");
    router.push('/fornecedor/login');
  };

  // Calculate statistics
  const getPedidosStats = () => {
    const pendingOrders = pedidos.filter(p => !p.estadoPagamento).length;
    const completedOrders = pedidos.filter(p => p.estadoPagamento).length;
    return [
      { name: 'Pendentes', value: pendingOrders },
      { name: 'Completos', value: completedOrders }
    ];
  };

  const getCategoriaStats = () => {
    const categorias = {};
    pecas.forEach(peca => {
      categorias[peca.categoria] = (categorias[peca.categoria] || 0) + 1;
    });
    return Object.entries(categorias).map(([name, value]) => ({ name, value }));
  };

  const getPrecoStats = () => {
    return pecas.map(peca => ({
      nome: peca.nome.substring(0, 20) + '...',
      preco: parseInt(peca.preco),
      estoque: parseInt(peca.estoque)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex h-screen">
        <Sidebar onSignout={handleSignout} />
        
        <div className="flex-1 overflow-auto p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard de Estatísticas</h1>
          
          {loading ? (
            <div className="text-center">Carregando...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Estado dos Pedidos</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getPedidosStats()}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {getPedidosStats().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Distribuição por Categoria</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getCategoriaStats()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-lg col-span-2">
                <h2 className="text-xl font-semibold mb-4">Preços e Estoque</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={getPrecoStats()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="nome" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="preco" stroke="#8884d8" />
                      <Line yAxisId="right" type="monotone" dataKey="estoque" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FornecedorHome;