import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, addToCart } from "../services/api"; // Asegúrate de importar addToCart

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(id);
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        const result = await addToCart(id);
        if (result) {
            alert("Producto agregado al carrito!");
        } else {
            alert("Error al agregar el producto al carrito.");
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} />
            <p>Precio: {product.precio}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ProductDetailPage;
