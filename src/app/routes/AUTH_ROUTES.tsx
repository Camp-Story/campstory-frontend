import AuthMyPageLayout from "@components/layouts/AuthMyPageLayout";
import { PATH } from "@constants/path";

const AUTH_ROUTES = [
  {
    path: PATH.signUp,
    element: <>signUp</>,
  },
  {
    path: PATH.login,
    element: <>login</>,
  },
  {
    path: PATH.mypage,
    element: <AuthMyPageLayout />,
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
