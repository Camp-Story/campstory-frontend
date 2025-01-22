import { PATH } from "@constants/path";
import CampingMain from "@pages/CampingMain";

const CAMPING_ROUTES = [
  {
    path: PATH.camping,
    element: <CampingMain />,
  },
  {
    path: PATH.campingSearch,
    element: <>camping search</>,
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
