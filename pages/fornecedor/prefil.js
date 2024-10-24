import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../../lib/session";
// You can use getServerSideProps to fetch the initial data
export async function getServerSideProps(context) {
  try {
    // Assuming you have the user's ID from the session/token
    // Replace this with your actual authentication method
    const response = await getDecryptedCookie("authsesh")
console.log(response)
console.log("go")

    const userId = response._id // or however you store the user ID
console.log(userId)
    if (!userId) {
      return {
        props: {
          supplierData: null
        }
      };
    }

    const client = await clientPromise;
    const db = client.db('vector5');
    
    const supplier = await db.collection('usuario')
      .findOne({ _id: ObjectId(userId) });
console.log(supplier)
    return {
      props: {
        supplierData: JSON.parse(JSON.stringify(supplier)) // Serialize the data
      }
    };
  } catch (error) {
    console.error('Error fetching supplier data:', error);
    return {
      props: {
        supplierData: null
      }
    };
  }
}

export default function SupplierSetup({ supplierData }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [logoPreview, setLogoPreview] = useState(null);
  
  const [formData, setFormData] = useState({
    nome_empresa: '',
    slogan: '',
    logo: '',
    descricao: '',
    cor_primaria: '#5c2589',
    cor_secundaria: '#f8f9fa',
    telefone: '',
    whatsapp: '',
    endereco: '',
    cidade: '',
    cnpj: '',
    horario_funcionamento: '',
    politica_entrega: '',
    politica_devolucao: '',
    redes_sociais: {
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  });

  const handleSignout = async () => {
    await deleteCookie("authsesh");
    router.push('/fornecedor/login')
  };

  // Initialize form with supplier data if it exists
  useEffect(() => {
    if (supplierData) {
      setFormData(prev => ({
        ...prev,
        ...supplierData,
        // Ensure nested objects are properly set
        redes_sociais: {
          ...prev.redes_sociais,
          ...(supplierData.redes_sociais || {})
        }
      }));

      // Set logo preview if exists
      if (supplierData.logo) {
        setLogoPreview(supplierData.logo);
      }
    }
  }, [supplierData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleLogoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show preview immediately
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);

      try {
        setLoading(true);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "utjuauqd");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload",
          {
            method: 'POST',
            body: data,
          }
        );

        const res = await response.json();
        
        if (res.secure_url) {
          setFormData(prev => ({
            ...prev,
            logo: res.secure_url
          }));
          // Update preview with actual URL
          setLogoPreview(res.secure_url);
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        setMessage({
          type: 'error',
          content: 'Erro ao fazer upload da logo. Tente novamente.'
        });
        // Revert to old logo if exists
        setLogoPreview(formData.logo || null);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/usuario/prefil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _id: supplierData?._id // Include the _id if updating existing profile
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          content: supplierData 
            ? 'Perfil atualizado com sucesso!'
            : 'Perfil criado com sucesso!'
        });
      } else {
        throw new Error(data.message || 'Erro ao atualizar perfil');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        content: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          {supplierData ? 'Editar Perfil do Fornecedor' : 'Novo Perfil do Fornecedor'}
        </title>
      </Head>
      <Sidebar onSignout={handleSignout} />

      <div className="container py-5" style={{marginTop:-600}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  {supplierData ? 'Editar Perfil da Loja' : 'Configuração da Loja'}
                </h1>

                {supplierData && (
                  <div className="alert alert-info mb-4">
                    <i className="fas fa-info-circle me-2"></i>
                    Você está editando um perfil existente. Todos os campos foram preenchidos com suas informações atuais.
                  </div>
                )}

                {message.content && (
                  <div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'}`}>
                    {message.content}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row mb-4">
                    <div className="col-md-12 text-center mb-4">
                      <div className="logo-preview mb-3">
                        {logoPreview ? (
                          <img
                            src={logoPreview}
                            alt="Logo preview"
                            className="img-fluid"
                            style={{ maxHeight: '150px' }}
                          />
                        ) : (
                          <div className="placeholder-logo">
                            <i className="fas fa-store fa-4x text-muted"></i>
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="btn btn-outline-primary">
                          <i className="fas fa-upload me-2"></i>
                          Carregar Logo
                          <input
                            type="file"
                            className="d-none"
                            onChange={handleLogoChange}
                            accept="image/*"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Nome da Empresa</label>
                        <input
                          type="text"
                          name="nome_empresa"
                          className="form-control"
                          value={formData.nome_empresa}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Slogan</label>
                        <input
                          type="text"
                          name="slogan"
                          className="form-control"
                          value={formData.slogan}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Cor Primária</label>
                        <div className="input-group">
                          <input
                            type="color"
                            name="cor_primaria"
                            className="form-control form-control-color"
                            value={formData.cor_primaria}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            className="form-control"
                            value={formData.cor_primaria}
                            onChange={handleInputChange}
                            name="cor_primaria"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Cor Secundária</label>
                        <div className="input-group">
                          <input
                            type="color"
                            name="cor_secundaria"
                            className="form-control form-control-color"
                            value={formData.cor_secundaria}
                            onChange={handleInputChange}
                          />
                          <input
                            type="text"
                            className="form-control"
                            value={formData.cor_secundaria}
                            onChange={handleInputChange}
                            name="cor_secundaria"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Descrição da Empresa</label>
                        <textarea
                          name="descricao"
                          className="form-control"
                          rows="3"
                          value={formData.descricao}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Telefone</label>
                        <input
                          type="tel"
                          name="telefone"
                          className="form-control"
                          value={formData.telefone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">WhatsApp</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          className="form-control"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Endereço</label>
                        <input
                          type="text"
                          name="endereco"
                          className="form-control"
                          value={formData.endereco}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Cidade</label>
                        <input
                          type="text"
                          name="cidade"
                          className="form-control"
                          value={formData.cidade}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>


                
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">NIF</label>
                        <input
                          type="text"
                          name="cnpj"
                          className="form-control"
                          value={formData.cnpj}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Horário de Funcionamento</label>
                        <input
                          type="text"
                          name="horario_funcionamento"
                          className="form-control"
                          value={formData.horario_funcionamento}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <h4 className="h5 mb-3">Redes Sociais</h4>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              <i className="fa fa-facebook me-2"></i>Facebook
                            </label>
                            <input
                              type="url"
                              name="redes_sociais.facebook"
                              className="form-control"
                              value={formData.redes_sociais.facebook}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              <i className="fa fa-instagram me-2"></i>Instagram
                            </label>
                            <input
                              type="url"
                              name="redes_sociais.instagram"
                              className="form-control"
                              value={formData.redes_sociais.instagram}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              <i className="fa fa-linkedin me-2"></i>LinkedIn
                            </label>
                            <input
                              type="url"
                              name="redes_sociais.linkedin"
                              className="form-control"
                              value={formData.redes_sociais.linkedin}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Política de Entrega</label>
                        <textarea
                          name="politica_entrega"
                          className="form-control"
                          rows="3"
                          value={formData.politica_entrega}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Política de Devolução</label>
                        <textarea
                          name="politica_devolucao"
                          className="form-control"
                          rows="3"
                          value={formData.politica_devolucao}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
     <div className="text-center mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    style={{
                      backgroundColor: formData.cor_primaria,
                      borderColor: formData.cor_primaria
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Salvando...
                      </>
                    ) : (
                      supplierData ? 'Atualizar Perfil' : 'Criar Perfil'
                    )}
                  </button>
                </div>
                </form>
              </div>
            </div>
            </div>
            </div>
          </div>
        
      
    </>
  );
}