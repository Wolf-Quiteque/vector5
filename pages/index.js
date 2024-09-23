import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isButtonAnimating, setIsButtonAnimating] = useState(true);

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
          <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>

        <Link href="/praca">
          <a className={`btn ${isButtonAnimating ? 'btn-animate' : 'btn-white'} mb-4 px-4 py-2`}>
            <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
          </a>
        </Link>
      </div>
    </main>
  );
};

export default HomeScreen;