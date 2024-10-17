// src/front/js/components/ProductReviews.js

import React from 'react';

const ProductReviews = ({ reviews }) => {
    return (
        <div className="product-reviews">
            <h3>Reseñas de Clientes</h3>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="review">
                        <p>{review.text}</p>
                        <p>Valoración: {review.rating} ★</p>
                    </div>
                ))
            ) : (
                <p>No hay reseñas disponibles.</p>
            )}
        </div>
    );
};

export default ProductReviews;
