

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


import {
  deleteCookie, getDecryptedCookie,
} from "../../lib/session";
import Sidebar from '../../components/Sidebar';
const FornecedorHome = () => {
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(false);

  const [activeTab, setActiveTab] = useState('pecas');
  const [peca, setPeca] = useState([]);
  const [pecas, setPecas] = useState([]);
  const [file, setFile] = useState("");
  const [filepic, setfilepic] = useState("")
  const [selectedPeca, setSelectedPeca] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert('houve um erro');
      console.log(error);
    }
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
      alert('Peça atualizada com sucesso!');
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
        alert('houve um erro')
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
     fetchPecas()
    }
    setloading(false)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex h-screen">
        <Sidebar onSignout={handleSignout} />
        
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search and New Button Section */}
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Pesquisar Peças"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <button 
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
                data-bs-toggle="modal" 
                data-bs-target="#novoproduto"
                onClick={()=>{
                  setSelectedPeca(null)
                }}
              >
             <i className="fa fa-add"> </i> Adicionar Produto
              </button>
            </div>
  
            {/* Table Section */}
            <div className="overflow-x-auto rounded-lg border border-gray-700">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Marca</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Peso</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Preço</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                  {pecas.map((peca) => (
                    <tr key={peca._id} className="hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {peca?.img && (
                          <img src={peca.img[0]} alt="Product" className="h-12 w-12 object-cover rounded-md"/>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{peca?.nome}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{peca?.marca}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{peca?.categoria}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{peca?.peso}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{peca?.preco} AOA</td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-white text-sm transition-colors"
                          data-bs-toggle="modal"
                          data-bs-target="#novoproduto"
                          onClick={() => {
                            setSelectedPeca(peca);
                            if(peca.img) setfilepic(peca.img);
                            console.log(peca)
                          }}
                        >
                          Editar
                        </button>
                        <button
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm transition-colors"
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
  
            {/* Add/Edit Modal */}
            <div className="modal fade" id="novoproduto" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-gray-800 text-gray-100">
                  <div className="modal-header border-b border-gray-700 p-4">
                    <h5 className="text-xl font-medium">{selectedPeca ? 'Editar' : 'Nova'} Peça</h5>
                    <button 
                      className="text-gray-400 hover:text-gray-200"
                      data-bs-dismiss="modal"
                      onClick={() => setSelectedPeca(null)}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nome */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Nome</label>
                          <input
                            type="text"
                            id="nome"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            defaultValue={selectedPeca?.nome}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Descrição */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Descrição</label>
                          <textarea
                            id="descricao"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            defaultValue={selectedPeca?.descricao}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Marca */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Marca</label>
                          <input
                            type="text"
                            id="marca"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            defaultValue={selectedPeca?.marca}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Categoria */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Categoria</label>
                          <select
                            id="categoria"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        

                          >
                           {selectedPeca? ( <option value="">{selectedPeca?.categoria}</option>):( <option value="">Selecione uma categoria</option>)}
                            {categories.map((category, index) => (
                              <option key={index} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
  
                        {/* Subcategoria */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Subcategoria</label>
                          <select
                            id="subcategoria"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            onChange={handleSubcategoryChange}
                            disabled={!selectedCategory}
                          >
                                                       {selectedPeca? ( <option value="">{selectedPeca?.subcategoria}</option>):( <option value="">Selecione uma categoria</option>)}

                            {subcategories.map((subcategory, index) => (
                              <option key={index} value={subcategory}>
                                {subcategory}
                              </option>
                            ))}
                          </select>
                        </div>
  
                        {/* Estoque */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Estoque</label>
                          <input
                            type="text"
                            id="estoque"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            defaultValue={selectedPeca?.estoque}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Preço */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Preço</label>
                          <input
                            type="number"
                            id="preco"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            step="0.01"
                            defaultValue={selectedPeca?.preco}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Preço Promocional */}
                        <div>
                          <label className="block text-sm font-medium mb-1">Preço Promocional</label>
                          <input
                            type="number"
                            id="preco_promocional"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            step="0.01"
                            defaultValue={selectedPeca?.preco_promocional}
                            onChange={handleChange}
                          />
                        </div>
  
                        {/* Imagens */}
                        <div className="col-span-2">
                          <label className="block text-sm font-medium mb-1">Imagens</label>
                          <input
                            type="file"
                            id="imagens"
                            multiple
                            onChange={handleImageChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
                            accept=".png, .jpeg, .jpg"
                          />
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            {imageUrls.map((url, index) => (
                              <div key={index} className="relative">
                                <img
                                  src={url}
                                  alt={`Preview ${index + 1}`}
                                  className="h-24 w-24 object-cover rounded-md"
                                />
                                <button
                                  type="button"
                                  className="absolute -top-2 -right-2 bg-red-600 rounded-full p-1 hover:bg-red-700"
                                  onClick={() => removeImage(index)}
                                >
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
  
                        {/* Rest of your form fields following the same pattern */}
                        {/* ... */}
  
                      </div>
  
                      <div className="flex justify-end space-x-3 mt-6">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
                          data-bs-dismiss="modal"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                          disabled={loading}
                        >
                          {loading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"/>
                          ) : (
                            selectedPeca ? 'Salvar Alterações' : 'Cadastrar'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Delete Modal */}
            <div className="modal fade" id="deletePecaModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-gray-800 text-gray-100">
                  <div className="modal-header border-b border-gray-700 p-4">
                    <h5 className="text-xl font-medium">Eliminar Peça</h5>
                    <button className="text-gray-400 hover:text-gray-200" data-bs-dismiss="modal">
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    {selectedPeca && (
                      <p>Tem certeza que deseja eliminar {selectedPeca.nome}?</p>
                    )}
                  </div>
                  <div className="modal-footer border-gray-700">
                    <button
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md ml-3"
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