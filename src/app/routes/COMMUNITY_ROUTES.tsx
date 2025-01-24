import { PATH } from "@constants/path";
import CommunityCreate from "@pages/CommunityCreate";
import CommunityDefault from "@pages/CommunityDetail";
import CommunityMain from "@pages/CommunityMain";
import CommunityModify from "@pages/CommunityModify";

const COMMUNITY_ROUTES = [
  {
    path: PATH.community,
    element: <CommunityMain />,
  },
  {
    path: PATH.communityPostPath,
    element: <CommunityDefault />,
  },
  {
    path: PATH.communityCreate,
    element: <CommunityCreate />,
  },
  {
    path: PATH.communityModifyPath,
    element: <CommunityModify />,
  },
];

export default COMMUNITY_ROUTES;
