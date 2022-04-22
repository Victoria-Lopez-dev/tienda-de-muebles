import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Navegator from "./components/Navegator";
import productsDB from "./productsDB";
import ProductsArea from "./components/ProductsArea";
import categoryDB from "./categoryDB";

class App extends React.Component {
  state = {
    products: {},
    category: {},
    order:{}
    
  };
  
  componentDidMount() {
    // Hacer que los productos vengan de la DB a aca y que carge la info en products
      this.setState({ products : productsDB})
      this.setState({category : categoryDB})
   }

   addToOrder = prod =>{
     const order ={...this.state.order};
     order[prod] = order[prod] + 1 || 1;
     order['total'] = order['total'] + 1 || 1;
     this.setState({ order });
    
   }

   
  render() {
    return (
      <div className="App">
        <Navegator order={this.state.order['total']}/>
        <Header/>
        <section className="cat-section">
          {Object.keys(this.state.category).map(keys => (
            <Category
            key={keys}
            index={keys}
            data={this.state.category[keys]
            }/> 
          ))}         
        </section>

        <ProductsArea  products={this.state.products} addToOrder={this.addToOrder}/>
        <Footer siteName="Tienda de Muebles"/>
      </div>
    )
  }
}

export default App;
