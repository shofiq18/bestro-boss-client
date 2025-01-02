import {createBrowserRouter, } from "react-router-dom";

import Main from "./Main";
import Error from "../page/Error";
import Home from "../page/Home/Home";
import ContactUs from "../page/ContactUs";
import OurMenu from "../page/ourMenu/OurMenu";
import Order from "../page/orderFood/Order";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/menu",
          element: <OurMenu></OurMenu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
      ],
    },
  ]);
  