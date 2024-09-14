import Head from 'next/head';

const LoginPage = () => {
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
                    <img className='img-fluid' src="./images/logovector.png"  />
                </div>
              <h2 className="text-center mb-4" style={{ color: '#381552' }}>Entrar</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="senha" required />
                </div>
                <a href="/" className="btn btn-primary w-100" style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
                  Entrar
                </a>
              </form>
              <p className="text-center mt-3">
                Não tem conta? <a href="/registrar" style={{ color: '#381552' }}>Cadastre-se</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
