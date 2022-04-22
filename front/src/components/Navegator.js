import React from "react";
import PropTypes from "prop-types";
class Navegator extends React.Component {

  static propTypes = {
    order:PropTypes.number,
    viewAddProduct: PropTypes.string
  }
  render() {
   
    return (
      <nav>
          <a href="/" id="logo"><img src="images/logo.svg" alt="logo Tienda Mueble"/></a>
          <ul className="menu">
              <li className="item-menu"><a className="item-link" href="#prod">Productos</a></li>
              <li className="item-menu"><a className="item-link" href="/addProduct">Agregar Producto</a></li>
              <li className="item-menu item-compra" id={this.props.viewAddProduct} ><img src="images/chango.png" alt="carrito de compras"/><span className="circle">{this.props.order}</span></li>
          </ul>
      </nav>
    )
  }
}

export default Navegator;