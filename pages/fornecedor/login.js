import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from "next/router";

import {
  setEncryptedCookie,
} from "../../lib/session";

import { useState, useEffect } from 'react';
const LoginPage = () => {
  const router = useRouter();


  var fornecedor = {}

  const login = async () => {

    try {
      const response = await fetch('/api/fornecedores', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fornecedor),
      });
  
      const data = await response.json();
      
  
      if (response.ok) {
        console.log('Supplier registered successfully:');
        setEncryptedCookie("authsesh", data[0]);
        router.push("/fornecedor/")
        
      } else {
        console.error('Failed to register supplier:', data);
        // Handle failure, show error message
      }
    } catch (error) {
      console.error('An error occurred while registering supplier:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://picsum.photos/600/800"
              className="img-fluid rounded-start"
              alt="Login Image"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <div className="w-100 p-5">
            <div className='text-center'>
                    <img className='img-fluid' src="/images/logovector.png"  />
                </div>
              <h2 className="text-center mb-4" style={{ color: '#381552' }}>Entrar - Fornecedor</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" onChange={(e)=>{
                    fornecedor.email = e.target.value;
                  }} className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input type="password" onChange={(e)=>{
                    fornecedor.senha = e.target.value;
                  }} className="form-control" id="senha" required />
                </div>
                <a onClick={(e)=>{
                  login()
                }} className="btn btn-primary w-100" style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
                  Entrar
                </a>
              </form>
              <p className="text-center mt-3">
                Não tem conta? <Link href="/fornecedor/registrar"><a  style={{ color: '#381552' }}>Cadastre-se</a></Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
