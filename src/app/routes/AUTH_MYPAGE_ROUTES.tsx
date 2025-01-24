import { PATH } from "@constants/path";

const AUTH_MYPAGE_ROUTES = [
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

export default AUTH_MYPAGE_ROUTES;
