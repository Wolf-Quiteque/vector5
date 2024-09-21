

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


import {
  deleteCookie, getDecryptedCookie,
} from "../../lib/session";
const FornecedorHome = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('pecas');
  const [peca, setPeca] = useState([]);
  const [user, setuser] = useState({});
  const router = useRouter();

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


  const handleChange = (e) => {
    const { id, value } = e.target;
    setPeca((prevPecas) => ({
      ...prevPecas,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var novapeca = peca
    novapeca.fornecedor = user.nome

    try {
      const res = await fetch("/api/pecas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novapeca),
      });
  
      const data = await res.json();
  
      alert(data.message)
    } catch (error) {
      console.log(error)
      alert('houve um erro')
      console.log(error)
    }
    
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };



  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Fornecedor  {user && user.nome}</a>
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


        {/* Search Bar */}
        <div className="mb-4">
          <div className='float-end mb-2'>
            <button className='btn btn-sm float-right text-white' data-bs-toggle="modal" data-bs-target="#novoproduto" style={{backgroundColor:"#381552"}}>Nova</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar Peças"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="modal fade" id="novoproduto" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Novo Peça</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container mt-5">
        <h5 className="mb-4">Cadastrar Clientes</h5>
        <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="nome" className="form-label">Nome</label>
      <input type="text" className="form-control" id="nome" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="descricao" className="form-label">Descrição</label>
      <textarea className="form-control" id="descricao" onChange={handleChange}></textarea>
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="marca" className="form-label">Marca</label>
      <input type="text" className="form-control" id="marca" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="categoria" className="form-label">Categoria</label>
      <input type="text" className="form-control" id="categoria" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="estoque" className="form-label">Estoque</label>
      <input type="text" className="form-control" id="estoque" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="preco" className="form-label">Preço</label>
      <input type="number" className="form-control" id="preco" step="0.01" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="preco_promocional" className="form-label">Preço Promocional</label>
      <input type="number" className="form-control" id="preco_promocional" step="0.01" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="imagem" className="form-label">Imagem</label>
      <input type="file" className="form-control" id="imagem" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="peso" className="form-label">Peso</label>
      <input type="number" className="form-control" id="peso" step="0.01" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="dimensao" className="form-label">Dimensão</label>
      <input type="text" className="form-control" id="dimensao" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="compatibilidade" className="form-label">Compatibilidade</label>
      <input type="text" className="form-control" id="compatibilidade" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="quantidade_fornecida" className="form-label">Quantidade Fornecida</label>
      <input type="number" className="form-control" id="quantidade_fornecida" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="material" className="form-label">Material</label>
      <input type="text" className="form-control" id="material" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="condicao" className="form-label">Condição</label>
      <input type="text" className="form-control" id="condicao" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="instrucao_instalacao" className="form-label">Instrução de Instalação</label>
      <textarea className="form-control" id="instrucao_instalacao" onChange={handleChange}></textarea>
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
      <input type="text" className="form-control" id="fornecedor" value={user && user.nome} disabled />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="garantia" className="form-label">Garantia</label>
      <input type="text" className="form-control" id="garantia" onChange={handleChange} />
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="prazo_entrega" className="form-label">Prazo de Entrega</label>
      <input type="text" className="form-control" id="prazo_entrega" onChange={handleChange} />
    </div>
  </div>

  <button type="submit" className="btn btn-primary">Cadastrar</button>
</form>

      </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
      </div>

    </>
  );
};

export default FornecedorHome;
