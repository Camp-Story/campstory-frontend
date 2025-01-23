import { PATH } from "@constants/path";
import ShoppingMain from "@pages/ShoppingMain";

const SHOPPING_ROUTES = [
  {
    path: PATH.shopping,
    element: <ShoppingMain />,
  },
  {
    path: PATH.shoppingSearch,
    element: <>shopping search</>,
  },
  {
    path: PATH.shoppingInfoPath,
    element: <>shopping information</>,
  },
];

export default SHOPPING_ROUTES;
