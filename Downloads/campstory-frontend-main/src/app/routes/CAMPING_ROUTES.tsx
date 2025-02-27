import { PATH } from "@constants/path";
import CampingDetail from "@pages/CampingDetail";
import CampingMain from "@pages/CampingMain";
import CampingSearch from "@pages/CampingSearch";

const CAMPING_ROUTES = [
  {
    path: PATH.camping,
    element: <CampingMain />,
  },
  {
    path: PATH.campingSearch,
    element: <CampingSearch />,
  },
  {
    path: PATH.campingInfoPath,
    element: <CampingDetail/>,
  },
  {
    path: PATH.campingReservationPath,
    element: <>camping reservation</>,
  },
];

export default CAMPING_ROUTES;
