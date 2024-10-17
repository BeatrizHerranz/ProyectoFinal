// src/front/js/components/FeaturedProducts.js

import React from 'react';
import ProductCard from './ProductCard';
import '../styles/featuredProducts.css';

const FeaturedProducts = ({ products, addToCart }) => {
  return (
    <div className="featured-products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
