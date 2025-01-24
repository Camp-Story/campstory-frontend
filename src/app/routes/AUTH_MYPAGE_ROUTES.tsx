import { PATH } from "@constants/path";
import MypageInfo from "@pages/MypageInfo";
import Bookmark from "@pages/Bookmark";
import MypageActivities from "@pages/MypageActivities";

const AUTH_MYPAGE_ROUTES = [
  {
    path: PATH.information,
    element: <MypageInfo />,
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
    element: <MypageActivities />,
  },
];

export default AUTH_MYPAGE_ROUTES;
