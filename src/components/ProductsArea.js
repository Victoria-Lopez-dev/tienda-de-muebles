import React from "react";
import CardProduct from "./CardProduct";

class ProductsArea extends React.Component {
  
  render() {
    return (
      <main id="prod">
      <h2>Productos</h2>
      <section  className="ProdArea" >
        {Object.keys(this.props.products).map(keys => (
          <CardProduct 
          key={keys}
          index={keys}
          data={this.props.products[keys]}
          addToOrder={this.props.addToOrder}
          />
          ))}      
      </section>

      </main>
    )
  }
}

export default ProductsArea;