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
    <a className="navbar-brand" href="#">
      <img alt="Ecom" src="images/logobranco.png" style={{height: "50px"}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        <li className="nav-item" style={{backgroundColor:'#381552'}}>
          <a className="nav-link" style={{color:"white"}} href="#">Entrar/Registrar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div></>)  }
  
        {children}

      {router.pathname !="/praca" && router.pathname !="/fornecedor" && router.pathname !=="/login" && router.pathname !=="/registrar" && router.pathname !="/fornecedor/login" && router.pathname !="/fornecedor/registrar" &&(<>
        <footer className="bg-light text-center text-lg-start mt-5">
    <div className="container p-4">
      <div className="text-center">
        <p className="text-muted">&copy; 2024 vetor5. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer></>)  }


      </>
  );
};

export default MainLayout;