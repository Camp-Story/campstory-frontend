import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { naverApiInstance } from "@utils/axiosInstance";

interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
  productId: string;
  productType: string;
  brand: string;
  maker: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
}

interface NaverSearchResponse {
  items: NaverProductResponse[];
}

export default function ProductCardList({ orderBy }: { orderBy: string }) {
  const [products, setProducts] = useState<NaverProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProductData = useCallback(async () => {
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

      console.log(response.data.items[0]);
      setProducts(response.data.items);
    } catch (error) {
      setError("상품 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <div className="grid grid-cols-5 gap-y-10">
      {isLoading && <p>로딩중...</p>}
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          id={product.productId}
          image={product.image}
          title={product.title}
          mallName={product.mallName}
          hprice={product.hprice}
          lprice={product.lprice}
          bookmarked={false}
          handleClickBookmark={() => alert("bookmark")}
        />
      ))}
      {error}
    </div>
  );
}
