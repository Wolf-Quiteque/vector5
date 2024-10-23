import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { deleteCookie, getDecryptedCookie } from "../../lib/session";
import Sidebar from '../../components/Sidebar';
import Toast from '../../components/Toast';

const FornecedorHome = () => {
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(false);
  const [activeTab, setActiveTab] = useState('pecas');
  const [peca, setPeca] = useState([]);
  const [pecas, setPecas] = useState([]);
  const [file, setFile] = useState("");
  const [modal, setModal] = useState();
  const [filepic, setfilepic] = useState("");
  const [selectedPeca, setSelectedPeca] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [user, setuser] = useState({});
  const router = useRouter();

  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  const closeToast = () => {
    setToast({ show: false, message: '', type: '' });
  };


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

    setTimeout(() => {
      setModal( new bootstrap.Modal(document.getElementById('novoproduto')))
      }, 1500);
   
  },[])


  const handleChange = (e) => {
    const { id, value } = e.target;
    setPeca((prevPecas) => ({
      ...prevPecas,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
    
    const newImageUrls = files.map(file => URL.createObjectURL(file));
    setImageUrls([...imageUrls, ...newImageUrls]);
  };


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setPeca(prevPeca => ({
      ...prevPeca,
      categoria: category
    }));
    
    const selectedCategoryObj = categories.find(cat => cat.name === category);
    setSubcategories(selectedCategoryObj ? selectedCategoryObj.subcategories : []);
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setPeca(prevPeca => ({
      ...prevPeca,
      subcategoria: subcategory
    }));
  };


  const categories = [
    { 
      name: "Pneus", 
      icon: "images/pneus.png", 
      subcategories: ["Pneu de Carro", "Pneu de Moto", "Pneu de Caminhão", "Pneu de Bicicleta"] 
    },
    { 
      name: "Motor", 
      icon: "images/motor.png", 
      subcategories: ["Bloco de Motor", "Pistão", "Válvulas", "Turbocompressor"] 
    },
    { 
      name: "Sistema Elétrico", 
      icon: "images/sistemaeletrico.png", 
      subcategories: ["Bateria", "Alternador", "Fiação", "Velas de Ignição"] 
    },
    { 
      name: "Embriagem / Peças", 
      icon: "images/embriagem.png", 
      subcategories: ["Disco de Embreagem", "Placa de Pressão", "Rolamento de Embreagem"] 
    },
    { 
      name: "Suspensão e Braços", 
      icon: "images/suspensao.png", 
      subcategories: ["Amortecedores", "Molas", "Braços de Controle", "Bieletas"] 
    },
    { 
      name: "Correias, Correntes e Polias", 
      icon: "images/correias.png", 
      subcategories: ["Correia Dentada", "Correia Poly-V", "Corrente de Comando", "Polias"] 
    },
    { 
      name: "Filtros", 
      icon: "images/filtros.png", 
      subcategories: ["Filtro de Ar", "Filtro de Óleo", "Filtro de Combustível"] 
    },
    { 
      name: "Óleos e Fluidos", 
      icon: "images/oleomotor.png", 
      subcategories: ["Óleo de Motor", "Fluido de Freio", "Líquido de Arrefecimento"] 
    },
    { 
      name: "Sistema de Amortecimento", 
      icon: "images/amortecimento.png", 
      subcategories: ["Amortecedores", "Batente de Amortecedor", "Coifa de Amortecedor"] 
    },
    { 
      name: "Carroçaria", 
      icon: "images/carrocaria.png", 
      subcategories: ["Para-choques", "Capô", "Paralamas", "Portas"] 
    },
    { 
      name: "Sistema de Travagem", 
      icon: "images/travagem.png", 
      subcategories: ["Pastilhas de Freio", "Discos de Freio", "Pinças de Freio", "Fluido de Freio"] 
    }
  ];
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };

  const uploadImagesToCloudinary = async () => {
    const uploadedUrls = [];
    for (const file of images) {
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
      uploadedUrls.push(res.secure_url);
    }
    return uploadedUrls;
  };





 const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    if(!peca){
      return false
    }
    if (selectedPeca) {
      handleEdit();
      return false;
    }
   
    var novapeca = peca;
    novapeca.fornecedor = user.nome;
    novapeca.email = user.email;

    const uploadedImageUrls = await uploadImagesToCloudinary();
    novapeca.img = uploadedImageUrls;

    try {
      const res = await fetch("/api/Pecas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novapeca),
      });
      setloading(false);
      fetchPecas();
      const data = await res.json();
      setPeca(null)
      modal.hide();
      showToast('success', data.message)
    } catch (error) {
      console.log(error);
      showToast('success',"Houve um erro")

      console.log(error);
    }
    modal.hide();

  };


  const handleEdit = async () => {
    var novapeca = peca;
    if (images.length > 0) {
      const uploadedImageUrls = await uploadImagesToCloudinary();
      novapeca.img = uploadedImageUrls;
    }

    const res = await fetch(`/api/Pecas/${selectedPeca._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novapeca),
    });

    if (res.ok) {
      modal.hide();

      setTimeout(() => {
      showToast('success', 'Peça atualizada com sucesso!')
        }, 300);
     
      
      fetchPecas();
    }

    setloading(false)
  };




  const handleSearch = (e) => {
    setSearch(e.target.value);
  };



  
//PEGAR PEÇAS

    const fetchPecas = async () => {
      const response = await getDecryptedCookie("authsesh")
      console.log()
      try {
        const res = await fetch("/api/Pecas/fornecedor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email:response.email}),
        });

        const data = await res.json()
        setPecas(data)
      } catch (error) {
        console.log(error)
        showToast('failure', 'Aguarde, houve um erro.')
        console.log(error)
      }
    };


  useEffect(() => {
    fetchPecas();
  }, []);


  //EDITAR PEÇAS



  const handleDelete = async () => {
    const res = await fetch(`/api/Pecas/${selectedPeca._id}`, {
      method: 'DELETE',
    });


    if (res.ok) {
      showToast('success', 'Peça Elimando com sucesso!')
     fetchPecas()
    }
    setloading(false)
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="d-flex">
        <Sidebar onSignout={handleSignout} />
        
        <div className="flex-grow-1 p-4">
          {toast.show && (
            <Toast
              type={toast.type}
              message={toast.message}
              isVisible={toast.show}
              onClose={closeToast}
            />
          )}
          
          <div className="container-fluid">
            {/* Search and New Button Section */}
            <div className="row mb-4">
              <div className="col">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar Peças"
                    value={search}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div className="col-auto">
                <button 
                  className="btn btn-outline-dark text-light"
                  style={{backgroundColor:"#5c2589"}}
                  data-bs-toggle="modal"
                  onClick={() => {
                    setSelectedPeca(null);
                    setTimeout(() => {
                      modal.show();
                    }, 300);
                  }}
                >
                  <i className="fa fa-add"></i> Adicionar Produto
                </button>
              </div>
            </div>

            {/* Table Section */}
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
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
                          <td>
                            {peca?.img && (
                              <img 
                                src={peca.img[0]} 
                                alt="Product" 
                                className="rounded"
                                style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                              />
                            )}
                          </td>
                          <td>{peca?.nome}</td>
                          <td>{peca?.marca}</td>
                          <td>{peca?.categoria}</td>
                          <td>{peca?.peso}</td>
                          <td>{peca?.preco} AOA</td>
                          <td>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setSelectedPeca(peca);
                                if(peca.img) setfilepic(peca.img);
                                setTimeout(() => {
                                  modal.show();
                                }, 300);
                              }}
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
                </div>
              </div>
            </div>

            {/* Add/Edit Modal */}
            <div className="modal fade" id="novoproduto" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content ">
      <div className="modal-header border-secondary">
        <h5 className="modal-title">{selectedPeca ? 'Editar' : 'Nova'} Peça</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          onClick={() => setSelectedPeca(null)}
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Nome */}
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                id="nome"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.nome}
                onChange={handleChange}
              />
            </div>

            {/* Chassi / VIN */}
            <div className="col-md-6">
              <label htmlFor="chassi" className="form-label">Chassi / VIN</label>
              <input
                type="text"
                id="chassi"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.chassi}
                onChange={handleChange}
              />
            </div>

            {/* Ano */}
            <div className="col-md-6">
              <label htmlFor="ano" className="form-label">Ano</label>
              <input
                type="number"
                id="ano"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.ano}
                onChange={handleChange}
              />
            </div>

            {/* Descrição */}
            <div className="col-md-6">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <textarea
                id="descricao"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.descricao}
                onChange={handleChange}
              />
            </div>

            {/* Marca */}
            <div className="col-md-6">
              <label htmlFor="marca" className="form-label">Marca</label>
              <input
                type="text"
                id="marca"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.marca}
                onChange={handleChange}
              />
            </div>

            {/* Categoria */}
            <div className="col-md-6">
              <label htmlFor="categoria" className="form-label">Categoria</label>
              <select
                id="categoria"
                className="form-select  border-secondary"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {selectedPeca ? (
                  <option value="">{selectedPeca?.categoria}</option>
                ) : (
                  <option value="">Selecione uma categoria</option>
                )}
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategoria */}
            <div className="col-md-6">
              <label htmlFor="subcategoria" className="form-label">Subcategoria</label>
              <select
                id="subcategoria"
                className="form-select  border-secondary"
                onChange={handleSubcategoryChange}
                disabled={!selectedCategory}
              >
                {selectedPeca ? (
                  <option value="">{selectedPeca?.subcategoria}</option>
                ) : (
                  <option value="">Selecione uma subcategoria</option>
                )}
                {subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>

            {/* Estoque */}
            <div className="col-md-6">
              <label htmlFor="estoque" className="form-label">Estoque</label>
              <input
                type="text"
                id="estoque"
                className="form-control  border-secondary"
                defaultValue={selectedPeca?.estoque}
                onChange={handleChange}
              />
            </div>

            {/* Preço */}
            <div className="col-md-6">
              <label htmlFor="preco" className="form-label">Preço</label>
              <input
                type="number"
                id="preco"
                className="form-control  border-secondary"
                step="0.01"
                defaultValue={selectedPeca?.preco}
                onChange={handleChange}
              />
            </div>

            {/* Preço Promocional */}
            <div className="col-md-6">
              <label htmlFor="preco_promocional" className="form-label">Preço Promocional</label>
              <input
                type="number"
                id="preco_promocional"
                className="form-control  border-secondary"
                step="0.01"
                defaultValue={selectedPeca?.preco_promocional}
                onChange={handleChange}
              />
            </div>

            {/* Imagens */}
            <div className="col-12">
              <label htmlFor="imagens" className="form-label">Imagens</label>
              <input
                type="file"
                id="imagens"
                multiple
                onChange={handleImageChange}
                className="form-control  border-secondary"
                accept=".png, .jpeg, .jpg"
              />
              <div className="d-flex flex-wrap gap-2 mt-2">
                {imageUrls.map((url, index) => (
                  <div key={index} className="position-relative">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="rounded"
                      style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger btn-sm position-absolute top-0 end-0"
                      onClick={() => removeImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Peso */}
            <div className="col-md-6">
              <label htmlFor="peso" className="form-label">Peso</label>
              <input
                type="number"
                id="peso"
                className="form-control  border-secondary"
                step="0.01"
                defaultValue={selectedPeca ? selectedPeca.peso : ""}
                onChange={handleChange}
              />
            </div>

            {/* Forma de Medir */}
            <div className="col-md-6">
              <label htmlFor="medida" className="form-label">Forma de Medir</label>
              <select
                id="medida"
                className="form-select  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.medida : ""}
                onChange={handleChange}
              >
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

            {/* Dimensão */}
            <div className="col-md-6">
              <label htmlFor="dimensao" className="form-label">Dimensão</label>
              <input
                type="text"
                id="dimensao"
                className="form-control  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.dimensao : ""}
                onChange={handleChange}
              />
            </div>

            {/* Compatibilidade */}
            <div className="col-md-6">
              <label htmlFor="compatibilidade" className="form-label">Compatibilidade</label>
              <input
                type="text"
                id="compatibilidade"
                className="form-control  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.compatibilidade : ""}
                onChange={handleChange}
              />
            </div>

            {/* Quantidade Fornecida */}
            <div className="col-md-6">
              <label htmlFor="quantidade_fornecida" className="form-label">Quantidade Fornecida</label>
              <input
                type="number"
                id="quantidade_fornecida"
                className="form-control  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.quantidade_fornecida : ""}
                onChange={handleChange}
              />
            </div>

            {/* Unidades de Fornecimento */}
            <div className="col-md-6">
              <label htmlFor="unidades_fornecimento" className="form-label">Unidades de Fornecimento</label>
              <input
                type="text"
                id="unidades_fornecimento"
                className="form-control  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.unidades_fornecimento : ""}
                onChange={handleChange}
              />
            </div>

            {/* Garantia */}
            <div className="col-md-6">
              <label htmlFor="garantia" className="form-label">Garantia</label>
              <input
                type="text"
                id="garantia"
                className="form-control  border-secondary"
                defaultValue={selectedPeca ? selectedPeca.garantia : ""}
                onChange={handleChange}
              />
            </div>

            {/* Botões de Ação */}
            <div className="col-12 mt-3">
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setSelectedPeca(null)}
                >
                  Cancelar
                </button>
                {loading ? (<button
                  className="btn btn-outline text-light disabled" style={{backgroundColor:"#5c2589"}}
                >
                      <div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
         
                </button>):(<button
                  type="submit"
                  className="btn btn-outline text-light"
                  style={{backgroundColor:"#5c2589"}}
                >
                  {selectedPeca ? 'Atualizar' : 'Criar'} Peça
                </button>)}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


            {/* Delete Modal */}
            <div className="modal fade" id="deletePecaModal" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Eliminar Peça</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    {selectedPeca && (
                      <p>Tem certeza que deseja eliminar {selectedPeca.nome}?</p>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDelete}
                      data-bs-dismiss="modal"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FornecedorHome;