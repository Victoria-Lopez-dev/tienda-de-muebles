import React from "react";
import PropTypes from "prop-types";

class CardProduct extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number
    }),
    index:PropTypes.string,
    addToOrder : PropTypes.func
  }

  render() {
    const { image, name, price, desc} = this.props.data;
    const index = this.props.index;
    return (
        <div className="card card-prod">
            <h2 className="titulo-prod">{name}</h2>
            <img className="img-prod" src={image} alt="prod"/>
            <p className="desc-card">{desc}</p>
            <p>{price}</p>
            <button className="boton-ver"href="#" onClick={()=>this.props.addToOrder(index)}>Comprar</button>
        </div>
    )
  }
}

export default CardProduct;