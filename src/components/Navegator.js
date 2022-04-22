import React from "react";

class Navegator extends React.Component {


  render() {
   
    return (
      <nav>
          <a href="/" id="logo"><img src="images/logo.svg" alt="logo Tienda Mueble"/></a>
          <ul className="menu">
              <li className="item-menu"><a className="item-link" href="#prod">Productos</a></li>
              <li className="item-menu"><a className="item-link" href="/addProduct">Agregar Producto</a></li>
              <li className="item-menu" >Chango<span>{this.props.order}</span></li>
          </ul>
      </nav>
    )
  }
}

export default Navegator;