import React from 'react';

const MainLayout = ({ children }) => {


  return (
      <div>
        {children}

        <div className="app-footer desktop-hide">
      <div className="container">
        <ul className="nav justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-user"></i>
            </a>
          </li>
       
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-heart"></i>
            </a>
          </li>      <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li><li className="nav-item">
            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
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
      </div>
  );
};

export default MainLayout;