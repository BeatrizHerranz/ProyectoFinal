// src/front/js/components/CategoryFilter.js

import React from 'react';

const CategoryFilter = ({ subcategorias }) => {
    return (
        <div className="category-filter">
            <h3>Filtrar por subcategorías:</h3>
            <ul>
                {subcategorias.length > 0 ? (
                    subcategorias.map((subcategoria, index) => (
                        <li key={index}>{subcategoria}</li>
                    ))
                ) : (
                    <p>No hay subcategorías disponibles</p>
                )}
            </ul>
        </div>
    );
};

export default CategoryFilter;
