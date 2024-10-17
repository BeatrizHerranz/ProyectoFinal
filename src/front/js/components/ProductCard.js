// src/front/js/components/ProductCard.js

import React from 'react';
import '../styles/featuredProducts.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-image" />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
