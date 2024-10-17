// src/front/js/components/ProductFeatures.js

import React from 'react';

const ProductFeatures = ({ features }) => {
    return (
        <div className="product-features">
            <h3>Características</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFeatures;
