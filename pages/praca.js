import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useRouter } from 'next/router';
import SupplierNavbar from '../components/SupplierNavbar'



const Praca = () => {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showProducts, setShowProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setproducts] = useState(null);
  const [lgoincadastrar, setlgoincadastrar] = useState(true);
  const [cadastrosucces, setcadastrosucces] = useState(false);
  const [session, setsession] = useState(false);
  const [text, settext] = useState('');
  const [loggedin, setloggedin] = useState(false);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    }).format(price);
  };

  
  const [file, setFile] = useState("");
  const [setupdone, setSetupdone] = useState(false);
  const [loading, setloading] = useState(false);

  const supplierInfo = {
    name: "Caetano Parts",
    logo: "https://caetanoparts.caetano.co.ao/wp-content/uploads/2020/07/cropped-logo-2.png",
    slogan: "Qualidade e confiança em cada peça",
    theme: {
      primaryColor: "#5c2589",
      secondaryColor: "#f8f9fa"
    }
  };

  const [inputValue, setInputValue] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
    e.preventDefault();

      // Redirect to /praca with the query parameter
      setSelectedCategory({name:inputValue})
      fetchpecas(inputValue)
    }
  };


  const [productDetail, setProductDetail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

//CONFIRMAÇÃO DE COMPRA--------------------------------------------
const [step, setStep] = useState(1);
const [userData, setUserData] = useState({ name: '', phone: '', address: '',email:'' });

const [selectedBank, setSelectedBank] = useState('');
const [comprovativo, setComprovativo] = useState(null);
const [receiptNumber, setReceiptNumber] = useState('');


function Getrecptnumber (){
  setReceiptNumber(`REC${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);
}

const calculateTotalnew = () => {
  const totalNumber = cart.reduce((total, item) => total + item.preco * item.quantity, 0);
  // Convert to string with 2 decimal places and ",00" format
  return totalNumber.toString();
};

const generatePDF = () => {
  setCart([])
  setSetupdone(true)
  setUserData({ name: '', phone: '', address: '' })
  setFile(null)
  setComprovativo(null)
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  const pw = pageWidth - 50

  // Helper function to add text
  const addText = (text, x, y, size = 10, style = 'normal') => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.text(text, x, y);
  };



  // Header
  addText('Vetor5', 20, 30, 24, 'bold');
  addText('Proforma Invoice', pageWidth - 60, 30, 16, 'bold', 'right');

  // Company details
  addText('Vetor5', 20, 45);
  addText('Talatana, rua 39, predio 4', 20, 52);
  addText('Email: geral@vetor5.co.ao', 20, 59);
  addText('Telefone: +244963852741', 20, 66);

  // Invoice details
  addText(`Invoice Number: ${receiptNumber}`, pageWidth - 60, 45, 10, 'normal', 'right');
  addText(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, 52, 10, 'normal', 'right');

  // Client details
  addText('Factura Para:', 20, 80, 12, 'bold');
  addText(userData.name, 20, 88);
  addText(userData.phone, 20, 95);
  addText(userData.address, 20, 102);

  // Table for order items
  const tableColumn = ["Iten", "Qty", "Preço U.", "Total"];
  const tableRows = cart.map(item => [
    item.nome,
    item.quantity,
    `${item.preco+' kz'}`,
    `${(item.preco * item.quantity)+' kz'}`
  ]);

  doc.autoTable({
    startY: 120,
    head: [tableColumn],
    body: tableRows,
    headStyles: { fillColor: [92, 37, 137], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 241, 241] },
    tableLineColor: [189, 195, 199],
    tableLineWidth: 0.25,
  });

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum +Number( item.preco) * Number(item.quantity), 0);
  const tax = subtotal * 0.14; // Assuming 14% tax
  const total = subtotal + tax;

  // Add totals
  let yPos = doc.lastAutoTable.finalY + 20;
  addText(`Subtotal: ${subtotal.toFixed(2)+ ' kz'}`, pageWidth - 60, yPos, 10, 'normal', 'right');
  addText(`Taxa (14%): ${tax.toFixed(2)+ ' kz'}`, pageWidth - 60, yPos + 7, 10, 'normal', 'right');
  addText(`Total: ${total.toFixed(2)+ ' kz'}`, pageWidth - 60, yPos + 14, 12, 'bold', 'right');

  // Footer
  doc.setDrawColor(92, 37, 137);
  doc.line(20, pageHeight - 30, pageWidth - 20, pageHeight - 30);
  addText('Obrigado pela preferencia', pw / 2, pageHeight - 20, 10, 'normal', 'center');

  // Save the PDF
  doc.save(`invoice_${receiptNumber}.pdf`);
};

const bancos = [
  "Banco Angolano de Investimentos (BAI)",
  "Banco de Fomento Angola (BFA)",
  "Banco BIC",
  "Banco Millennium Atlântico",
  "Banco de Poupança e Crédito (BPC)",
  "Banco Sol",
  "Banco Caixa Geral Angola",
  "Standard Bank Angola",
  "Banco Keve",
  "Banco Comercial do Huambo"
];

const handleUserDataChange = (e) => {
  setUserData({ ...userData, [e.target.name]: e.target.value });
};

const handleFileChange = async (e) => {
  setComprovativo(null);
  const file = e.target.files[0];
  
  if (!file) return;

  // Check if file is PDF
  if (file.type !== 'application/pdf') {
    alert('Please select a PDF file');
    return;
  }

  // Check file size (1MB limit)
  const maxSize = 1 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('O documento selecionado é muito grande. Por favor, selecione um arquivo menor que 1 MB.');
    return;
  }


 
  setloading(true);

  try {
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);

    // Upload file
    const response = await fetch('https://verifica-jet.vercel.app/upload', {
      method: 'POST',
      body: formData,
    });

    const jsonResponse = await response.json();
    const comprovativoText = jsonResponse.text.replace(/\n/g, ' ').replace(/\s+/g, '');
    settext(comprovativoText);

    if (jsonResponse.original) {
      const Total = calculateTotalnew ()

      
      const myVariable = jsonResponse.text;
      
      // Check if text contains required information
      const hasTotal = myVariable.includes(Total + ',00');
      const hasReference = [
        "AO06.0055.0000.1009.6480.1012.9",
        "AO06 0055 0000 1009 6480 1012 9",
        "AO06005500001009648010129"
      ].some(ref => myVariable.includes(ref));

      if (hasTotal && hasReference) {
        try {
          // Verify if comprovativo is unique
          const verificationResponse = await axios.post(
            'https://glab-api.vercel.app/api/aef/comprovativos',
            { data: comprovativoText }
          );

          if (verificationResponse.status === 200) {
            const data = verificationResponse.data;
            if (!data.length > 0) {
              setComprovativo(file);
              setPdfChecked(true);
              setloading(false);
              return;
            }
          }
        } catch (error) {
          console.error('Error checking data:', error);
        }
      }
    }

    setloading(false);
    alert("COMPORVATIVO REJEITADO PELO VERIFICADOR FINPAY (seu comprovativo é falso ou duplicado)");
    setComprovativo(null);

  } catch (error) {
    console.error('Error uploading or processing document:', error);
    setloading(false);
    alert('Error processing document. Please try again.');
  }
};


const copyIBAN = () => {
  // Simulação de IBAN
  const iban = "AO06000600000100037131174";
  navigator.clipboard.writeText(iban);
  alert("IBAN copiado para a área de transferência!");
};



const renderStep = () => {
  switch(step) {
    case 1:
      return (
        <div>
          <h5>Confirmar Pedido</h5>
          {cart.map((item) => (
            <div key={item._id} className="mb-2">
              <span>{item.nome} / <strong> {item.quantity} </strong> </span>
              <span className="float-end">{item.preco * item.quantity+' kz'}</span>
            </div>
          ))}
          <hr />
          <div className="fw-bold">
            Total: {cart.reduce((total, item) => total + item.preco * item.quantity, 0)+' kz'} 
          </div>
          <button className="btn btn-outline-dark mt-3 text-light" style={{backgroundColor:"#5c2589"}}  onClick={() => setStep(2)}>Confirmar <i className='fa fa-arrow-right'></i> </button>
          <button className="btn btn-dark mt-3 float-end" data-bs-dismiss="modal">Cancelar</button>
        </div>
      );
    case 2:
      return (
        <div>
          <h5>Dados do Usuário</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nome"
            name="name"
            value={userData.name}
            onChange={handleUserDataChange}
          />
          <input
            type="tel"
            className="form-control mb-2"
            placeholder="Número de Telefone / Whatsapp"
            name="phone"
            value={userData.phone}
            onChange={handleUserDataChange}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Endereço"
            name="address"
            value={userData.address}
            onChange={handleUserDataChange}
          ></textarea>
         
          <button className="btn btn-outline-dark mt-3" onClick={() => setStep(1)}> <i className='fa fa-arrow-left'></i> Voltar</button>
          {userData && userData.name && userData.phone && userData.address && (          <button className="btn btn-outline-dark mt-3 text-light float-end" style={{backgroundColor:"#5c2589"}}  onClick={() => setStep(3)}>Próximo <i className='fa fa-arrow-right'></i> </button>
)}

        </div>
      );
    case 3:
      return (
        <div>
          <h5>Selecione o Banco</h5>
          <select
            className="form-select mb-2"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="">Selecione um banco</option>
            {bancos.map((banco, index) => (
              <option key={index} value={banco}>{banco}</option>
            ))}
          </select>
          {selectedBank && (
            <div>
              <p>IBAN: AO06000600000100037131174</p>
              <button className="btn btn-secondary btn-sm mb-2" onClick={copyIBAN}><i className='fa fa-copy'></i> {" "}Copiar IBAN </button>
            </div>
          )}
                 <button className="btn btn-outline-dark mt-3" onClick={() => setStep(2)}> <i className='fa fa-arrow-left'></i> Voltar</button>
            {selectedBank && (
                <button className="btn btn-outline-dark mt-3 text-light float-end" style={{backgroundColor:"#5c2589"}}  onClick={() => {setStep(4); Getrecptnumber()}}>Próximo <i className='fa fa-arrow-right'></i> </button>

            )}
        
        </div>
      );
    case 4:
      return (
        <div>
          <h5>Adicionar Comprovativo</h5>
     
          {loading ?(<>
          
              <div className='text-center mt-5'>
              <div className="spinner-grow" role="status" style={{fontSize:"100px",color:"#5c2589"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
              </div>

          </>):(
            <>
            <div className='text-center'>
    
    {comprovativo ? (
      <>
        <a className="btn btn-info btn-sm btn-danger" onClick={() => { setFile(""); setComprovativo(null) }}>
          <i className="fa fa-trash"></i>
        </a>
      </>
    ) : ""}
    <label htmlFor="profilpic">
      {!comprovativo ? (
        <>    
        <a className="btn   btn-outline-danger" >
          <i className="fa fa-file-pdf" style={{fontSize:"80px"}}></i>{" "}
       
        </a><p>Carregar</p></>
      ) : ""}
      <input
        type="file"
        id="profilpic"
        accept=".png, .jpeg, .jpg,.pdf,"
        onChange={(e) => {
          handleFileChange(e);
        }}
        style={{ display: "none" }}
      />
    </label>
    </div>
    <div>
      {comprovativo && (
        <div className='text-center mt-3'>
       <i className='fa fa-file-pdf' style={{fontSize:"80px"}} ></i>
       <p> {comprovativo.name} </p>
       </div>
      )}
                 <button className="btn btn-outline-dark mt-3" onClick={() => setStep(3)}> <i className='fa fa-arrow-left'></i> Voltar</button>
{comprovativo &&(  <button className="btn btn-outline-dark mt-3 text-light float-end" onClick={()=>{Envio()}} style={{backgroundColor:"#5c2589"}} >Finalizar</button>
        )}
        </div>
            </>
          )}
        </div>

      );
    case 5:
      return (
        <div className="text-center">
          <h5>Pedido Concluído</h5>
          <p>Obrigado pela sua compra!</p>
          <p className='mt-3'><i className='fa fa-circle-check' style={{fontSize:"86px", color:"#5c2589"}}></i></p>
          <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      );
    default:
      return null;
  }
};


//CARREGAR COMPROFAVTIO----------------------------

const handleUploadPDF = async () => {
  setPdfFile(null)

  const Total = calculateTotal()
  let result = await DocumentPicker.getDocumentAsync({
    type: "application/pdf", // Only allow PDF files
  });
  
  if (result.assets[0]) {
        
    const { size, name, uri } = result.assets[0]; // Access the file size, name, and uri

    const maxSize = 1 * 1024 * 1024; // 5 MB limit, adjust as necessary

    if (size > maxSize) {
      alert("O documento selecionado é muito grande. Por favor, selecione um arquivo menor que 1 MB.");
      return; // Stop further processing if file size exceeds the limit
    }

    
    setPdfFile(result.assets[0]);
    setloading(true)

    try { 
    const { uri, name, mimeType } = result.assets[0];

          // Step 3: Convert the file to a format suitable for posting (using FormData)
          const formData = new FormData();
          formData.append('file', {
              uri,
              name,  // File name
              type: mimeType || 'application/pdf',  // MIME type
          });

          // Step 4: Send the file to your backend using fetch
          const response = await fetch('https://verifica-jet.vercel.app/upload', {
              method: 'POST',
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
              body: formData,
          });

          const jsonResponse = await response.json();
          const text = jsonResponse.text
         const  comprovativoText = text.replace(/\n/g, ' ');
          const comprovativoTextt = comprovativoText.replace(/\s+/g, '');
          settext(comprovativoTextt)

          if(jsonResponse.original){
            var myVariable = jsonResponse.text
            if (myVariable.includes(Total+',00')  && myVariable.includes("AO06.0055.0000.1009.6480.1012.9") || myVariable.includes("AO06 0055 0000 1009 6480 1012 9") || myVariable.includes("AO06005500001009648010129")) {
             
              try {
                const response = await axios.post('https://glab-api.vercel.app/api/aef/comprovativos', {
                  data: comprovativoTextt
                });
                if (response.status === 200) {
                  const data = response.data;
              

                  if (!data.length > 0) {
              setpdfChecked(true)
              setloading(false)

                    return false
                  } 
                }
              } catch (error) {
                console.error('Error checking data:', error);
              }
            }
          }
          setloading(false)

            alert("COMPORVATIVO REJEITADO PELO VERIFICADOR FINPAY (seu comprovativo é falso ou duplicado)")
            setPdfFile(null)
      } catch (error) {
          console.error('Error picking or uploading document:', error);
      }

  } 
};

const Envio  = async ()=>{
  setloading(true)
  var pedido = {
    id:receiptNumber,
    nome:userData.nome,
    telefone:userData.phone,
    endereco:userData.address,
    carrinha:cart,
    estadoPagamento:false,
    estadoEnvio:false,
  }

  

  const data = new FormData();

  // Generate the file name with the current timestamp and append it to the FormData
  const fileName = Date.now() + file.name;
  data.append("file", file); // Append the file itself
  data.append("public_id", fileName); // Append the custom file name
  data.append("upload_preset", "utjuauqd"); // Append your unsigned upload preset
  
  try {
    // Send the request to Cloudinary
    const response = await fetch(`https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`, {
      method: 'POST',
      body: data, // Pass the FormData with the file and other data
    });
  
    // Wait for the response and parse it as JSON
    const res = await response.json();
  
    // Log the Cloudinary response to check the URL and other details
    console.log(res);
  
    // Assign the Cloudinary URL to `pedido.comprovativo`
    pedido.comprovativo = res.secure_url;
  } catch (error) {
    // Handle any errors that occur during the upload
    console.error('Upload failed:', error);
  }
  
  
  try {
    await axios.post('https://glab-api.vercel.app/api/aef/add', {
      data: text
    });
     await fetch(`/api/Pedidos/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });
  
 
      setloading(false)
      setStep(5); 
      generatePDF() 
    
  } catch (error) {
    console.log(error)
  }
      
      
      setloading(false)
}



