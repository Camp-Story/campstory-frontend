import { PATH } from "@constants/path";

import ShoppingMain from "@pages/ShoppingMain";
import ShoppingSearch from "@pages/ShoppingSearch";

const SHOPPING_ROUTES = [
  {
    path: PATH.shopping,
    element: <ShoppingMain />,
  },
  {
    path: PATH.shoppingSearch,
    element: <ShoppingSearch />,
  },
  {
    path: PATH.shoppingInfoPath,
    element: <>shopping information</>,
  },
];

export default SHOPPING_ROUTES;
