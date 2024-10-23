import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js'; 
import { useRouter } from 'next/router';

const HomeScreen = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isButtonAnimating, setIsButtonAnimating] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  const slides = [
    { id: 1, url: 'https://picsum.photos/seed/slide1/1920/1080', alt: 'Slide 1' },
    { id: 2, url: 'https://picsum.photos/seed/slide2/1920/1080', alt: 'Slide 2' },
    { id: 3, url: 'https://picsum.photos/seed/slide3/1920/1080', alt: 'Slide 3' },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    const animationTimer = setTimeout(() => {
      setIsButtonAnimating(false);
    }, 3000);

    return () => {
      clearInterval(slideTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Redirect to /praca with the query parameter
      router.push({
        pathname: '/praca',
        query: { nome: searchTerm }
      });
    }
  };





    // Fetch parts from API
    const fetchPecas = async () => {
      const res = await fetch(`/api/Pecas/all?search=${searchTerm}`);
      const { produtos } = await res.json();
  
      // Initialize Fuse for fuzzy search
      const options = {
        keys: ['nome', 'marca', 'categoria', 'subcategoria'], // Fields to search in
        includeScore: true,
      };
      const fuseInstance = new Fuse(produtos, options);
      setFuse(fuseInstance);
    };
  
    // Fetch data when the component mounts or when the search term changes
    useEffect(() => {
      if (searchTerm) {
        fetchPecas();
      }
    }, [searchTerm]);
  
    // Handle search input change
    const handleSearchChange = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
  
      if (fuse && term) {
        const results = fuse.search(term);
        setSearchResults(results.map((result) => result.item)); // Get only items
      } else {
        setSearchResults([]);
      }
    };



   


    

  return (
    <main className="main-container">
      <div className="image-slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          ></div>
        ))}
        <div className="white-overlay"></div>
      </div>

      <div className="content-container">
        <img src="/images/logobranco.png" alt="Logo" className="logo" />
        
        <div className="input-group mb-4">
          <button className="btn btn-dark" type="button" id="button-addon1" >
            <i className="bi bi-camera"></i>
          </button>
          <span className="input-group-text" id="searchIcon" style={{ cursor: 'pointer' }}>
            <i className="bi bi-search"></i>
          </span>
          <input type="text" className="form-control"  onKeyPress={handleKeyPress}   value={searchTerm}
        onChange={handleSearchChange} placeholder="" aria-label="Example text with button addon" 
        aria-describedby="button-addon1" />
        

      
        </div> {searchResults.length > 0 && (
        <div class="list-group" style={{width:"100%"}}>
 {searchResults.map((result, index) => (
   <Link key={index} href={{ pathname: '/praca', query: { nome: result.nome } }}>
   {/* Directly render the <a> tag as the single child */}
   <a className="list-group-item list-group-item-action">
     {result.nome} - <strong>{result.marca}</strong>
   </a>
 </Link>
 ))}
</div>)}

{searchResults.length == 0 && (
        <Link href="/praca">
          <a className={`btn ${isButtonAnimating ? 'btn-animate' : 'btn-white'} mb-4 px-4 py-2`}>
            <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
          </a>
        </Link>)}

        
      </div>
    </main>
  );
};

export default HomeScreen;