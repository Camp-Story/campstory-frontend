import { PATH } from "@constants/path";
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
    element: <>camping information</>,
  },
  {
    path: PATH.campingReservationPath,
    element: <>camping reservation</>,
  },
];

export default CAMPING_ROUTES;
