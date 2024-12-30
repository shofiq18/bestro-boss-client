import {createBrowserRouter, } from "react-router-dom";

import Home from "../page/Home";
import Main from "./Main";
import Error from "../page/Error";

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
  