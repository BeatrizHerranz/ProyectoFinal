import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SearchBar from "./SearchBar"; // Importa el nuevo componente

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo de la tienda */}
        <Link className="navbar-brand" to="/">CreArte</Link>

        {/* Botón de menú hamburguesa para móviles */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorías</Link> {/* Enlace a Categorías */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Mi Cuenta</Link> {/* Enlace a Perfil */}
            </li>
          </ul>

          {/* Barra de búsqueda */}
          <SearchBar />  {/* Inserta la barra de búsqueda aquí */}

          {/* Carrito con cantidad de artículos */}
          <Link to="/cart" className="btn btn-outline-dark">
            <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
            <span className="badge bg-secondary ms-1">{store.cartItems ? store.cartItems.length : 0}</span> {/* Cantidad de artículos */}
          </Link>

          {/* Botones de registro e inicio de sesión */}
          <Link to="/login" className="btn btn-outline-primary ms-3">Iniciar Sesión</Link>
          <Link to="/register" className="btn btn-outline-secondary ms-2">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
};