//------------------------------------
  useEffect(() => {

    const storedSession = localStorage.getItem('session');
      if (storedSession) {
        setsession(JSON.parse(storedSession));
      }

    if(router.query){
      const { nome } = router.query;
      setSelectedCategory({name:nome})
      fetchpecas(nome)
    }
    const wrapper = wrapperRef.current;
    const toggleButton = toggleButtonRef.current;

    function toggleSidebar(e) {
      e.preventDefault();
      wrapper.classList.toggle('toggled');
    }

    toggleButton.addEventListener('click', toggleSidebar);

    return () => {
      toggleButton.removeEventListener('click', toggleSidebar);
    };
  }, []);


  const NovoUsuario = async ()=>{

     setloading(true)
  try {
    const res = await fetch(`/api/auth/novo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    const data = await res.json()
    if(data.success){
      localStorage.setItem('session', JSON.stringify(userData));
      setsession(userData)
      setloading(false)
    }
      setcadastrosucces(true)
      setloading(false)
    
  } catch (error) {
    console.log(error)
  }
  }


  const Login = async ()=>{
    setloading(true)
 try {
   const res = await fetch(`/api/auth/login`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(userData),
   });
 
   const data = await res.json()
   if(data.success){
    console.log(data.user)
     localStorage.setItem('session', JSON.stringify(data.user));
     setsession(data.user)
     setUserData(data.user)
     setloading(false)
      setloggedin(true)
   }


   
 } catch (error) {
   console.log(error)
 }
 }

  const categories = [
    { 
      name: "Pneus", 
      icon: "images/pneus.png", 
      subcategories: ["Pneu de Carro", "Pneu de Moto", "Pneu de Caminhão", "Pneu de Bicicleta"] 
    },

    { 
      name: "Sistema Elétrico", 
      icon: "images/sistemaeletrico.png", 
      subcategories: ["Bateria", "Alternador", "Fiação", "Velas de Ignição"] 
    },
    { 
      name: "Embriagem / Peças", 
      icon: "images/embriagem.png", 
      subcategories: ["Disco de Embreagem", "Placa de Pressão", "Rolamento de Embreagem"] 
    },
    { 
      name: "Suspensão e Braços", 
      icon: "images/suspensao.png", 
      subcategories: ["Amortecedores", "Molas", "Braços de Controle", "Bieletas"] 
    },
    { 
      name: "Correias, Correntes e Polias", 
      icon: "images/correias.png", 
      subcategories: ["Correia Dentada", "Correia Poly-V", "Corrente de Comando", "Polias"] 
    },
    { 
      name: "Filtros", 
      icon: "images/filtros.png", 
      subcategories: ["Filtro de Ar", "Filtro de Óleo", "Filtro de Combustível"] 
    },
    { 
      name: "Óleos e Fluidos", 
      icon: "images/oleomotor.png", 
      subcategories: ["Óleo de Motor", "Fluido de Freio", "Líquido de Arrefecimento"] 
    },
    { 
      name: "Sistema de Amortecimento", 
      icon: "images/amortecimento.png", 
      subcategories: ["Amortecedores", "Batente de Amortecedor", "Coifa de Amortecedor"] 
    },
    { 
      name: "Carroçaria", 
      icon: "images/carrocaria.png", 
      subcategories: ["Para-choques", "Capô", "Paralamas", "Portas"] 
    },
    { 
      name: "Sistema de Travagem", 
      icon: "images/travagem.png", 
      subcategories: ["Pastilhas de Freio", "Discos de Freio", "Pinças de Freio", "Fluido de Freio"] 
    }
  ];
  
  

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowProducts(true);
  };


  const handleSelectProduct = (product) => {
    setProductDetail(product)
  
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    console.log(cart)
  };

  const updateQuantity = (id, change) => {
    setCart(prevCart => prevCart.map(item => {
      if (item._id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total +Number( item.preco) * item.quantity, 0).toFixed(2);
  };


  const fetchpecas = async (data) => {

    try {
      const response = await axios.get(`/api/Pecas/all?page=${currentPage}&limit=${itemsPerPage}&search=${data?data:selectedCategory.name}`);
     console.log(response.data.produtos)
      setproducts(response.data.produtos)
      // setTotalPages(Math.ceil(response.data.total / itemsPerPage));
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
   
    }
  };



  const [comentarios, setComentarios] = useState([
    { nome: 'Ana Silva', texto: 'Ótimo produto! Superou minhas expectativas.', foto: 'https://randomuser.me/api/portraits/women/89.jpg',ratings:[0,0,0,],date:"23-09-2024" },
    { nome: 'João Santos', texto: 'Entrega rápida e produto de qualidade.', foto: 'https://randomuser.me/api/portraits/men/55.jpg',ratings:[0,0,0,0,0] ,date:"19-09-2024"},
    { nome: 'Maria Oliveira', texto: 'Recomendo! Custo-benefício excelente.', foto: 'https://randomuser.me/api/portraits/women/62.jpg',ratings:[0,0,0,0],date:"18-09-2024" },
  ]);

  const [novoComentario, setNovoComentario] = useState({ nome: '', texto: '', foto: null });
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
  ];

  const handleComentarioChange = (e) => {
    setNovoComentario({ ...novoComentario, [e.target.name]: e.target.value });
  };

  const handleFotoChange = (e) => {
    setNovoComentario({ ...novoComentario, foto: URL.createObjectURL(e.target.files[0]) });
  };

  const adicionarComentario = (e) => {
    e.preventDefault();
    setComentarios([...comentarios, novoComentario]);
    setNovoComentario({ nome: '', texto: '', foto: null });
  };


  const triggerMenuClick = () => {
    if (toggleButtonRef.current) {
      toggleButtonRef.current.click(); // Triggers the button click
    }
  };
  return (
    <>
     
     <Head>
        <title>Praça</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
       
        <link href="css/stylePraca.css" rel="stylesheet"  />
        <style jsx global>{`
         :root {
  --primary-color: #381552;
  --secondary-color: #5c2589;
  --dark-color: #2c1141;
  --light-color: #ffffff;
  --sidebar-width: 350px;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#wrapper {
  min-height: 100vh;
  position: relative;
}

/* Sidebar drawer styles */
#sidebar-wrapper {
  width: var(--sidebar-width);
  height: 100%;
  position: fixed;
  top: 0;
  left: calc(-1 * var(--sidebar-width)); /* Start from left side */
  background-color: var(--primary-color);
  color: var(--light-color);
  transition: left 0.3s ease;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* Main content wrapper */
#page-content-wrapper {
  width: 100%;
  min-height: 100vh;
  transition: transform 0.3s ease;
}

/* Overlay for when sidebar is open */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1040;
}

/* When sidebar is toggled */
#wrapper.toggled #sidebar-wrapper {
  left: 0;
}

