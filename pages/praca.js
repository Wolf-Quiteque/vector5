import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef,useState } from 'react';

const Praca = () => {
  const wrapperRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [showProducts, setShowProducts] = useState(false);
 
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
  
  
    const products = [
      { id: 1, name: "Produto 1", price: "50,00 kz", image: "https://picsum.photos/200/200?random=1" },
      { id: 2, name: "Produto 2", price: "75,00 kz", image: "https://picsum.photos/200/200?random=2" },
      { id: 3, name: "Produto 3", price: "100,00 kz", image: "https://picsum.photos/200/200?random=3" },
      { id: 4, name: "Produto 4", price: "125,00 kz", image: "https://picsum.photos/200/200?random=4" },
      { id: 5, name: "Produto 5", price: "150,00 kz", image: "https://picsum.photos/200/200?random=5" },
    ];
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    const handleSubcategoryClick = (subcategory) => {
      setSelectedSubcategory(subcategory);
      setShowProducts(true);
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
        <div className="cart-item">
          <div className="d-flex align-items-center">
            <img src="https://picsum.photos/60/60" style={{height:"40px"}} alt="Product 1" className="me-3" />
            <div>
              <div className="row">
                <div className="col-6">      <h6 className="mb-0">Produto 1</h6>
              <p className="mb-0">50,00 kz</p></div>
              <div className="col-6">
              <div className="quantity-control mt-2">
            <button className="btn btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-sm">+</button>

          </div>
              </div>
              </div>
        
            </div>
          </div>
     
        </div>
   
        <div className="cart-item">
          <div className="d-flex align-items-center">
            <img src="https://picsum.photos/60/60" style={{height:"40px"}} alt="Product 1" className="me-3" />
            <div>
              <div className="row">
                <div className="col-6">      <h6 className="mb-0">Produto 1</h6>
              <p className="mb-0">50,00 kz</p></div>
              <div className="col-6">
              <div className="quantity-control mt-2">
            <button className="btn btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-sm">+</button>

          </div>
              </div>
              </div>
        
            </div>
          </div>
     
        </div>
      
        <div className="cart-item">
          <div className="d-flex align-items-center">
            <img src="https://picsum.photos/60/60" style={{height:"40px"}}  alt="Product 1" className="me-3" />
            <div>
              <div className="row">
                <div className="col-6">      <h6 className="mb-0">Produto 1</h6>
              <p className="mb-0">50,00 kz</p></div>
              <div className="col-6">
              <div className="quantity-control mt-2">
            <button className="btn btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-sm">+</button>

          </div>
              </div>
              </div>
        
            </div>
          </div>
     
        </div>
      </div>
      <div className="p-3">
        <h5>Total: 125,00 kz</h5>
        <button className="btn finalizar-compra w-100 mt-3">Finalizar Compra</button>
      </div>
    </div>

    <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <button className="btn btn-outline-light" id="menu-toggle" ref={toggleButtonRef}>
                <i className="fa fa-shopping-cart"></i>
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
        <div class="row g-4">

            {categories && categories.map((category)=>(
              <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{handleCategoryClick(category) }}>
                    <div class="card-body">
                        <div class="card-icon">  <img src={category.icon} className="img-fluid" /> </div>
                        <h5 class="card-title">{category.name}</h5>
                    </div>
                </div>
            </div>
            ))}
            
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
    onClick={() => handleSubcategoryClick(subcategory)}
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


