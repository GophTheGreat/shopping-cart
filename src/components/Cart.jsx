import PropTypes from 'prop-types';
import "../styles/Cart.css"

function Cart( { cartItems, onRemoveFromCart }) {
  
 return (
  <>
  <div className="cartWrapper">
    {cartItems.map(cartItem => (
      <div className="cartItemContainer" key={cartItem.id}>
        <p className="cartItemTitle">{cartItem.item.title}</p>
        <div className="cartItemImageContainer">
          <img className="cartItemImage" src={cartItem.item.image} alt={cartItem.item.title}></img>
        </div>
        <div className="cartItemQuantityContainer">
          <p className="cartItemQuantityField" alt="Quantity">{cartItem.quantity}</p>
        </div>
        <button className="cartItemRemoveFromCartButton" onClick={() => {onRemoveFromCart(cartItem)}}>Remove from cart</button>
      </div>
    ))}
  </div>
  <button>Confirm purchase and pay</button>
  </>

 )
}
Cart.propTypes = {
  cartItems: PropTypes.array,
  onRemoveFromCart: PropTypes.func
}


export default Cart;