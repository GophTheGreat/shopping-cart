import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {

  const numCartItems = 1;

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="linkWrapper">
            <Link to="home">Home</Link>
            <div className="navCart">
              <Link to="cart">My Shopping Cart</Link>
              {numCartItems ? 
                <i data-count={numCartItems} className="badge"></i> :
                <></>
              }
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;