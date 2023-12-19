import "../styles/Item.css"
import PropTypes from 'prop-types';

function Item( {item, onClick} ){
  const {title, image} = item;
  return (
    <>
    <div className="itemContainer">
      <p>{title}</p>
      <div className="itemImageContainer">
        <img className="itemImage" src={image} alt={title}></img>
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