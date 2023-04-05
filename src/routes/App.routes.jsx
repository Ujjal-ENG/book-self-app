import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Books from "../components/Books";

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
        path: "/books",
        element: <Books />,
        loader: async () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
