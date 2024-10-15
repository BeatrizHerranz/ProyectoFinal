// src/front/js/services/api.js

const API_URL = process.env.BACKEND_URL || "http://localhost:3001";

export const getCategorias = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`); // Ajusta la URL a tu endpoint real
        if (!response.ok) throw new Error("Error fetching categories");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return { categorias: [], subcategorias: [] }; // Retorna un objeto vacío en caso de error
    }
};
