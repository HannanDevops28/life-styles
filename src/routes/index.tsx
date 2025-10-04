import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { usersRoutes } from "./users.routes";
import { NotFoundPage } from "../pages/NotFoundPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...usersRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
