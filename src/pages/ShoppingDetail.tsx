import ProductInfo from "@components/detail/ProductInfo";
import { useLocation } from "react-router";

export default function ShoppingDetail() {
  const location = useLocation();

  return (
    <div className="w-[1100px] mx-auto mt-20">
      <ProductInfo product={location.state} />
    </div>
  );
}
