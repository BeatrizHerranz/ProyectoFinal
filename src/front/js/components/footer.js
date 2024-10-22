import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Tu Empresa</h5>
            <p>
              Aquí puedes incluir una breve descripción de tu empresa o sitio web. Ofrecemos los mejores productos y servicios para ti.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Síguenos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark"><i className="fab fa-facebook" /> Facebook</a></li>
              <li><a href="#" className="text-dark"><i className="fab fa-instagram" /> Instagram</a></li>
              <li><a href="#" className="text-dark"><i className="fab fa-twitter" /> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-light">
        <p>© 2024 TuTienda. Todos los derechos reservados.</p>
        <p><Link to="/politica-de-cookies">Política de cookies</Link></p>
      </div>
    </footer>
  );
};

export default Footer;