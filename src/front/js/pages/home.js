import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/logo-crearte.webp";
import "../../styles/home.css";
import { getProductosDestacados, addToCart } from "../services/api";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductosDestacados();
                setProductosDestacados(data.productos);
                setImagenesCarrusel(data.imagenes_carrusel);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddToCart = async (productId) => {
        await addToCart(productId);
        alert("Producto agregado al carrito");
    };

    return (
        <div className="text-center mt-5">
            <h1>Bienvenidos a CreArte</h1>
            <img src={rigoImageUrl} alt="Rigo baby" />
            <div className="alert alert-info">
                {store.message ? store.message : "Loading message from the backend (make sure your python backend is running)..."}
            </div>
            
            {/* Carrusel de imágenes */}
            <div className="carousel">
                {imagenesCarrusel.length > 0 ? (
                    imagenesCarrusel.map((imagen, index) => (
                        <div key={index} className="carousel-image">
                            <img src={imagen} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>No hay imágenes para mostrar en el carrusel.</p>
                )}
            </div>

            {/* Lista de productos destacados */}
            <h2>Productos Destacados</h2>
            <div className="featured-products">
                {productosDestacados.length > 0 ? (
                    productosDestacados.map((producto) => (
                        <div key={producto.id} className="product-card">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                            <button onClick={() => handleAddToCart(producto.id)}>
                                Agregar al carrito
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos destacados para mostrar.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
