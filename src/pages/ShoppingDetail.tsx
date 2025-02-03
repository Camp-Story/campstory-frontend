import { useLocation } from "react-router";
import ProductInfo from "@components/shopping/ProductInfo";
import RelatedProducts from "@components/shopping/RelatedProducts";
import ProductCategories from "@components/shopping/ProductCategories";
import { NaverProductResponse } from "types/NaverShoppingResponse";

export default function ShoppingDetail() {
  const location = useLocation();
  const product = location.state as NaverProductResponse;

  return (
    <div className="w-[1200px] mx-auto mt-20">
      <ProductInfo product={product} />
      <ProductCategories product={product} />
      <RelatedProducts
        title="비슷한 상품"
        category={product.category1 + product.category2 + product.category3}
      />
      <hr />
      <RelatedProducts
        title="BRAND"
        category={product.brand || product.title.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 2)}
      />
    </div>
  );
}
