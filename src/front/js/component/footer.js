import React from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3">
    <div className="footer-container">
      <div className="footer-section">
        <h4>Compra</h4>
        <ul>
          <li><a href="#">Regalos</a></li>
          <li><a href="#">Tarjetas de regalo</a></li>
          <li><a href="#">Tendencias</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Vende</h4>
        <ul>
          <li><a href="#">Vender en la tienda</a></li>
          <li><a href="#">Hazte vendedor</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Acerca de</h4>
        <ul>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Empleo</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Ayuda</h4>
        <ul>
          <li><a href="#">Centro de ayuda</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Términos y condiciones</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <h4>Síguenos</h4>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom text-center">
      <p>© 2024 TuTienda. Todos los derechos reservados.</p>
      <p><a href="#">Política de cookies</a></p>
    </div>
  </footer>
);
