

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


import {
  deleteCookie, getDecryptedCookie,
} from "../../lib/session";
const FornecedorHome = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('pecas');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeca, setSelectedPeca] = useState(null); // Manage the selected Peça
  const [showModal, setShowModal] = useState(false); // Modal state
  const [newImage, setNewImage] = useState(null); // Handle image upload
  const handleSignout = async () => {
    await deleteCookie("authsesh");
    router.push('/fornecedor/login')
  };

  const GetUser = async () => {
    const response = await getDecryptedCookie("authsesh") || false;
    if(response){
      setuser(response)
    }
  };

  useEffect(()=>{
    GetUser();

  },[])
  const itemsPerPage = 3;

  // Dummy data for Peças
  const pecas = [
    { id: 1, nome: 'Peça 1', preco: 100, image: '/images/peca1.jpg' },
    { id: 2, nome: 'Peça 2', preco: 150, image: '/images/peca2.jpg' },
    { id: 3, nome: 'Peça 3', preco: 200, image: '/images/peca3.jpg' },
    { id: 4, nome: 'Peça 4', preco: 250, image: '/images/peca4.jpg' },
    { id: 5, nome: 'Peça 5', preco: 300, image: '/images/peca5.jpg' },
    { id: 6, nome: 'Peça 6', preco: 350, image: '/images/peca6.jpg' },
    { id: 7, nome: 'Peça 7', preco: 400, image: '/images/peca7.jpg' },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPecas = pecas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pecas.length / itemsPerPage);
  const [user, setuser] = useState({});
  const router = useRouter();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (peca) => {
    setSelectedPeca(peca);
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSave = () => {
    console.log('Saved:', selectedPeca, newImage);
    setShowModal(false);
  };



  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Fornecedor</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className={`nav-link btn ${activeTab === 'home' ? 'active' : ''}`}
                  style={{ backgroundColor: activeTab === 'home' ? '#381552' : 'transparent', color: activeTab === 'home' ? 'white' : '' }}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${activeTab === 'profile' ? 'active' : ''}`}
                  style={{ backgroundColor: activeTab === 'profile' ? '#381552' : 'transparent', color: activeTab === 'profile' ? 'white' : '' }}
                  onClick={() => setActiveTab('profile')}
                >
                  Perfil
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${activeTab === 'sales' ? 'active' : ''}`}
                  style={{ backgroundColor: activeTab === 'sales' ? '#381552' : 'transparent', color: activeTab === 'sales' ? 'white' : '' }}
                  onClick={() => setActiveTab('sales')}
                >
                  Vendas
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${activeTab === 'pecas' ? 'active' : ''}`}
                  style={{ backgroundColor: activeTab === 'pecas' ? '#381552' : 'transparent', color: activeTab === 'pecas' ? 'white' : '' }}
                  onClick={() => setActiveTab('pecas')}
                >
                  Peças
                </button>
              </li>
            </ul>
            <button className="btn btn-danger" onClick={handleSignout}>
              <i className="fas fa-power-off"></i> Sair
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Fornecedor: 
          {user && user.nome}
        </h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar Peças"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Table of Peças */}
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Preço (AKZ)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentPecas
              .filter((peca) => peca.nome.toLowerCase().includes(search.toLowerCase()))
              .map((peca) => (
                <tr key={peca.id}>
                  <td><img src={peca.image} alt={peca.nome} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
                  <td>{peca.nome}</td>
                  <td>{peca.preco}</td>
                  <td>
                    <button className="btn btn-outline-primary" onClick={() => handleEdit(peca)}>
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                Anterior
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                Próximo
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Edit Modal */}
      {showModal && selectedPeca && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Peça</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedPeca.nome}
                      onChange={(e) => setSelectedPeca({ ...selectedPeca, nome: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Preço (AKZ)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={selectedPeca.preco}
                      onChange={(e) => setSelectedPeca({ ...selectedPeca, preco: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Imagem</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImageChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Fechar
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FornecedorHome;
