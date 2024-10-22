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
    <div className="min-vh-100 ">
      <div className="d-flex h-100">
        <Sidebar onSignout={handleSignout} />
        
        <div className="flex-grow-1 overflow-auto p-4">
          <h1 className="display-5 fw-bold mb-5">Dashboard de Estatísticas</h1>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="card-new border-secondary h-100">
                  <div className="card-body">
                    <h2 className="card-title h5 mb-4">Estado dos Pedidos</h2>
                    <div style={{ height: '300px' }}>
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
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card-new  border-secondary h-100">
                  <div className="card-body">
                    <h2 className="card-title h5 mb-4">Distribuição por Categoria</h2>
                    <div style={{ height: '300px' }}>
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
                </div>
              </div>

              <div className="col-12">
                <div className="card-new border-secondary">
                  <div className="card-body">
                    <h2 className="card-title h5 mb-4">Preços e Estoque</h2>
                    <div style={{ height: '300px' }}>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FornecedorHome;

