const API_URL = process.env.BACKEND_URL || "http://localhost:3001";

// Obtener categorías
export const getCategorias = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        if (!response.ok) throw new Error("Error fetching categories");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return { categorias: [], subcategorias: [] };
    }
};

// Obtener un producto por su ID
export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) throw new Error("Error fetching product");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

// Obtener productos destacados y las imágenes del carrusel
export const getProductosDestacados = async () => {
    try {
        const response = await fetch(`${API_URL}/productos_destacados`);
        if (!response.ok) throw new Error("Error fetching featured products");
        const data = await response.json();
        return data; // Devuelve productos destacados y las imágenes del carrusel
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return { productos: [], imagenes_carrusel: [] };
    }
};

// Agregar producto al carrito
export const addToCart = async (productId, quantity = 1) => {
    try {
        const response = await fetch(`${API_URL}/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId, quantity })
        });
        if (!response.ok) throw new Error("Error adding product to cart");
        const data = await response.json();
        return data; // Retorna la respuesta del servidor
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return null;
    }
};
