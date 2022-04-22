import React from "react";
import PropTypes from "prop-types";

const Footer = props => (
      <footer>
        <div className="footer-left">
          <img src="/images/logo.svg" alt="logo Tienda Mueble"/>
          <h2 className="titulo-blanco titulo-foot">{props.siteName}</h2>
        </div>
        <p>Imagenes pertenecientes a <a href="https://www.freepik.es/">https://www.freepik.es/</a></p>
      
      </footer>
)

Footer.propTypes = {
  siteName: PropTypes.string.isRequired
};

export default Footer;