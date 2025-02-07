import { useEffect } from "react";
import ProductCard from "./ProductCard";
import useNaverProduct from "@hooks/useNaverProduct";

export default function ProductCardList({
  orderBy,
  keyword,
}: {
  orderBy: string;
  keyword: string;
}) {
  const { products, isLoading, errorMessage, fetchNaverProductData } = useNaverProduct(
    keyword,
    20,
    orderBy,
  );

  useEffect(() => {
    fetchNaverProductData();
  }, [fetchNaverProductData]);

  return (
    <div className="grid grid-cols-5 gap-y-10">
      {isLoading && <p>로딩중...</p>}
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={{
            ...product,
            image: product.image.replace("https://shopping-phinf.pstatic.net", "/pstatic"),
          }}
          bookmarked={false}
          handleClickBookmark={() => alert("bookmark")}
        />
      ))}
      {errorMessage}
    </div>
  );
}
