import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Search } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import { deleteCookie, getDecryptedCookie } from "../../lib/session";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const VendasDashboard = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null); // Start with null to indicate no user data yet
  const [selectedOrder, setSelectedOrder] = useState(null); // For the selected order details
  const [showModal, setShowModal] = useState(false); // For modal visibility
  
  const GetUser = async () => {
    const response = await getDecryptedCookie("authsesh") || false;
    if (response) {
      setUser(response);
    } else {
      setLoading(false); // Stop loading if there's no user
    }
  };

  const fetchOrders = async () => {
 
    try {
      const response = await fetch('/api/Pedidos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email })
      });

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignout = async () => {
    await deleteCookie("authsesh");
    router.push('/fornecedor/login');
  };

  const updateOrderStatus = async (orderId, field) => {
    try {
      const response = await fetch(`/api/Pedidos/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [field]: true
        })
      });

      if (response.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const filteredOrders = orders.filter(order =>
    order.telefone.includes(searchTerm) ||
    order.endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotal = (carrinha) => {
    return carrinha.reduce((total, item) =>
      total + (parseFloat(item.preco) * item.quantity), 0
    ).toFixed(2);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order); // Set the selected order details
    setShowModal(true); // Open the modal
  };

  // Fetch user once on component mount
  useEffect(() => {
    GetUser();
  }, []);

  // Fetch orders once user is set
  useEffect(() => {
    if (user && user.email) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="min-vh-100">
      <div className="d-flex h-100">
        <Sidebar onSignout={handleSignout} />
        
        <div className="flex-grow-1 overflow-auto p-4">
          <div className="container-fluid">
            <h1 className="display-5 fw-bold mb-4">Gestão de Vendas</h1>
            
            <div className="row mb-4">
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <Search size={20} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar por telefone ou endereço..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Telefone</th>
                          <th>Endereço</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Estado Pagamento</th>
                          <th>Estado Envio</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders && filteredOrders.map((order) => (
                          <tr key={order._id.$oid}>
                            <td>{order.telefone}</td>
                            <td className="text-truncate" style={{ maxWidth: '200px' }}>
                              {order.endereco}
                            </td>
                            <td>{order.carrinha.length} items</td>
                            <td>{calculateTotal(order.carrinha)} AOA</td>
                            <td>
                              <span className={`badge ${order.estadoPagamento ? 'bg-success' : 'bg-warning'}`}>
                                {order.estadoPagamento ? 'Pago' : 'Pendente'}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${order.estadoEnvio ? 'bg-success' : 'bg-warning'}`}>
                                {order.estadoEnvio ? 'Entregue' : 'Pendente'}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex gap-2">
                                <button 
                                  className="btn btn-sm btn-outline-dark"
                                  onClick={() => handleViewDetails(order)}
                                >
                                  Ver
                                </button>
                                {!order.estadoPagamento && (
                                  <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => updateOrderStatus(order._id, 'estadoPagamento')}
                                  >
                                    Marcar Pago
                                  </button>
                                )}
                                {!order.estadoEnvio && (
                                  <button 
                                    className="btn btn-sm btn-success"
                                    onClick={() => updateOrderStatus(order._id, 'estadoEnvio')}
                                  >
                                    Marcar Entregue
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for displaying order details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <div>
              <p><strong>Telefone:</strong> {selectedOrder.telefone}</p>
              <p><strong>Endereço:</strong> {selectedOrder.endereco}</p>
              <p><strong>Total Items:</strong> {selectedOrder.carrinha.length}</p>
              <ul>
                {selectedOrder.carrinha.map((item, index) => (
                  <li key={index}>
                    {item.nome} - {item.quantity} x {item.preco} AOA
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> {calculateTotal(selectedOrder.carrinha)} AOA</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VendasDashboard;
