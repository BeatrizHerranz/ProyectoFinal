// src/front/js/components/ProductDetail.js

import React from 'react';
import ProductFeatures from './ProductFeatures';
import ProductReviews from './ProductReviews';
import RelatedProducts from './RelatedProducts';
import '../../styles/productDetail.css';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className="product-info">
                <h2>{product.nombre}</h2>
                <p>Precio: ${product.precio.toFixed(2)}</p>
                <p>{product.descripcion}</p>
                <div className="purchase-options">
                    <label>Cantidad:</label>
                    <input type="number" defaultValue={1} min={1} />
                    <button className="add-to-cart">Agregar al Carrito</button>
                    <button className="buy-now">Comprar Ahora</button>
                </div>
                <ProductFeatures features={product.caracteristicas} />
                <ProductReviews reviews={product.reseñas} />
            </div>
            <RelatedProducts relatedProducts={product.relacionados} />
        </div>
    );
};

export default ProductDetail;
