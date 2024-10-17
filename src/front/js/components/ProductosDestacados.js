import React, { useState, useEffect } from "react";
import "../../styles/productosDestacados.css";  // Importamos los estilos

const ProductosDestacados = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/api/productos_destacados")
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => console.error("Error al obtener los productos:", error));
    }, []);

    return (
        <div className="productos-destacados">
            <h2>Productos Destacados</h2>
            <div className="carousel">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-item">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <button>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductosDestacados;