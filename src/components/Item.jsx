import { items } from "../data";
import "../Item.css"
import PropTypes from 'prop-types';
import React from 'react';

function Item( {item, onClick} ){
  const {id, name, image} = item;
  return (
    <>
    <div className="itemContainer">
      <p>{name}</p>
      <div className="itemImageContainer">
        <img className="itemImage" src={image} alt={name}></img>
      </div>
    </div>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default Item;