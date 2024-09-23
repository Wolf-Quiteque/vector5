import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, url: 'https://picsum.photos/seed/slide1/1200/400', alt: 'Slide 1' },
    { id: 2, url: 'https://picsum.photos/seed/slide2/1200/400', alt: 'Slide 2' },
    { id: 3, url: 'https://picsum.photos/seed/slide3/1200/400', alt: 'Slide 3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="main" style={{marginTop:"40px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button" id="button-addon1">
                <i className="bi bi-camera"></i>
              </button>
              <span className="input-group-text" id="searchIcon" style={{cursor:"pointer"}}>
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="image-slider-container mb-4">
        <div className="image-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
        </div>
        <div className="slider-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Link href="/praca">
              <a className="text-dark">
                <i className="bi bi-cart" style={{ fontSize: "50px" }}></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;