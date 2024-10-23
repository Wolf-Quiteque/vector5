const SupplierNavbar = ({ supplier }) => {
    // This would normally come from props or context
    const supplierInfo = supplier || {
      name: "AutoParts Premium",
      logo: "https://picsum.photos/120/60",
      slogan: "Qualidade e confiança em cada peça",
      theme: {
        primaryColor: "#5c2589",
        secondaryColor: "#f8f9fa"
      }
    };
  
    const styles = {
      navbarBrand: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: supplierInfo.theme.primaryColor
      },
      storeHeader: {
        backgroundColor: supplierInfo.theme.secondaryColor,
        borderBottom: `3px solid ${supplierInfo.theme.primaryColor}`,
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
                  alt={`${supplierInfo.name} logo`}
                  className="me-3"
                  style={{ height: '60px', objectFit: 'contain' }}
                />
                <div>
                  <h1 className="mb-0" style={styles.navbarBrand}>
                    {supplierInfo.name}
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