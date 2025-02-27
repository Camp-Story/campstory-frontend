import { PATH } from "@constants/path";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";

const AUTH_ROUTES = [
  {
    path: PATH.signUp,
    element: <SignUp />,
  },
  {
    path: PATH.login,
    element: <Login />,
  },
];

export default AUTH_ROUTES;
