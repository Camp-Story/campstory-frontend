import ProductInfo from "@components/detail/ProductInfo";
import { naverApiInstance } from "@utils/axiosInstance";
import { useEffect, useState } from "react";

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

export default function ShoppingDetail() {
  const [products, setProducts] = useState<NaverProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProductData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await naverApiInstance.get<NaverSearchResponse>("/shop.json", {
        params: {
          query: "텐트",
          display: 10,
          start: 1,
          sort: "sim",
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
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-[1100px] mx-auto mt-20">
      {isLoading && "로딩중..."}
      {products.length !== 0 && <ProductInfo product={products[0]} />}
      {error}
    </div>
  );
}
