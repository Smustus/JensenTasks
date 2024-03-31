import { createBrowserRouter } from "react-router-dom"
import Home from "./Home/Home";
import Books from "./Books/Books";
import DetailedBookView from "./DetailedBookView/DetailedBookView";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/books/:id",
    element: <DetailedBookView />
  }
]);

export default routes;