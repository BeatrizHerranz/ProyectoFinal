// src/front/js/components/Carousel.js

import React from 'react';
import '../styles/carousel.css';

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
