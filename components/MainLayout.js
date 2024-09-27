import React from 'react';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../lib/session";
const MainLayout = ({ children }) => {
  const router = useRouter();


const CheckSessionFornecedor = async () => {
  const response = await getDecryptedCookie("authsesh") || false;
  if(router.pathname == "/fornecedor" && !response){
    router.push("/fornecedor/login")
  }

  if(router.pathname == "/fornecedor/login" && response || router.pathname  == "/fornecedor/registrar" && response  ){
    router.push("/fornecedor")

  }
}

  useEffect (()=>{
    CheckSessionFornecedor()
  },[router.asPath])

  return (
      <>
      {router.pathname !="/praca" && router.pathname !="/fornecedor" && router.pathname !="/login" && router.pathname !="/registrar" && router.pathname !="/fornecedor/login" && router.pathname !="/fornecedor/registrar" &&(<>  <div className="topbar">
        <nav className="navbar navbar-expand-lg">
  <div className="container">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"white"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Início</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Motor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Acessórios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sistema Elétrico</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Todas Marcas</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item" style={{backgroundColor:'#6c3494'}}>
          <a className="btn" style={{color:"white"}} href="#">Entrar/Registrar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div></>)  }
  
        {children}

      {router.pathname !="/fornecedor" && router.pathname !=="/login" && router.pathname !=="/registrar" && router.pathname !="/fornecedor/login" && router.pathname !="/fornecedor/registrar" &&(<>
    
    <footer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '40px',
      backgroundColor: 'transparent',
      padding: '0 20px',
      fontSize: '0.9rem',
      color: 'white'
    }}>
      <div>
        <span>&copy; 2024 Vetor5</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/termos" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
          Termos e Políticas
        </a>
        <a href="/ajuda" style={{ color: 'white', textDecoration: 'none' }}>
          Ajuda
        </a>
      </div>
    </footer></>)  } 


      </>
  );
};

export default MainLayout;