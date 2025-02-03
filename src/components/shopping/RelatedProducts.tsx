import useNaverProduct from "@hooks/useNaverProduct";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ title, category }: { title: string; category: string }) {
  const { products, isLoading, errorMessage, fetchNaverProductData } = useNaverProduct(category, 5);

  useEffect(() => {
    fetchNaverProductData();
  }, [fetchNaverProductData]);

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-title">{title}</h2>
      </div>
      {isLoading && <p>로딩중...</p>}
      {errorMessage}
      <div className="flex justify-between">
        {products.length === 0 && (
          <p className="text-sub-title text-gray-scale-300">관련 상품이 없습니다.</p>
        )}
        {products.length !== 0 &&
          products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
              bookmarked={false}
              handleClickBookmark={() => alert("bookmark")}
            />
          ))}
      </div>
    </section>
  );
}
