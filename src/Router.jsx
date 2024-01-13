import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Store.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import PropTypes from 'prop-types';


const AppRouter = ( {fetchedItems, onAddToCart, onRemoveFromCart, cartItems} ) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cartItems={cartItems} />
          <Store fetchedItems={fetchedItems} onAddToCart={onAddToCart}/>
        </>
      )
    },
    {
      path: "/cart",
      element:(
        <>
          <Navbar cartItems={cartItems} />
          <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart}/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />
}
AppRouter.propTypes = {
  fetchedItems: PropTypes.array,
  onAddToCart: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  cartItems: PropTypes.array
}


export default AppRouter;