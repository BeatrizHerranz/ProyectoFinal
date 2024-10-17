// src/front/js/pages/WelcomePage.js

import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import FeaturedProducts from '../components/FeaturedProducts';
import { getProductosDestacados } from '../services/api';
import '../styles/welcomePage.css';

const WelcomePage = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductosDestacados();
      if (data) {
        setProductosDestacados(data.productos);
        setImagenesCarrusel(data.imagenes_carrusel);
      }
    };
    fetchProductos();
  }, []);

  const addToCart = (product) => {
    console.log('Producto agregado al carrito:', product);
    // Aquí se puede implementar la lógica para agregar al carrito
  };

  return (
    <div className="welcome-page">
      <h1>Bienvenido a CreArte</h1>
      <Carousel images={imagenesCarrusel} />
      <h2>Productos Destacados</h2>
      <FeaturedProducts products={productosDestacados} addToCart={addToCart} />
    </div>
  );
};

export default WelcomePage;
