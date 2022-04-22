import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navegator from "./Navegator";
import productsDB from "../productsDB";

class AddProduct extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  categoryRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  state = {
    products: {}    
  };
  componentDidMount() {
    // Hacer que los productos vengan de la DB a aca y que carge la info en products
      this.setState({ products : productsDB})
   }

  createProd = event => {
    // 1.  stop the form from submitting
    event.preventDefault();

 const products = { ...this.state.products };
    const product = {
      name:this.nameRef.current.value,
      category:this.categoryRef.current.value,
      desc:this.descRef.current.value,
      price:this.priceRef.current.value,
      image :"/images/estilo-madera.png"
    };
    products["bla"] = product;
  
    this.setState({ products });
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="AddProduct">
        <Navegator/>
        <Header/>
        
        <h1 className="titulo-form">Registrate</h1>
        <main>
                <form onSubmit={this.createProd}>
                    <div className="item-form">
                        <label htmlFor="producto" className="form-label">nombre del Producto</label>
                        <input type="text" className="form-control" id="producto" name="name"/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="categoria" className="form-label">categoria</label>
                        <input type="text" className="form-control" id="categoria" name="category"/>
                    </div>

                    <div className="item-form">
                        <label htmlFor="categoria" className="form-label">descripcion</label>
                        <input type="text" className="form-control" id="categoria" name="desc"/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="precio" className="form-label">precio</label>
                        <input type="text" className="form-control" id="precio" name="price"/>
                    </div>
          

                    <button type="submit" className="boton-agregar">Enviar</button>
                  </form>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default AddProduct;