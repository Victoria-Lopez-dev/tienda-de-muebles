import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navegator from "./Navegator";
class AddProduct extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  categoryRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  state = {
    products: {}    
  };
  createProd = event => {
    // 1.  stop the form from submitting
    event.preventDefault();

    console.log("pendiente")
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