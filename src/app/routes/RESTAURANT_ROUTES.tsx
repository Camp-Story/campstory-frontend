import { PATH } from "@constants/path";
import RestaurantMain from "@pages/RestaurantMain";
import RestaurantSearch from "@pages/RestaurantSearch";

const RESTAURANT_ROUTES = [
  {
    path: PATH.restaurant,
    element: <RestaurantMain />,
  },
  {
    path: PATH.restaurantSearch,
    element: <RestaurantSearch />,
  },
  {
    path: PATH.restaurantInfoPath,
    element: <>restaurant information</>,
  },
];

export default RESTAURANT_ROUTES;
