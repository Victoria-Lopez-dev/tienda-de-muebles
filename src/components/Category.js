import React from "react";


class Category extends React.Component {
  render() {
    const{name,desc}= this.props.data;
    const nameId = name + "1"
    return (
        <div className="category flip-container" id={nameId} onTouchStart={(nameId)=>{
          let card = document.getElementById(nameId);card.classList.toggle('hover')
      }}>
          <div className="flipper">
            <div className="front image-cat" id={name}>
            <h2 className="titulo-cat">{name}</h2>
            </div>
            <div className="back image-cat">
              <p className="desc-card">{desc}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Category;