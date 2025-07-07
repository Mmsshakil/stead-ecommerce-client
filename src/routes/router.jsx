import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import { Children } from "react";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
