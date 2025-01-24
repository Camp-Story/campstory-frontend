import { PATH } from "@constants/path";
import CommunityDefault from "@pages/CommunityDetail";
import CommunityMain from "@pages/CommunityMain";

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
    element: <>community create</>,
  },
  {
    path: PATH.communityModifyPath,
    element: <>community modify</>,
  },
];

export default COMMUNITY_ROUTES;
