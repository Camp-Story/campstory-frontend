import { PATH } from "@constants/path";
import RestaurantDetail from "@pages/RestaurantDetail";
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
    element: <RestaurantDetail />,
  },
];

export default RESTAURANT_ROUTES;
