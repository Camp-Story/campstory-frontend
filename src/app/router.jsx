import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layouts/HomeLayout";
import HOME_ROUTES from "./routes/HOME_ROUTES";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "/",
            children: HOME_ROUTES,
          },
        ],
      },
    ],
  },
]);

export default router;
