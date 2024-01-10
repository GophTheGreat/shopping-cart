import PropTypes from 'prop-types';

function Cart( { cartItems }) {
  
 return (
  <>
  <div className="cartWrapper">
    {cartItems.map(cartItem => (
      <div className="cartItemContainer" key={cartItem.id}>
        <p className="cartItemTitle">{cartItem.item.title}</p>
        <div className="cartItemImageContainer">
          <img className="cartItemImage" src={cartItem.item.image} alt={cartItem.item.title}></img>
          <p className="cartItemQuantity">{cartItem.quantity}</p>
        </div>
      </div>
    ))}
  </div>
  </>

 )
}
Cart.propTypes = {
  cartItems: PropTypes.array
}


export default Cart;