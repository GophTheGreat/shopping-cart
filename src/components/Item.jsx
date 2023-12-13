import { items } from "../data";
import "../Item.css"

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

export default Item;