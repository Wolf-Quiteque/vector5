import React from 'react';

const MainLayout = ({ children }) => {


  return (
      <>
   <div className="topbar">
  <div className="container-topbar">
    <div className="menu-topbar-left d-none d-xl-block">
      <ul className="nav-small">
        <li><a className="font-xs" href="#page-about-us.html">Sobre nós</a></li>
        <li><a className="font-xs" href="#page-careers.html">Carreiras</a></li>
        <li><a className="font-xs" href="#page-register.html">Abra uma loja</a></li>
      </ul>
    </div>
    <div className="info-topbar text-center d-none d-xl-block"><span className="font-xs color-brand-3">Envio gratuito para todos os pedidos acima de</span><span className="font-sm-bold color-success"> 275.000,00 kz</span></div>
    <div className="menu-topbar-right"><span className="font-xs color-brand-3">Precisa de ajuda? Ligue-nos:</span><span className="font-sm-bold color-success"> +244 942 523 789</span>
      <div className="dropdown dropdown-language">
        <button className="btn dropdown-toggle" id="dropdownPage" type="button" data-bs-toggle="dropdown" aria-expanded="true" data-bs-display="static"><span className="dropdown-right font-xs color-brand-3"><img src="images/flag-pt.svg" alt="Ecom" /> Pt</span></button>
        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownPage" data-bs-popper="static">
          
        <li><a className="dropdown-item" href="##"><img src="images/flag-pt.svg" alt="Ecom"/> Português</a></li>
          <li><a className="dropdown-item" href="##"><img src="images/flag-en.svg" alt="Ecom" /> Inglês</a></li>
          <li><a className="dropdown-item" href="##"><img src="images/flag-fr.svg" alt="Ecom"/> Francês</a></li>
          <li><a className="dropdown-item" href="##"><img src="images/flag-es.svg" alt="Ecom"/> Espanhol</a></li>
          <li><a className="dropdown-item" href="##"><img src="images/flag-cn.svg" alt="Ecom"/> 中国人</a></li>
        </ul>
      </div>
      <div className="dropdown dropdown-language">
        <button className="btn dropdown-toggle" id="dropdownPage2" type="button" data-bs-toggle="dropdown" aria-expanded="true" data-bs-display="static"><span className="dropdown-right font-xs color-brand-3">USD</span></button>
        <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownPage2" data-bs-popper="static">
          <li><a className="dropdown-item active" href="##">KZ</a></li>
          <li><a className="dropdown-item " href="##">USD</a></li>

          <li><a className="dropdown-item" href="##">EUR</a></li>
          <li><a className="dropdown-item" href="##">AUD</a></li>
          <li><a className="dropdown-item" href="##">SGP</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo"><a className="d-flex" href="#index.html"><img alt="Ecom" src="images/vetor5.png"  style={{height: "40px"}} /> </a></div>
            <div className="header-search">
              <div className="box-header-search">
                <form className="form-search" method="post" action="#">
                  <div className="box-category">
                   <select className="select-active select2-hidden-accessible">
  <option>Categorias</option>
  <option value="Lubrificantes/ Óleo do motor">Lubrificantes/ Óleo do motor</option>
  <option value="Filtro de Ar do Motor">Filtro de Ar do Motor</option>
  <option value="Filtro de Óleo">Filtro de Óleo</option>
  <option value="Velas de ignição">Velas de ignição</option>
  <option value="Calços Frente e Trás">Calços Frente e Trás</option>
  <option value="Pastilhas de freio">Pastilhas de freio</option>
  <option value="Discos de freio/Cintas">Discos de freio/Cintas</option>
  <option value="Pneus">Pneus</option>
  <option value="Bateria">Bateria</option>
  <option value="Sistema de arrefecimento">Sistema de arrefecimento</option>
  <option value="Correias e tensores">Correias e tensores</option>
  <option value="Terminais de suspensão e direção">Terminais de suspensão e direção</option>
  <option value="Amortecedores frente e trás">Amortecedores frente e trás</option>
</select>

                  </div>
                  <div className="box-keysearch">
                    <input className="form-control font-xs" type="text"  placeholder="Pesquisa Peça/marca" />
                  </div>
                </form>
              </div>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li ><a className="active" href="#index.html">Sobre </a>
                 
                  </li>
                  <li ><a href="#shop-grid.html">Fornecedores</a>
             
                  </li>
                  <li ><a href="#shop-vendor-list.html">Mais Vendidos</a>
                 
                  </li>
                  <li ><a href="##">Contacto</a>
                 
                  </li>
              
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white"><span className="burger-icon-top"></span><span className="burger-icon-mid"></span><span className="burger-icon-bottom"></span></div>
            </div>
            <div className="header-shop mobile-hide">
              <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-account"><span>Account</span></span>
                <div className="dropdown-account">
                  <ul>
                  <li><a href="#page-account.html">Minha Conta</a></li>
<li><a href="#page-account.html">Rastreamento de Pedido</a></li>
<li><a href="#page-account.html">Meus Pedidos</a></li>
<li><a href="#page-account.html">Minha Lista de Desejos</a></li>
<li><a href="#page-account.html">Configurações</a></li>
<li><a href="#page-login.html">Sair</a></li>

                  </ul>
                </div>
              </div><a className="mobile-hide font-lg icon-list icon-wishlist" href="#shop-wishlist.html"><span>Wishlist</span><span className="number-item font-xs">5</span></a>
             <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-cart"><span>Carrinho</span><span className="number-item font-xs">2</span></span>
   {/* THE CART <div className="dropdown-cart">
    <div className="item-cart mb-20">
      <div className="cart-image"><img src="images/imgsp5.png" alt="Pneu" /></div>
      <div className="cart-info"><a className="font-sm-bold color-brand-3" href="#shop-single-product.html">Pneu Michelin Primacy 4 - 205/55 R16</a>
        <p><span className="color-brand-2 font-sm-bold">1 x AOA 120.99</span></p>
      </div>
    </div>
    <div className="item-cart mb-20">
      <div className="cart-image"><img src="images/imgsp4.png" alt="Óleo de Motor" /></div>
      <div className="cart-info"><a className="font-sm-bold color-brand-3" href="#shop-single-product-2.html">Óleo de Motor Mobil 1 5W30</a>
        <p><span className="color-brand-2 font-sm-bold">1 x AOA 45.60</span></p>
      </div>
    </div>
    <div className="border-bottom pt-0 mb-15"></div>
    <div className="cart-total">
      <div className="row">
        <div className="col-6 text-start"><span className="font-md-bold color-brand-3">Total</span></div>
        <div className="col-6"><span className="font-md-bold color-brand-1">$166.59</span></div>
      </div>
      <div className="row mt-15">
        <div className="col-6 text-start"><a className="btn btn-cart w-auto" href="#shop-cart.html">Ver carrinho</a></div>
        <div className="col-6"><a className="btn btn-buy w-auto" href="#shop-checkout.html">Finalizar compra</a></div>
      </div>
    </div>
  </div> */}
</div>

            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="mobile-logo"><a className="d-flex" href="#index.html"><img alt="Ecom" src="images/vetor5.png" /></a></div>
          <div className="perfect-scroll">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav className="mt-15">
                <ul className="mobile-menu font-heading">
                <li ><a className="active" href="#index.html">Sobre </a>
                 
                 </li>
                 <li ><a href="#shop-grid.html">Fornecedores</a>
            
                 </li>
                 <li ><a href="#shop-vendor-list.html">Mais Vendidos</a>
                
                 </li>
                 <li ><a href="##">Contacto</a>
                
                 </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-account">
  <div className="mobile-header-top">
    <div className="user-account">
      <a href="#page-account.html">
        <img src="images/ava_1.png" alt="Ecom" />
      </a>
      <div className="content">
        <h6 className="user-name">Olá<span className="text-brand"> Steven !</span></h6>
        <p className="font-xs text-muted">Você tem 3 novas mensagens</p>
      </div>
    </div>
  </div>
  <ul className="mobile-menu">
    <li><a href="#page-account.html">Minha Conta</a></li>
    <li><a href="#page-account.html">Rastreamento de Pedido</a></li>
    <li><a href="#page-account.html">Meus Pedidos</a></li>
    <li><a href="#page-account.html">Minha Lista de Desejos</a></li>
    <li><a href="#page-account.html">Configurações</a></li>
    <li><a href="#page-login.html">Sair</a></li>
  </ul>
</div>
{/* 
            <div className="mobile-banner">
              <div className="bg-5 block-iphone"><span className="color-brand-3 font-sm-lh32">Starting from AOA 899</span>
                <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                <p className="font-base color-brand-3 mb-10">Special Sale</p><a className="btn btn-arrow" href="#shop-grid.html">learn more</a>
              </div>
            </div> */}
            <div className="site-copyright color-gray-400 mt-30">Copyright 2022 © Vetor 5.<br />Criado por<a href="#" target="_blank">�&nbsp; V5</a></div>
          </div>
        </div>
      </div>
    </div>
        {children}

        <div className="app-footer desktop-hide">
      <div className="container">
        <ul className="nav justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" href="##">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="##">
              <i className="fas fa-user"></i>
            </a>
          </li>
       
          <li className="nav-item">
            <a className="nav-link" href="##">
              <i className="fas fa-heart"></i>
            </a>
          </li>      <li className="nav-item">
            <a className="nav-link" href="##">
              <i className="fas fa-shopping-cart"></i>
            </a>  </li>
        
          <li className="nav-item">
            <a className="nav-link" href="##" >
              <i className="fas fa-bell"></i>
            </a>
          </li><li className="nav-item">
            <a className="nav-link" href="##" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content modal-dark">
          <div className="modal-header">
            <h5 className="modal-title" id="searchModalLabel">Procurar Peças de Carro</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <input type="text" className="form-control" placeholder="Procure por peças, marcas, etc..." />
            </div>

            <h6>Categorias</h6>
            <div className="d-flex flex-wrap">
              <button className="btn btn-outline-light m-2">Motor</button>
              <button className="btn btn-outline-light m-2">Freios</button>
              <button className="btn btn-outline-light m-2">Suspensão</button>
              <button className="btn btn-outline-light m-2">Transmissão</button>
            </div>
     
            <h6 className="mt-4">Filtrar por Marca</h6>
            <div className="d-flex flex-wrap">
              <button className="btn btn-outline-light m-2">BMW</button>
              <button className="btn btn-outline-light m-2">Audi</button>
              <button className="btn btn-outline-light m-2">Mercedes</button>
              <button className="btn btn-outline-light m-2">Toyota</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default MainLayout;