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
  {
    path: PATH.mypage,
    element: <>mypage</>,
  },
  {
    path: PATH.information,
    element: <>mypage information</>,
  },
  {
    path: PATH.reservedList,
    element: <>mypage reservedList</>,
  },
  {
    path: PATH.bookmark,
    element: <>mypage bookmark</>,
  },
  {
    path: PATH.activities,
    element: <>mypage activities</>,
  },
];

export default AUTH_ROUTES;