#wrapper.toggled .sidebar-overlay {
  opacity: 1;
  visibility: visible;
}

/* Cart section heading */
.cart-header {
  padding: 20px;
  background-color: var(--primary-color);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* User profile section */
.user-profile {
  padding: 20px;
  background-color: var(--primary-color);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.user-profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* Cart items container */
.list-group-flush {
  padding: 15px;
}

/* Cart item styles */
.cart-item {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

/* Quantity controls */
.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-control button {
  background-color: var(--secondary-color);
  border: none;
  color: var(--light-color);
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
}

.quantity-control span {
  padding: 0 10px;
}

/* Checkout button */
.finalizar-compra {
  background-color: var(--secondary-color);
  color: var(--light-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  width: 100%;
}

.finalizar-compra:hover {
  background-color: #8347b4;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  #sidebar-wrapper {
    width: 85%;
    left: -85%;
  }
}
          
           .btn-outline-custom {
  color: #5c2589;
  border-color: #5c2589;
  background-color: transparent;
}

.btn-outline-custom:hover {
  background-color: #5c2589;
  color: white;
}


          .navbar {
            background-color: var(--dark-color);
            box-shadow: 0 2px 4px rgba(0,0,0,.1);
          }

          .navbar .navbar-brand,
          .navbar .nav-link {
            color: var(--light-color);
          }

          .btn-outline-light:hover {
            background-color: var(--secondary-color);
          }

          #sidebar-wrapper::-webkit-scrollbar {
            width: 8px;
          }

          #sidebar-wrapper::-webkit-scrollbar-thumb {
            background-color: var(--secondary-color);
            border-radius: 4px;
          }

          .cart-item {
            background-color: rgba(255,255,255,0.1);
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 10px;
          }

          .cart-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
          }

          .quantity-control {
            display: flex;
            align-items: center;
          }

          .quantity-control button {
            background-color: var(--secondary-color);
            border: none;
            color: var(--light-color);
            padding: 5px 10px;
            font-size: 14px;
          }

          .quantity-control span {
            padding: 0 10px;
          }

          .user-profile {
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }

          .user-profile img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .finalizar-compra {
            background-color: var(--secondary-color);
            color: var(--light-color);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .finalizar-compra:hover {
            background-color: #8347b4;
          }

          @media (min-width: 769px) {
            #sidebar-wrapper {
              left: 0;
            }
            #page-content-wrapper {
              margin-left: 350px;
            }
            #wrapper.toggled #sidebar-wrapper {
              left: -350px;
            }
            #wrapper.toggled #page-content-wrapper {
              margin-left: 0;
            }
          }

          @media screen and (max-height: 450px) {
            #sidebar-wrapper {
              overflow-y: scroll;
            }
          }
      .carousel-container {
          position: relative;
        }
        .thumbnail {
          width: 80px;
          height: 60px;
          object-fit: cover;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .thumbnail:hover, .thumbnail.active {
          opacity: 1;
        }
        .comentario {
          background-color: #f8f9fa;
          border-left: 4px solid #381552;
        }



        
          
        `}</style>
        
      </Head>
      <div className="d-flex" id="wrapper" ref={wrapperRef}>
        <div className="border-end" id="sidebar-wrapper">
        <div className="user-profile d-flex align-items-center">
        <img src="https://picsum.photos/50/50" alt="User Profile" className="me-3" />
        <div>
          
          {session ? (<> <h6 className="mb-0">Olá, {session.name}</h6></>):<>    <small>  
            <a href="#" className="text-light"  onClick={()=>{
          triggerMenuClick();

          // Wait for 1500 milliseconds (1.5 seconds) before opening the modal
          setTimeout(() => {
          // Manually trigger the Bootstrap modal
          const modal = new bootstrap.Modal(document.getElementById('iniciarsessao'));
          modal.show();
          }, 300);
          }}>Iniciar Sessão <i className="fas fa-cog"></i></a></small></>}
         
          {/* <small>  <a href="#" className="text-light">Configurações <i className="fas fa-cog"></i></a></small> */}
      

        </div>
      </div>
          <div className="list-group list-group-flush p-3">
            <h4 className="mb-3">Seu Carrinho</h4>
            {cart.map(item => (
              <div className="cart-item" key={item._id}>
                <div className="d-flex align-items-center">
                  <img src={item.img[0]} style={{height:"40px"}} alt={item.nome} className="me-3" />
                  <div>
                    <div className="row">
                      <div className="col-6">
                        <h6 className="mb-0">{item.nome.slice(0,20)}</h6>
                        <p className="mb-0">{item.preco} kz</p>
                      </div>
                      <div className="col-6">
                        <div className="quantity-control mt-2">
                          <button className="btn btn-sm" onClick={() => updateQuantity(item._id, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button className="btn btn-sm" onClick={() => updateQuantity(item._id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3">
            
          { cart.length > 0 && (<> <h5>Total: {calculateTotal()} kz</h5> <button
  className="btn finalizar-compra w-100 mt-3"
  onClick={() => {
    // Trigger the 'menu-toggle' click first
    triggerMenuClick();

    // Proceed with your logic
    if (setupdone) {
      setStep(1);
      setSetupdone(false);
    }

    // Wait for 1500 milliseconds (1.5 seconds) before opening the modal
    setTimeout(() => {
      // Manually trigger the Bootstrap modal
      const modal = new bootstrap.Modal(document.getElementById('pagamentos'));
      modal.show();
    }, 300);
  }}
>
  Finalizar Compra
</button>


</>)}
          </div>
        </div>

        <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <button className="btn btn-outline-light" id="menu-toggle" ref={toggleButtonRef}>
                <i className="fa fa-shopping-cart"></i>
                <span className="badge" style={{ backgroundColor: '#5c2589' }}>{cart ?(cart.length):""}</span>
              </button>
        <Link href="/">
        <a className="navbar-brand ms-2">      
          <img alt="Ecom" src="images/logobranco.png" style={{height: "50px"}} />
          </a> 
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"white"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search"  onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress} placeholder="Buscar produtos" aria-label="Search" />
               <i className="fa fa-search fa-x3 text-white mt-2"></i> 
            </form>
          </div>
        </div>
      </nav>

          <div className="container mt-4">
            <div className="row g-4">
              
            {!products && categories && categories.map((category)=>(
              <div class="col col-md-3 col-sm-6 col-xs-12">
                <div class="card h-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{handleCategoryClick(category)  }}>
                    <div class="card-body  text-center">
                        <div class="card-icon">  <img src={category.icon} className="img-fluid" style={{maxHeight:"80px"}} /> </div>
                        <h5 class="card-title">{category.name}</h5>
                    </div>
                </div>
            </div>
            ))}

              {!productDetail && products && (
                <>
                  <div className='col-md-12' style={{marginTop:"-10px"}}>
                    <button className='btn btn-dark' onClick={() => { setproducts(null);  }}> <i className='fa fa-arrow-left'></i> Voltar   </button>
                    <div className='text-center'>
                    <h3>{selectedCategory.name}</h3>
                    </div>
                  </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4" >
                    
                  {products.map((p) => (
                    <div className="col" key={p.id}>
                      <div className="card h-100">
                      <div className="card-header d-flex justify-content-end" style={{backgroundColor: "transparent", border: "none"}}>
  <button className="btn btn-sm btn-outline-light" style={{ color: '#5c2589' }}>
    <i className="fas fa-heart"></i>
  </button>
</div>
                        <div className="card-body">
                          <div className="card-icon  text-center">
                            <img src={p.img[0]}  style={{height:"100px", width:'100px', cursor:"pointer"}} onClick={()=>{
                            handleSelectProduct(p)
                          }}  alt={p.nome} />
                          </div>
                          <h5 style={{cursor:"pointer"}} className="card-title" onClick={()=>{
                            handleSelectProduct(p)
                          }}>{p.nome}</h5>
                          <p className="card-text">{Number(p.preco)} kz</p>
                          <button className="btn btn-outline-dark" onClick={() => addToCart(p)} style={{marginRight:"5px"}}> <i className='fa fa-shopping-cart'></i>
                          </button>
                          <button  className="btn btn-outline-dark" onClick={()=>{
                            handleSelectProduct(p)
                          }} > <i className='fa fa-eye'></i>
                          </button>
                          {p.fornecedor_info && ( <div className='mt-2 text-center'> <img className="img-fluid" style={{height:"20px"}} src={p.fornecedor_info.logo} /> </div>
                       )}
                         
                        </div>
                      </div>
                    </div>
                  ))}</div>
                </>
              )}
              

              {!productDetail && products && products.length < 1 && (
                <div className='text-center mt-5'> 
                <p>SEM RESULTADOS</p>
                </div>
              )}




{productDetail && (
                <>
                 <SupplierNavbar  supplier={productDetail.fornecedor_info.logo ? productDetail.fornecedor_info : null }  />
                    <main className="container py-4">
      <div className="mb-4">
        <button 
          className="btn btn-outline-dark" 
          onClick={() => setProductDetail(false)}
        >
          <i className="fa fa-arrow-left me-2"></i>
          Voltar
        </button>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <img 
              src={productDetail.img[imagemAtual]} 
              alt={productDetail.nome}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
            <div className="d-flex justify-content-center gap-2">
              {productDetail.img.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${productDetail.nome} - imagem ${index + 1}`}
                  className={`cursor-pointer rounded ${index === imagemAtual ? 'border border-primary' : ''}`}
                  style={{ 
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                  onClick={() => setImagemAtual(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="h2 mb-3">{productDetail.nome}</h1>
          
          <div className="mb-3">
            <span className="badge bg-secondary me-2">{productDetail.categoria}</span>
            <span className="badge" style={{ backgroundColor: '#5c2589' }}>{productDetail.marca}</span>
          </div>

          <div className="mb-4">
            <h3 className="h4 mb-0">{formatPrice(productDetail.preco)}</h3>
            {productDetail.preco_promocional && (
              <small className="text-muted text-decoration-line-through">
                {formatPrice(productDetail.preco_promocional)}
              </small>
            )}
          </div>

          <div className="mb-4">
            <h4 className="h6 mb-2">Especificações:</h4>
            <ul className="list-unstyled">
            <li><strong>Marca:</strong> {productDetail.marca}</li>

              <li><strong>Ano:</strong> {productDetail.ano}</li>
              <li><strong>Chassi:</strong> {productDetail.chassi}</li>
              <li><strong>Estoque:</strong> {productDetail.estoque} unidades</li>
              <li><strong>Peso:</strong> {productDetail.peso} {productDetail.medida}</li>
              <li><strong>Dimensão:</strong> {productDetail.dimensao}</li>
              <li><strong>Material:</strong> {productDetail.material}</li>
              <li><strong>Garantia:</strong> {productDetail.garantia}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="h6 mb-2">Descrição:</h4>
            <p>{productDetail.descricao}</p>
          </div>

          <div className="d-flex gap-2">
            <button 
              onClick={() => addToCart(productDetail)}
              className="btn btn-dark text-light"
              style={{backgroundColor:"#5c2589"}}
            >
              Adicionar ao Carrinho
            </button>
            <button className="btn btn-outline-dark ">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Informações Adicionais</h4>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="h6">Instruções de Instalação</h5>
                  <p>{productDetail.instrucao_instalacao}</p>
                </div>
                <div className="col-md-6">
                  <h5 className="h6">Compatibilidade</h5>
                  <p>{productDetail.compatibilidade}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="row">
          <div className="col-12">
            <h3 className="text-2xl font-semibold mb-4">Avaliações</h3>
            <div className="comentarios mb-4">
              {comentarios.map((comentario, index) => (
                <div key={index} className="comentario mb-3 p-3 border rounded">
                  <div className="d-flex align-items-center mb-2">
                    <img src={comentario.foto} alt={comentario.nome} className="rounded-circle me-3" width="60" height="60" />
                    <div>
                      <strong className="d-block">{comentario.nome}</strong>
                      <small className="text-muted">Avaliação verificada</small>
                    </div>
                  </div>
                  <p className="mt-2">{comentario.texto}</p>
                    {comentario.ratings.map((rating, i) => (
                               <i className='fa fa-star text-warning'></i>
                              ))}

                              <p className='float-end pull-right float-right'>
                            {comentario.date}
                              </p>
                </div>
              ))}
              <button className="btn btn-outline-dark">Ver Mais</button>
            </div>

            <h4 className="text-lg font-semibold mb-3">Adicionar Comentário</h4>
            <form onSubmit={adicionarComentario} className="bg-light p-4 rounded">
              <div className="mb-3">
                <input
                  type="text"
                  name="nome"
                  value={novoComentario.nome}
                  onChange={handleComentarioChange}
                  placeholder="Seu nome"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="texto"
                  value={novoComentario.texto}
                  onChange={handleComentarioChange}
                  placeholder="Seu comentário"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  onChange={handleFotoChange}
                  accept="image/*"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-outline-dark">Enviar Comentário</button>
            </form>
          </div>
        </div>
    </main>
                </>
              )}
              

            </div>
          </div>
        </div>

        {selectedCategory && selectedCategory.subcategories && (    <div class="modal" tabindex="-1" id="staticBackdrop">
    <div class="modal-dialog modal-dialog-centered modal-lg">

    <div class="modal-content">
      <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{selectedCategory && selectedCategory.name}</h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {selectedCategory && selectedCategory.subcategories.map((subcategory, index) => (
  <button
    key={index}
    style={{marginRight:"3px"}}
    className='btn btn-light ml-2 mb-2'
    data-bs-dismiss="modal"
    onClick={() => {handleSubcategoryClick(subcategory); fetchpecas();}}
  >
    {subcategory}
  </button>
))}

      </div>
    </div>
  </div>
</div>)}





      </div>
      

      <div class="modal" tabindex="-1" id="iniciarsessao"  >
    <div class="modal-dialog  modal-lg">

    <div class="modal-content">
      <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="row w-100">
        
       

        {lgoincadastrar ? (
          
          loading ? (<div className='text-center mt-5'>
            <div className="spinner-grow" role="status" style={{fontSize:"100px",color:"#5c2589"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
            </div>):(
            
            loggedin ? (<> <div className="text-center">
              <h5>Sessão Iniciado com sucesso</h5>
              <p>Seja bem-vindo de Volta {userData && userData.name}! </p>

              <p className='mt-3'><i className='fa fa-circle-check' style={{fontSize:"86px", color:"#5c2589"}}></i></p>
              <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div></>) :(<>
        
        <div className="row w-100">
        <div className='col-md-2'> </div>
     
       <div className="col-md-8 col-sm-12 d-flex align-items-center justify-content-center">
         <div className="w-100 p-5">
         <div className='text-center'>
                 <img className='img-fluid' src="/images/logovector.png"  />
             </div>
           <h2 className="text-center mb-4" style={{ color: '#381552' }}>Iniciar Sessão</h2>
           <form>
             <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input type="email" onChange={handleUserDataChange}  name="email" className="form-control" id="email" required />
             </div>
             <div className="mb-3">
               <label htmlFor="senha" className="form-label">Senha</label>
               <input type="password" name="password" onChange={handleUserDataChange}  className="form-control" id="senha" required />
             </div>
             <a className="btn btn-primary w-100" onClick={()=>{Login()}} style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
               Entrar
             </a>
           </form>
           <p className="text-center mt-3">
             Não tem conta?<a href="#"  style={{ color: '#381552' }} onClick={()=>{
             setlgoincadastrar(false)
              } }>Cadastre-se</a>
           </p>
         </div>
       </div>
       <div className='col-md-2'> </div>

     </div>
     </>)
            
            
            
            )
          
          ):(
            loading ? (<>   <div className='text-center mt-5'>
              <div className="spinner-grow" role="status" style={{fontSize:"100px",color:"#5c2589"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
              </div></>):(
             cadastrosucces ? (<> <div className="text-center">
              <h5>Cadastrado com sucesso</h5>
              <p>Seja bem-vindo {userData && userData.name}! </p>

              <p className='mt-3'><i className='fa fa-circle-check' style={{fontSize:"86px", color:"#5c2589"}}></i></p>
              <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div></>):(
              <div className="row w-100">
              <div className='col-md-2'> </div>
             <div className="col-md-8 col-sm-12 d-flex align-items-center justify-content-center">
               <div className="w-100 p-5">
               <div className='text-center'>
                       <img className='img-fluid' src="/images/logovector.png"  />
                   </div>
                 <h2 className="text-center mb-4" style={{ color: '#381552' }}>Nova Conta</h2>
                 <form>
                 <div className="mb-3">
                     <label htmlFor="nome" className="form-label">Nome</label>
                     <input type="text" name="name" onChange={handleUserDataChange}  className="form-control" id="nome" required />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="email" className="form-label">Email</label>
                     <input type="email" name="email" onChange={handleUserDataChange} className="form-control" id="email" required />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="password" className="form-label">Senha</label>
                     <input type="password" name="password" onChange={handleUserDataChange} className="form-control" id="password" required />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="tel" className="form-label">Telefone</label>
                     <input type="text" name='phone' onChange={handleUserDataChange}  className="form-control" id="tel" required />
                   </div>
                   
                   <div className="mb-3">
                     <label htmlFor="addresss" className="form-label">Endereço</label>
                     <textarea type="text" name='address' onChange={handleUserDataChange}    className="form-control" id="addresss" required ></textarea>
                   </div>
                
                   <a className="btn btn-primary w-100" onClick={()=>{
                    NovoUsuario()
                   }} style={{ backgroundColor: '#381552', borderColor: '#381552' }}>
                     Criar Conta
                   </a>
                 </form>
                 <p className="text-center mt-3">
                   Não tem conta?<a href="#"  style={{ color: '#381552' }} onClick={()=>{
                   setlgoincadastrar(true)
                    } }>Iniciar Sessão</a>
                 </p>
               </div>
             </div>
             <div className='col-md-2'> </div>
  
           </div>
             )
            )
         )}
      </div>

      </div>
    </div>
  </div>
</div>


<div class="modal" tabindex="-1" id="pagamentos"  style={{zIndex:'9999'}}>
    <div class="modal-dialog  modal-lg">

    <div class="modal-content">
      <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">FECHAR COMPRA</h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {renderStep()}
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Praca;