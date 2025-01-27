import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { naverApiInstance } from "@utils/axiosInstance";
import { NaverProductResponse, NaverSearchResponse } from "types/NaverShoppingResponse";

export default function ProductCardList({ orderBy }: { orderBy: string }) {
  const [products, setProducts] = useState<NaverProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNaverProductData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await naverApiInstance.get<NaverSearchResponse>("/shop.json", {
        params: {
          query: "텐트",
          display: 20,
          start: 1,
          sort: orderBy,
        },
      });

      setProducts(response.data.items);
    } catch (error) {
      setError("상품 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    fetchNaverProductData();
  }, [fetchNaverProductData]);

  return (
    <div className="grid grid-cols-5 gap-y-10">
      {isLoading && <p>로딩중...</p>}
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product}
          bookmarked={false}
          handleClickBookmark={() => alert("bookmark")}
        />
      ))}
      {error}
    </div>
  );
}
