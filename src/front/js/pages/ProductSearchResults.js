import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductos } from "../services/api"; // Debes tener esta función en tu archivo api.js

const ProductSearchResults = () => {
  const [productos, setProductos] = useState([]);
  const location = useLocation();

  // Obtiene la query de la URL
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos(query); // Llama a la función que realiza el fetch
        setProductos(response.productos);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (query) {
      fetchProductos();
    }
  }, [query]);

  return (
    <div className="container">
      <h1>Resultados de búsqueda</h1>
      {productos.length > 0 ? (
        <ul className="list-group">
          {productos.map((producto) => (
            <li key={producto.id} className="list-group-item">
              {producto.nombre} - {producto.categoria} - ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export default ProductSearchResults;
