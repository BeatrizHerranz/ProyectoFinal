// src/front/js/components/RelatedProducts.js

import React from 'react';

const RelatedProducts = ({ relatedProducts }) => {
    return (
        <div className="related-products">
            <h3>Productos Relacionados</h3>
            <ul>
                {relatedProducts.map((product, index) => (
                    <li key={index}>
                        <img src={product.imagen} alt={product.nombre} />
                        <p>{product.nombre}</p>
                        <p>Precio: ${product.precio.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedProducts;
