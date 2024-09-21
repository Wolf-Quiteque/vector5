

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


import {
  deleteCookie, getDecryptedCookie,
} from "../../lib/session";
const FornecedorHome = () => {
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(false);

  const [activeTab, setActiveTab] = useState('pecas');
  const [peca, setPeca] = useState([]);
  const [pecas, setPecas] = useState([]);
  const [file, setFile] = useState("");
  const [filepic, setfilepic] = useState("")
  const [selectedPeca, setSelectedPeca] = useState(null);
  

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

  async function cloudinaryUp(){
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`,
        {
          method: 'POST',
          body: formdata,
        }
      );

      const data = await response.json();
      
      return(data.secure_url)
     
  }

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    if(selectedPeca){
      handleEdit()
      return false
    }
    setloading(true)
    var novapeca = peca
    novapeca.fornecedor = user.nome
    novapeca.email = user.email


    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "utjuauqd");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    );


    const res = await response.json();
    novapeca.img = res.secure_url



    try {
      const res = await fetch("/api/Pecas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novapeca),
      });
    setloading(false)
      fetchPecas()
        const data = await res.json()
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



  
//PEGAR PEÇAS

    const fetchPecas = async () => {
      try {
        const res = await fetch("/api/Pecas/fornecedor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email:user.email}),
        });

        const data = await res.json()
        setPecas(data)
      } catch (error) {
        console.log(error)
        alert('houve um erro')
        console.log(error)
      }
    };


  useEffect(() => {
    fetchPecas();
  }, []);


  //EDITAR PEÇAS

  const handleEdit = async (e) => {
  var novapeca = peca
if(file){
  const data = new FormData();
  const fileName = Date.now() + file.name;
  data.append("file", file);
  data.append("name", fileName);
  data.append("upload_preset", "utjuauqd");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`,
    {
      method: 'POST',
      body: data,
    }
  );


  const res = await response.json();
  novapeca.img = res.secure_url
}

    const res = await fetch(`/api/Pecas/${selectedPeca._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(peca),
    });

    if (res.ok) {
      alert('Peça atualizada com sucesso!');
     fetchPecas()
    }
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/Pecas/${selectedPeca._id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
     fetchPecas()
    }
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
      <div className="container mt-1">


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
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel"  >Novo Peça</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>{
          setSelectedPeca(null)
        }}  aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container mt-5">
        <h5 className="mb-4">Cadastrar Clientes</h5>
        <form onSubmit={handleSubmit}>
        <div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="nome" className="form-label">Nome</label>
    <input type="text" className="form-control" id="nome" defaultValue={selectedPeca ? selectedPeca.nome : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="descricao" className="form-label">Descrição</label>
    <textarea className="form-control" id="descricao" defaultValue={selectedPeca ? selectedPeca.descricao : ""} onChange={handleChange}></textarea>
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="marca" className="form-label">Marca</label>
    <input type="text" className="form-control" id="marca" defaultValue={selectedPeca ? selectedPeca.marca : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="categoria" className="form-label">Categoria</label>
    <input type="text" className="form-control" id="categoria" defaultValue={selectedPeca ? selectedPeca.categoria : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="estoque" className="form-label">Estoque</label>
    <input type="text" className="form-control" id="estoque" defaultValue={selectedPeca ? selectedPeca.estoque : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="preco" className="form-label">Preço</label>
    <input type="number" className="form-control" id="preco" step="0.01" defaultValue={selectedPeca ? selectedPeca.preco : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="preco_promocional" className="form-label">Preço Promocional</label>
    <input type="number" className="form-control" id="preco_promocional" step="0.01" defaultValue={selectedPeca ? selectedPeca.preco_promocional : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <div>
      <label htmlFor="imagem" className="form-label"> Selecione Imagem</label>
    </div>
    {filepic ? (
      <>
        <a className="btn btn-info btn-sm btn-danger" onClick={() => { setFile(""); setfilepic(""); }}>
          <i className="fa fa-trash"></i>
        </a>
      </>
    ) : ""}
    <label htmlFor="profilpic">
      {!filepic ? (
        <a className="btn text-white btn-sm" style={{ backgroundColor: "#381552" }}>
          <i className="fa fa-camera"></i>{" "}
        </a>
      ) : ""}
      <input
        type="file"
        id="profilpic"
        accept=".png, .jpeg, .jpg,"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setfilepic(URL.createObjectURL(e.target.files[0]));
        }}
        style={{ display: "none" }}
      />
    </label>
    <div>
      {filepic && (
        <img
          className="mt-3 profile-user-img img-fluid img-circle"
          src={filepic}
          alt="User profile picture"
          style={{ objectFit: "cover", width: "200px", height: "200px" }}
        />
      )}


    </div>
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="peso" className="form-label">Peso</label>
    <input type="number" className="form-control" id="peso" step="0.01" defaultValue={selectedPeca ? selectedPeca.peso : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="medida" className="form-label">Forma de Medir (peso)</label>
    <select id="medida" className="form-select" defaultValue={selectedPeca ? selectedPeca.medida : ""} onChange={handleChange}>
      <option value="">Selecione uma opção</option>
      <option value="L">Litros (L)</option>
      <option value="K">Kilos (K)</option>
      <option value="G">Gramas (G)</option>
      <option value="M">Metros (M)</option>
      <option value="CM">Centímetros (CM)</option>
      <option value="MM">Milímetros (MM)</option>
      <option value="UN">Unidades (UN)</option>
    </select>
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="dimensao" className="form-label">Dimensão</label>
    <input type="text" className="form-control" id="dimensao" defaultValue={selectedPeca ? selectedPeca.dimensao : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="compatibilidade" className="form-label">Compatibilidade</label>
    <input type="text" className="form-control" id="compatibilidade" defaultValue={selectedPeca ? selectedPeca.compatibilidade : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="quantidade_fornecida" className="form-label">Quantidade Fornecida</label>
    <input type="number" className="form-control" id="quantidade_fornecida" defaultValue={selectedPeca ? selectedPeca.quantidade_fornecida : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="material" className="form-label">Material</label>
    <input type="text" className="form-control" id="material" defaultValue={selectedPeca ? selectedPeca.material : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="condicao" className="form-label">Condição</label>
    <input type="text" className="form-control" id="condicao" defaultValue={selectedPeca ? selectedPeca.condicao : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="instrucao_instalacao" className="form-label">Instrução de Instalação</label>
    <textarea className="form-control" id="instrucao_instalacao" defaultValue={selectedPeca ? selectedPeca.instrucao_instalacao : ""} onChange={handleChange}></textarea>
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
    <input type="text" className="form-control" id="fornecedor" value={user && user.nome} disabled />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="garantia" className="form-label">Garantia</label>
    <input type="text" className="form-control" id="garantia" defaultValue={selectedPeca ? selectedPeca.garantia : ""} onChange={handleChange} />
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="prazo_entrega" className="form-label">Prazo de Entrega</label>
    <input type="text" className="form-control" id="prazo_entrega" defaultValue={selectedPeca ? selectedPeca.prazo_entrega : ""} onChange={handleChange} />
  </div>
</div>

    {loading?(
      <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    ):(
  <button type="submit" className="btn btn-primary"> {selectedPeca ? 'Salvar Alterações':'Cadastrar'} </button>

    )}

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

      
      <div className="container mt-5">
      <h1 className="my-4">Peças</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Peso</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pecas.map((peca) => (
            <tr key={peca._id}>
             {peca && peca.img &&( <td><img src={peca.img} class="img-thumbnail" style={{height:"60px"}} alt="..."></img></td>)}
              <td>{peca && peca.nome}</td>
              <td>{peca && peca.marca}</td>
              <td>{peca && peca.categoria}</td>
              <td>{peca && peca.peso}</td>
              <td>{peca && peca.preco} AOA</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#novoproduto"
                  onClick={() => {setSelectedPeca(peca); if(peca.img){ setfilepic(peca.img)} }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#deletePecaModal"
                  onClick={() => setSelectedPeca(peca)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editPecaModal"
        tabIndex="-1"
        aria-labelledby="editPecaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPecaModalLabel">Editar Peça</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleEdit}>
              <div className="modal-body">
                {selectedPeca && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        defaultValue={selectedPeca.nome}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="descricao" className="form-label">Descrição</label>
                      <textarea
                        className="form-control"
                        id="descricao"
                        defaultValue={selectedPeca.descricao}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="preco" className="form-label">Preço</label>
                      <input
                        type="number"
                        className="form-control"
                        id="preco"
                        step="0.01"
                        defaultValue={selectedPeca.preco}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-primary">Salvar Alterações</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deletePecaModal"
        tabIndex="-1"
        aria-labelledby="deletePecaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deletePecaModalLabel">Eliminar Peça</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedPeca && <p>Tem certeza que deseja eliminar {selectedPeca.nome}?</p>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default FornecedorHome;
