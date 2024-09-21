import { useState } from 'react';
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";

import {
  setEncryptedCookie,
} from "../../lib/session";

const RegisterFornecedorPage = () => {
  const [step, setStep] = useState(1);
  const [fornecedorData, setfornecedorData] = useState({});
  const [loading, setloading] = useState(false);


const router = useRouter()
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  var fornecedor = {}

  const registerFornecedor = async () => {
    setloading(true)

    try {
      const response = await fetch('/api/fornecedores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fornecedorData),
      });
  
      const data = await response.json();
      fornecedor = {}
  
      if (response.ok) {
        console.log('Supplier registered successfully:', data);
        setEncryptedCookie("authsesh", fornecedorData);
        router.push("/fornecedor/")
        
        // Handle success, e.g., redirect to login or dashboard
      } else {
        console.error('Failed to register supplier:', data);
        console.log(data)
        alert(data.message)
      }
    } catch (error) {
      console.error('An error occurred while registering supplier:', error);
    }
  };
  

  return (
    <>
      <Head>
        <title>Cadastro Fornecedor</title>
      </Head>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://picsum.photos/600/800"
              className="img-fluid rounded-start"
              alt="Fornecedor Register Image"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <div className="w-100 p-5">
              <div className="text-center">
                <img className="img-fluid" src="/images/logovector.png" alt="Logo" />
              </div>
              <h2 className="text-center mb-4" style={{ color: '#381552' }}>Novo Fornecedor</h2>
             
              <form>
                {/* Step 1 - Basic Information */}
                {step === 1 && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">Nome</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData;
                        fornecedor.nome = e.target.value;
                        setfornecedorData(fornecedor)
                      }} className="form-control" id="nome" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nif" className="form-label">NIF (Número de Identificação Fiscal)</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.nif = e.target.value;
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="nif" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.email = e.target.value
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefone" className="form-label">Telefone</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.telefone = e.target.value;
                        setfornecedorData(fornecedor)
                      }} className="form-control" id="telefone" required />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary" style={{ backgroundColor: '#381552', borderColor: '#381552' }} onClick={nextStep}>
                        Próximo
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2 - Address and Account Information */}
                {step === 2 && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="endereco" className="form-label">Endereço</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.endereco = e.target.value;
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cidade" className="form-label">Cidade</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.cidade = e.target.value;
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="cidade" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="codigo_postal" className="form-label">Código Postal</label>
                      <input type="text" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.codigo_postal = e.target.value
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="codigo_postal" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="senha" className="form-label">Senha</label>
                      <input type="password" onChange={(e)=>{
                        fornecedor = fornecedorData
                        fornecedor.senha = e.target.value
                      setfornecedorData(fornecedor)}}
                       className="form-control" id="senha" required />
                    </div>
                    <div className="d-flex justify-content-between">
                      {!loading &&(<button type="button" className="btn btn-secondary" onClick={prevStep}>
                        Voltar
                      </button> )}
                      
                      {loading ?(<><a   className="btn btn-primary disabled" >
                        aguarde...
                      </a></>):(<> <a onClick={()=>{
                        registerFornecedor()
                      }}  className="btn btn-primary" style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
                        Cadastrar
                      </a></>)}
                    
                    </div>
                  </>
                )}
              </form>
              <p className="text-center mt-3">
                Já tem uma conta? <Link href="/fornecedor/login"><a  style={{ color: '#381552' }}>Entrar</a></Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterFornecedorPage;
