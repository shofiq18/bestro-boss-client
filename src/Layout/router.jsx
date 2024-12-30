import {createBrowserRouter, } from "react-router-dom";

import Main from "./Main";
import Error from "../page/Error";
import Home from "../page/Home/Home";

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
      ],
    },
  ]);
  