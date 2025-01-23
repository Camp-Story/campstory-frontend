import { PATH } from "@constants/path";
import CommunityMain from "@pages/CommunityMain";

const COMMUNITY_ROUTES = [
  {
    path: PATH.community,
    element: <CommunityMain />,
  },
  {
    path: PATH.communityPostPath,
    element: <>community post</>,
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
