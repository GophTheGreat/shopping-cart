import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import PropTypes from 'prop-types';

function Navbar( {cartItems} ) {

  const numCartItems = 1;

  return (
    <nav className="navbar">
      <ul className="linkWrapper">
        <li>
          <Link to="home" className="navLink">Home</Link>
        </li>
        <li>
          <div className="navCart navLink">
            <Link to="cart">My Shopping Cart</Link>
            {numCartItems ? 
              <i data-count={cartItems.length} className="badge"></i> :
              <></>
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