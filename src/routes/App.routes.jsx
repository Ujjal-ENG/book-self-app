import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
