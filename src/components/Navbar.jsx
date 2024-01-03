import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import PropTypes from 'prop-types';
import { useState } from "react";

const imagePath = import.meta.env.VITE_REACT_APP_IMAGE_PATH;

function Navbar( { cartItems } ) {
  console.log(imagePath);

  let numCartItems = 0;
  cartItems.forEach(element => {
    numCartItems += element.quantity;
  });

  // const [numCartItems, setNumCartItems] = useState(0);

  // setNumCartItems(cartItems)

  console.log("Debug - cartItems:", cartItems);

  return (
    <nav className="navbar">
      <ul className="linkWrapper">
        <li>
          <Link to="/" className="navLink">Home</Link>
        </li>
        <li>
          <div className="navCart navLink">
          <Link to={{ pathname: "/cart", state: { cartItems: cartItems } }}><img className="cartIcon" src={imagePath + "/cart.png"} alt="Cart"></img></Link>
            {numCartItems ? 
              <i data-count={numCartItems} className="badge"></i> :
              null
            }
          </div>
        </li>
      </ul>
    </nav>
  )
}
Navbar.propTypes = {
  cartItems: PropTypes.array
}

export default Navbar;