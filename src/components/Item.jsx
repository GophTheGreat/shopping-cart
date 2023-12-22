import "../styles/Item.css"
import PropTypes from 'prop-types';
import { useState } from "react";

function Item( {item, onClick} ){
  const {title, image} = item;
  const [quantity, setQuantity] = useState(0);

  function decrement() {
    setQuantity(prev => prev === 1 ? prev : prev - 1);
  }

  function increment() {
    setQuantity(prev => prev === 999 ? prev : prev + 1);
  }

  return (
    <>
    <div className="itemContainer">
      <p>{title}</p>
      <div className="itemImageContainer">
        <img className="itemImage" src={image} alt={title}></img>
      </div>
      <div className="itemQuantityContainer">
        <button className="arrow left" onClick={decrement} aria-label="Decrement"/>
        <input className="quantityField" maxLength={3} value={quantity} alt="Quantity"/>
        <button className="arrow right" onClick={increment} aria-label="Increment"/>
      </div>
      <button>Add To Cart</button>
    </div>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default Item;