import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navegator from "../components/Navegator";
import productsDB from "../data/productsDB";

class AddProduct extends React.Component {
  nameRef = React.createRef();
  categoryRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  
  state = {
    products: {}    
  };
  componentDidMount() {
    // Hacer que los productos vengan de la DB a aca y que carge la info en products
      this.setState({ products : productsDB})
   }

  addProd = event => {
   //funcion que actualiza el state con el producto ingresado
   //queda pendiente hacer el back para que se pueda cargar una imagen desde el form

    event.preventDefault();
    const product={
     name:this.nameRef.current.value,
     category:this.categoryRef.current.value,
     price:parseInt(this.priceRef.current.value),
     image:"/images/pampa.png",
     desc:this.descRef.current.value,
    }
    const products ={...this.state.products}

    products[this.nameRef.current.value]= product
    this.setState({ products });
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="AddProduct">
        <Navegator viewAddProduct={"none"}/>
        <Header />
        
        <h1 className="titulo-form">Registrate</h1>
        <main>
                <form onSubmit={this.addProd}>
                    <div className="item-form">
                        <label htmlFor="producto" className="form-label">nombre del Producto</label>
                        <input type="text" 
                        className="form-control" 
                        id="producto" 
                        name="name" 
                        ref={this.nameRef}
                        />
                    </div>
                    <div className="item-form">
                        <label htmlFor="categoria" className="form-label">categoria</label>
                        <input type="text" className="form-control" id="categoria" name="category" ref={this.categoryRef}/>
                    </div>

                    <div className="item-form">
                        <label htmlFor="categoria" className="form-label">descripcion</label>
                        <input type="text" className="form-control" id="categoria" name="desc" ref={this.descRef}/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="precio" className="form-label">precio</label>
                        <input type="text" className="form-control" id="precio" name="price" ref={this.priceRef}/>
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