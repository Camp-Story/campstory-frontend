import { PATH } from "@constants/path";
import Login from "@pages/Login";
import OAuthRedirect from "@pages/OAuthRedirect";
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
  { path: "/oauth-redirect", element: <OAuthRedirect /> },
];

export default AUTH_ROUTES;
