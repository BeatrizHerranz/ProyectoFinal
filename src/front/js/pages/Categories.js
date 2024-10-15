// src/front/js/pages/Categories.js

import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/api';

export const Categories = () => {
    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const data = await getCategorias(); // Llamada a la función de la API
                if (data) {
                    setCategorias(data.categorias); // Asumiendo que 'categorias' es la respuesta
                    setSubcategorias(data.subcategorias); // Asumiendo que 'subcategorias' es parte de la respuesta
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategorias(); // Ejecuta la llamada a la API cuando el componente se monta
    }, []);

    return (
        <div>
            <h2>Categorías</h2>
            <ul>
                {categorias.length > 0 ? (
                    categorias.map((categoria, index) => (
                        <li key={index}>{categoria}</li>
                    ))
                ) : (
                    <p>No hay categorías disponibles</p>
                )}
            </ul>
            <h3>Subcategorías</h3>
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
