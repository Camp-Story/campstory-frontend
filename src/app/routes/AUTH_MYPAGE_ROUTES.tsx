import { PATH } from "@constants/path";
import PersonalInfo from "@pages/MypageInfo";
import Bookmark from "@pages/Bookmark";

const AUTH_MYPAGE_ROUTES = [
  {
    path: PATH.information,
    element: <PersonalInfo />,
  },
  {
    path: PATH.reservedList,
    element: <>mypage reservedList</>,
  },
  {
    path: PATH.bookmark,
    element: <Bookmark />,
  },
  {
    path: PATH.activities,
    element: <>mypage activities</>,
  },
];

export default AUTH_MYPAGE_ROUTES;
