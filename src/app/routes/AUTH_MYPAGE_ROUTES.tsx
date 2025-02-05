import { PATH } from "@constants/path";
import MypageInfo from "@pages/MypageInfo";
import Bookmark from "@pages/Bookmark";

import ReservedList from "@pages/ReservedList";
import MyPageAcitvites from "@pages/MypageActivities";
import BookmarkDetail from "@pages/BookmarkDetail";

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
    path: PATH.bookmarkDetailPath,
    element: <BookmarkDetail />,
  },
  {
    path: PATH.activities,
    element: <MyPageAcitvites />,
  },
];

export default AUTH_MYPAGE_ROUTES;
