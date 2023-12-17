import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="linkWrapper">
            <Link to="home">Home</Link>
            <Link to="cart">My Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;