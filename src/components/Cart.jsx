import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Cart() {

  const location = useLocation();
  console.log("Initial location:", location);
  const cartItems = (location.state && location.state.cart) || [];

  console.log("In the cart here is the cart: ", cartItems)
  
 return (
  <>
  <Navbar cartItems={cartItems}/>
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


export default Cart;