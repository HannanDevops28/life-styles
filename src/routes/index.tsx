import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { usersRoutes } from "./users.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...usersRoutes],
  },
]);
