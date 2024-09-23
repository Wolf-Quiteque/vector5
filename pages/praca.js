import Head from 'next/head';
import Link from 'next/link'
import Script from 'next/script';

const Praca = () => {
  return (
    <>
      <Head>
        <title>Praça</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link href="css/style2.css" rel="stylesheet"  />
        
      </Head>
      <div className="d-flex" id="wrapper">
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
            <img src="https://picsum.photos/60/60" alt="Product 1" className="me-3" />
            <div>
              <h6 className="mb-0">Produto 1</h6>
              <p className="mb-0">50,00 kz</p>
            </div>
          </div>
          <div className="quantity-control mt-2">
            <button className="btn btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-sm">+</button>
          </div>
        </div>
        <div className="cart-item">
          <div className="d-flex align-items-center">
            <img src="https://picsum.photos/60/60" alt="Product 2" className="me-3" />
            <div>
              <h6 className="mb-0">Produto 2</h6>
              <p className="mb-0">75,00 kz</p>
            </div>
          </div>
          <div className="quantity-control mt-2">
            <button className="btn btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-sm">+</button>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h5>Total: 125,00 kz</h5>
        <button className="btn finalizar-compra w-100 mt-3">Finalizar Compra</button>
      </div>
    </div>

    <div id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="btn btn-outline-light" id="menu-toggle">
            <i className="fa fa-shopping-cart"></i>
          </button>
        <Link href="/">
        <a className="navbar-brand ms-2">      
          <img alt="Ecom" src="images/logobranco.png" style={{height: "50px"}} />
          </a> 
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <h1>Praça</h1>
        <p>Explore nossos produtos e adicione-os ao seu carrinho!</p>
   
      </div>
    </div>
  </div>
  <Script
        src="js/main2.js"
      />
    </>
  );
};

export default Praca;


