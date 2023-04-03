import { IndexPage } from "pages/IndexPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    element: <IndexPage />,
  },
]);
