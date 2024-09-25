import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
const Praca = () => {
  const wrapperRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showProducts, setShowProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setproducts] = useState(null);

  const [productDetail, setProductDetail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;



  useEffect(() => {
    const wrapper = wrapperRef.current;
    const toggleButton = toggleButtonRef.current;

    function toggleSidebar(e) {
      e.preventDefault();
      wrapper.classList.toggle('toggled');
    }

    toggleButton.addEventListener('click', toggleSidebar);

    return () => {
      toggleButton.removeEventListener('click', toggleSidebar);
    };
  }, []);

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
  
  

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowProducts(true);
  };


  const handleSelectProduct = (product) => {
    setProductDetail(product)
  
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart(prevCart => prevCart.map(item => {
      if (item._id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total +Number( item.preco) * item.quantity, 0).toFixed(2);
  };


  const fetchpecas = async () => {
    try {
      const response = await axios.get(`/api/Pecas/all?page=${currentPage}&limit=${itemsPerPage}&search=${selectedCategory.name}`);
    
      setproducts(response.data.produtos)
      setTotalPages(Math.ceil(response.data.total / itemsPerPage));
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
   
    }
  };



  const [comentarios, setComentarios] = useState([
    { nome: 'Ana Silva', texto: 'Ótimo produto! Superou minhas expectativas.', foto: 'https://picsum.photos/50/50?random=1' },
    { nome: 'João Santos', texto: 'Entrega rápida e produto de qualidade.', foto: 'https://picsum.photos/50/50?random=2' },
    { nome: 'Maria Oliveira', texto: 'Recomendo! Custo-benefício excelente.', foto: 'https://picsum.photos/50/50?random=3' },
  ]);

  const [novoComentario, setNovoComentario] = useState({ nome: '', texto: '', foto: null });
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
  ];

  const handleComentarioChange = (e) => {
    setNovoComentario({ ...novoComentario, [e.target.name]: e.target.value });
  };

  const handleFotoChange = (e) => {
    setNovoComentario({ ...novoComentario, foto: URL.createObjectURL(e.target.files[0]) });
  };

  const adicionarComentario = (e) => {
    e.preventDefault();
    setComentarios([...comentarios, novoComentario]);
    setNovoComentario({ nome: '', texto: '', foto: null });
  };

  return (
    <>
     
     <Head>
        <title>Praça</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
       
        <link href="css/stylePraca.css" rel="stylesheet"  />
        <style jsx global>{`
          :root {
            --primary-color: #381552;
            --secondary-color: #5c2589;
            --dark-color: #2c1141;
            --light-color: #ffffff;
          }

          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          
           .btn-outline-custom {
  color: #5c2589;
  border-color: #5c2589;
  background-color: transparent;
}

.btn-outline-custom:hover {
  background-color: #5c2589;
  color: white;
}

          #wrapper {
            min-height: 100vh;
            display: flex;
          }

          #sidebar-wrapper {
            width: 350px;
            height: 100vh; /* Full viewport height */
            min-height: -webkit-fill-available; /* For iOS Safari */
            background-color: var(--primary-color);
            color: var(--light-color);
            overflow-y: auto;
            position: fixed;
            top: 0;
            left: -350px;
            transition: left 0.3s ease;
            z-index: 1000;
            display: flex;
            flex-direction: column;
          }

          #page-content-wrapper {
            flex: 1;
            width: 100%;
            transition: margin-left 0.3s ease;
          }

          #wrapper.toggled #sidebar-wrapper {
            left: 0;
          }

          .navbar {
            background-color: var(--dark-color);
            box-shadow: 0 2px 4px rgba(0,0,0,.1);
          }

          .navbar .navbar-brand,
          .navbar .nav-link {
            color: var(--light-color);
          }

          .btn-outline-light:hover {
            background-color: var(--secondary-color);
          }

          #sidebar-wrapper::-webkit-scrollbar {
            width: 8px;
          }

          #sidebar-wrapper::-webkit-scrollbar-thumb {
            background-color: var(--secondary-color);
            border-radius: 4px;
          }

          .cart-item {
            background-color: rgba(255,255,255,0.1);
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 10px;
          }

          .cart-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
          }

          .quantity-control {
            display: flex;
            align-items: center;
          }

          .quantity-control button {
            background-color: var(--secondary-color);
            border: none;
            color: var(--light-color);
            padding: 5px 10px;
            font-size: 14px;
          }

          .quantity-control span {
            padding: 0 10px;
          }

          .user-profile {
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }

          .user-profile img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .finalizar-compra {
            background-color: var(--secondary-color);
            color: var(--light-color);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .finalizar-compra:hover {
            background-color: #8347b4;
          }

          @media (min-width: 769px) {
            #sidebar-wrapper {
              left: 0;
            }
            #page-content-wrapper {
              margin-left: 350px;
            }
            #wrapper.toggled #sidebar-wrapper {
              left: -350px;
            }
            #wrapper.toggled #page-content-wrapper {
              margin-left: 0;
            }
          }

          @media screen and (max-height: 450px) {
            #sidebar-wrapper {
              overflow-y: scroll;
            }
          }
      .carousel-container {
          position: relative;
        }
        .thumbnail {
          width: 80px;
          height: 60px;
          object-fit: cover;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .thumbnail:hover, .thumbnail.active {
          opacity: 1;
        }
        .comentario {
          background-color: #f8f9fa;
          border-left: 4px solid #381552;
        }
          
        `}</style>
        
      </Head>
      <div className="d-flex" id="wrapper" ref={wrapperRef}>
        <div className="border-end" id="sidebar-wrapper">
        <div className="user-profile d-flex align-items-center">
        <img src="https://picsum.photos/50/50" alt="User Profile" className="me-3" />
        <div>
          <h6 className="mb-0">Olá, Judith</h6>
          <small>  <a href="#" className="text-light">Configurações <i className="fas fa-cog"></i></a></small>
        </div>
      </div>
          <div className="list-group list-group-flush p-3">
            <h4 className="mb-3">Seu Carrinho</h4>
            {cart.map(item => (
              <div className="cart-item" key={item._id}>
                <div className="d-flex align-items-center">
                  <img src={item.img[0]} style={{height:"40px"}} alt={item.nome} className="me-3" />
                  <div>
                    <div className="row">
                      <div className="col-6">
                        <h6 className="mb-0">{item.nome.slice(0,20)}</h6>
                        <p className="mb-0">{item.preco} kz</p>
                      </div>
                      <div className="col-6">
                        <div className="quantity-control mt-2">
                          <button className="btn btn-sm" onClick={() => updateQuantity(item._id, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button className="btn btn-sm" onClick={() => updateQuantity(item._id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3">
            <h5>Total: {calculateTotal()} kz</h5>
            <button className="btn finalizar-compra w-100 mt-3">Finalizar Compra</button>
          </div>
        </div>

        <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <button className="btn btn-outline-light" id="menu-toggle" ref={toggleButtonRef}>
                <i className="fa fa-shopping-cart"></i>
                <span className="badge" style={{ backgroundColor: '#5c2589' }}>{cart ?(cart.length):""}</span>
              </button>
        <Link href="/">
        <a className="navbar-brand ms-2">      
          <img alt="Ecom" src="images/logobranco.png" style={{height: "50px"}} />
          </a> 
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"white"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar produtos" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit"> <i className="fa fa-search"></i> </button>
            </form>
          </div>
        </div>
      </nav>

          <div className="container mt-4">
            <div className="row g-4">
              
            {!products && categories && categories.map((category)=>(
              <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{handleCategoryClick(category)  }}>
                    <div class="card-body  text-center">
                        <div class="card-icon">  <img src={category.icon} className="img-fluid" style={{maxHeight:"80px"}} /> </div>
                        <h5 class="card-title">{category.name}</h5>
                    </div>
                </div>
            </div>
            ))}

              {!productDetail && products && (
                <>
                  <div className='col-md-12' style={{marginTop:"-10px"}}>
                    <button className='btn btn-dark' onClick={() => { setproducts(null);  }}> <i className='fa fa-arrow-left'></i> Voltar   </button>
                    <div className='text-center'>
                    <h3>{selectedCategory.name}</h3>
                    </div>
                  </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4" >
                    
                  {products.map((p) => (
                    <div className="col" key={p.id}>
                      <div className="card h-100">
                      <div className="card-header d-flex justify-content-end" style={{backgroundColor: "transparent", border: "none"}}>
  <button className="btn btn-sm btn-outline-light" style={{ color: '#5c2589' }}>
    <i className="fas fa-heart"></i>
  </button>
</div>
                        <div className="card-body">
                          <div className="card-icon  text-center">
                            <img src={p.img[0]}  style={{height:"100px", width:'100px', cursor:"pointer"}} onClick={()=>{
                            handleSelectProduct(p)
                          }}  alt={p.nome} />
                          </div>
                          <h5 style={{cursor:"pointer"}} className="card-title" onClick={()=>{
                            handleSelectProduct(p)
                          }}>{p.nome}</h5>
                          <p className="card-text">{Number(p.preco)} kz</p>
                          <button className="btn btn-outline-dark" onClick={() => addToCart(p)} style={{marginRight:"5px"}}> <i className='fa fa-shopping-cart'></i>
                          </button>
                          <button  className="btn btn-outline-dark" onClick={()=>{
                            handleSelectProduct(p)
                          }} > <i className='fa fa-eye'></i>
                          </button>
                       
                        </div>
                      </div>
                    </div>
                  ))}</div>
                </>
              )}




{productDetail && (
                <>
                   <main>
                   <div className='col-md-12' style={{marginTop:"-25px"}}>
                    <button className='btn btn-dark' onClick={() => { setProductDetail(false); }}> 
                      <i className='fa fa-arrow-left'></i> {selectedCategory.name}   </button>
                   
                  </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="carousel-container text-center">
              <img src={productDetail.img[imagemAtual]} alt={`Imagem ${imagemAtual + 1}`} style={{height:"250px",width:"200px"}}  className=" rounded mb-3" />
              <div className="d-flex justify-content-center">
                {productDetail.img.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    style={{ width: '80px',
                      height: '60px' }}
                    className={`thumbnail mx-2 ${index === imagemAtual ? 'active' : ''}`}
                    onClick={() => setImagemAtual(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6"  >
           <h1 className="mb-4 float-start" style={{textAlign:"left"}}>{productDetail.nome}</h1>
            <p className="lead"> <strong>{productDetail.preco+',00 KZ'}</strong> </p>
            <div><span class="badge text-bg-secondary">{productDetail.categoria}</span></div>
            <div className='mb-3'><span class="badge " style={{backgroundColor:"#5c2589"}}>{productDetail.marca}</span></div>

            <p className="mb-4">
                {productDetail.descricao}
            </p>
            <button onClick={() => addToCart(productDetail)}  className="btn btn-outline-dark mb-4">Adicionar ao Carrinho</button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h3 className="text-2xl font-semibold mb-4">Avaliações</h3>
            <div className="comentarios mb-4">
              {comentarios.map((comentario, index) => (
                <div key={index} className="comentario mb-3 p-3 border rounded">
                  <div className="d-flex align-items-center mb-2">
                    <img src={comentario.foto} alt={comentario.nome} className="rounded-circle me-3" width="60" height="60" />
                    <div>
                      <strong className="d-block">{comentario.nome}</strong>
                      <small className="text-muted">Avaliação verificada</small>
                    </div>
                  </div>
                  <p className="mt-2">{comentario.texto}</p>
                </div>
              ))}
              <button className="btn btn-outline-dark">Ver Mais</button>
            </div>

            <h4 className="text-lg font-semibold mb-3">Adicionar Comentário</h4>
            <form onSubmit={adicionarComentario} className="bg-light p-4 rounded">
              <div className="mb-3">
                <input
                  type="text"
                  name="nome"
                  value={novoComentario.nome}
                  onChange={handleComentarioChange}
                  placeholder="Seu nome"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="texto"
                  value={novoComentario.texto}
                  onChange={handleComentarioChange}
                  placeholder="Seu comentário"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  onChange={handleFotoChange}
                  accept="image/*"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-outline-dark">Enviar Comentário</button>
            </form>
          </div>
        </div>
      </main>
                </>
              )}
              


            </div>
          </div>
        </div>

        
    <div class="modal" tabindex="-1" id="staticBackdrop">
    <div class="modal-dialog modal-dialog-centered modal-lg">

    <div class="modal-content">
      <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{selectedCategory && selectedCategory.name}</h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {selectedCategory && selectedCategory.subcategories.map((subcategory, index) => (
  <button
    key={index}
    style={{marginRight:"3px"}}
    className='btn btn-light ml-2 mb-2'
    data-bs-dismiss="modal"
    onClick={() => {handleSubcategoryClick(subcategory); fetchpecas();}}
  >
    {subcategory}
  </button>
))}

      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Praca;