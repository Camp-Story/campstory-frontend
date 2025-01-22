import { PATH } from "@constants/path";

const COMMUNITY_ROUTES = [
  {
    path: PATH.community,
    element: <>community</>,
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
