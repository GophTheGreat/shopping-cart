import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import App from "./App.jsx";
import Cart from "./components/Cart.jsx";


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: <Cart />,
    }
  ]);

  return <RouterProvider router={router} />
}

export default AppRouter;