// src/front/js/pages/Categories.js

import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/api';  // Llamada a la API
import CategoryList from '../components/CategoryList';  // Lista de categorías
import CategoryFilter from '../components/CategoryFilter';  // Filtro de subcategorías
import '../../styles/categories.css';  // Estilos

export const Categories = () => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Llamada a la API para obtener categorías
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const data = await getCategorias();
                if (data) {
                    setCategorias(data.categorias);  // Asignamos categorías desde la API
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategorias(); // Ejecuta la llamada a la API cuando el componente se monta
    }, []);

    const handleCategorySelect = (nombreCategoria) => {
        const categoria = categorias.find(cat => cat.nombre === nombreCategoria);
        setSelectedCategory(categoria);  // Establecemos la categoría seleccionada
    };

    return (
        <div className="categories-container">
            <h2>Categorías</h2>
            <CategoryList categorias={categorias} onCategorySelect={handleCategorySelect} />

            {selectedCategory && (
                <>
                    <h3>Subcategorías</h3>
                    <CategoryFilter subcategorias={selectedCategory.subcategorias} />
                </>
            )}
        </div>
    );
};
