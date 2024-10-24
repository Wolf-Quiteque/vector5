const SupplierNavbar = ({ supplier }) => {
    // This would normally come from props or context
    const supplierInfo = supplier || {
      nome_empresa: "Vector5",
      logo: "/images/vetor5.png",
      slogan: "Qualidade e confiança em cada peça",
      theme: {
        cor_primaria: "#5c2589",
        cor_secundaria: "#f8f9fa"
      }
    };
  
    const styles = {
      navbarBrand: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: supplierInfo.cor_primaria
      },
      storeHeader: {
        backgroundColor: supplierInfo.cor_secundaria,
        borderBottom: `3px solid ${supplierInfo.cor_primaria}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop:'-60px'
      }
    };
  
    return (
      <>
        <div style={styles.storeHeader} className="py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 d-flex align-items-center">
                <img 
                  src={supplierInfo.logo} 
                  alt={`${supplierInfo.nome_empresa} logo`}
                  className="me-3"
                  style={{ height: '60px', objectFit: 'contain' }}
                />
                <div>
                  <h1 className="mb-0" style={styles.navbarBrand}>
                    {supplierInfo.nome_empresa}
                  </h1>
                  <p className="text-muted mb-0 small">
                    {supplierInfo.slogan}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <nav className="navbar navbar-expand">
                  <div className="container-fluid justify-content-end">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-box me-1"></i>
                          Catálogo
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-star me-1"></i>
                          Avaliações
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-info-circle me-1"></i>
                          Sobre
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-headset me-1"></i>
                          Contato
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SupplierNavbar;