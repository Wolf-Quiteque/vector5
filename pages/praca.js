import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Praca = () => {
  const wrapperRef = useRef(null);
  const toggleButtonRef = useRef(null);

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
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"><img src="images/oleomotor.png" className="img-fluid" /> </div>
                        <h5 class="card-title">Óleos e Fluidos</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"> <img src="images/filtros.png" className="img-fluid" /> </div>
                        <h5 class="card-title">Filtros</h5>
                    </div>
                </div>
            </div>
          
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"><img src="images/velasing.png" className="img-fluid" /> </div>
                        <h5 class="card-title">Sistema de ignição e incandescência</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"><img src="images/calco.jpg" className="img-fluid" /></div>
                        <h5 class="card-title">Calços Frente e Trás</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon">🛑</div>
                        <h5 class="card-title">Discos de freio/Cintas</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"><img src="images/pneus.png" className="img-fluid" /></div>
                        <h5 class="card-title">Pneus</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"><img src="images/baterias.jpg" className="img-fluid" /> </div>
                        <div class="card-icon"></div>
                        <h5 class="card-title">Sistema elétrico</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon">❄️</div>
                        <h5 class="card-title">Embraiagem / peças</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon"> <img src="images/correios.png" className="img-fluid" /> </div>
                        <h5 class="card-title">Correias e tensores</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon">🎛️</div>
                        <h5 class="card-title">Suspensão e braços</h5>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="card-icon">  <img src="images/Amortecedores.webp" className="img-fluid" /> </div>
                        <h5 class="card-title">Amortecedores frente e trás</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default Praca;


