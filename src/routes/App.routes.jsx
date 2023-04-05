import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Books from "../components/Books";
import BookDetails from "../components/BookDetails";

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
        path: "books/book-details/:id",
        element: <BookDetails />,
        loader: async ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
