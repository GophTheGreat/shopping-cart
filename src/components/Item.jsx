import "../styles/Item.css"
import PropTypes from 'prop-types';
import { useState } from "react";

function Item( {item, onAddToCart} ){
  const {title, image} = item;
  const [quantity, setQuantity] = useState(0);

  function decrement() {
    setQuantity(prev => prev === 1 ? prev : prev - 1);
  }

  function increment() {
    setQuantity(prev => prev === 999 ? prev : prev + 1);
  }

  function change(e) {
    let value;
    if(isNaN(e.target.value)){
      value = 1
    }
    else{
      value = parseInt(e.target.value);
    }

    if (value < 1){value = 1;}
    if (value > 999){value = 999;}
    setQuantity(value);
  }

  return (
    <>
    <div className="itemContainer">
      <p className="itemTitle">{title}</p>
      <div className="itemImageContainer">
        <img className="itemImage" src={image} alt={title}></img>
      </div>
      <div className="itemQuantityContainer">
        <button className="arrow left" onClick={decrement} aria-label="Decrement"/>
        <input className="quantityField" maxLength={3} value={quantity} alt="Quantity" onChange={change}/>
        <button className="arrow right" onClick={increment} aria-label="Increment"/>
      </div>
      <button className="itemAddToCartButton" onClick={() => {onAddToCart(item, quantity)}}>Add To Cart</button>
    </div>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  onAddToCart: PropTypes.func,
}

export default Item;