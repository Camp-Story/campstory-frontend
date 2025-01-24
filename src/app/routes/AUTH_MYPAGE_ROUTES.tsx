import { PATH } from "@constants/path";
import MypageInfo from "@pages/MypageInfo";
import Bookmark from "@pages/Bookmark";

import ReservedList from "@pages/ReservedList";
import MyPageAcitvites from "@pages/MypageActivities";

const AUTH_MYPAGE_ROUTES = [
  {
    path: PATH.information,
    element: <MypageInfo />,
  },
  {
    path: PATH.reservedList,
    element: <ReservedList />,
  },
  {
    path: PATH.bookmark,
    element: <Bookmark />,
  },
  {
    path: PATH.activities,
    element: <MyPageAcitvites />,
  },
];

export default AUTH_MYPAGE_ROUTES;
