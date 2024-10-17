// src/front/js/components/CategoryList.js

import React from 'react';

const CategoryList = ({ categorias, onCategorySelect }) => {
    return (
        <div className="category-list">
            {categorias.length > 0 ? (
                categorias.map((categoria, index) => (
                    <div key={index} className="category-item" onClick={() => onCategorySelect(categoria.nombre)}>
                        <h2>{categoria.nombre}</h2>
                    </div>
                ))
            ) : (
                <p>No hay categorías disponibles</p>
            )}
        </div>
    );
};

export default CategoryList;