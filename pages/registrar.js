import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://picsum.photos/600/800"
              className="img-fluid rounded-start"
              alt="Register Image"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <div className="w-100 p-5">
                <div className='text-center'>
                    <img className='img-fluid' src="./images/logovector.png"  />
                </div>
              <h2 className="text-center mb-4" style={{ color: '#381552' }}>Cadastro</h2>
              <form>
                {/* Step 1 */}
                {step === 1 && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">Nome</label>
                      <input type="text" className="form-control" id="nome" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nif" className="form-label">NIF</label>
                      <input type="text" className="form-control" id="nif" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefone" className="form-label">Telefone</label>
                      <input type="text" className="form-control" id="telefone" required />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary" style={{ backgroundColor: '#381552', borderColor: '#381552' }} onClick={nextStep}>
                        Próximo
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="endereco" className="form-label">Endereço</label>
                      <input type="text" className="form-control" id="endereco" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cidade" className="form-label">Cidade</label>
                      <input type="text" className="form-control" id="cidade" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="codigo_postal" className="form-label">Código Postal</label>
                      <input type="text" className="form-control" id="codigo_postal" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="senha" className="form-label">Senha</label>
                      <input type="password" className="form-control" id="senha" required />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-secondary" onClick={prevStep}>
                        Voltar
                      </button>
                      <a href="/" className="btn btn-primary" style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
                        Cadastrar
                      </a>
                    </div>
                  </>
                )}
              </form>
              <p className="text-center mt-3">
                Já tem uma conta?<Link href="/login"><a  style={{ color: '#381552' }}> Entrar</a></Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
