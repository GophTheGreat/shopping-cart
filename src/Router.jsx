import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import App from "./App.jsx";


const Router = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "profile/:name",
  //   element: <Profile />,
  // },
  ]);

  return <RouterProvider router={router} />
}

export default Router;