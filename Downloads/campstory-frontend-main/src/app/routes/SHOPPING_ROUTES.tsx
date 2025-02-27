import { PATH } from "@constants/path";
import ShoppingMain from "@pages/ShoppingMain";
import ShoppingSearch from "@pages/ShoppingSearch";
import ShoppingDetail from "@pages/ShoppingDetail";

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
    element: <ShoppingDetail />,
  },
];

export default SHOPPING_ROUTES;
