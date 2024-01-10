import PropTypes from 'prop-types';
import Item from './Item';

function Store( {fetchedItems, onAddToCart} ) { 
  return (
    <div className="itemWrapper">
      {fetchedItems.map(item => (
        <Item key={item.id} item={item} onAddToCart={onAddToCart}></Item>
      ))}
    </div>
  )
}
Store.propTypes = {
  fetchedItems: PropTypes.array,
  onAddToCart: PropTypes.func
}

export default Store;