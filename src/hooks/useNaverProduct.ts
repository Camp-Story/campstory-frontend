import { useState, useCallback } from "react";
import { naverApiInstance } from "@utils/axiosInstance";
import { NaverProductResponse, NaverSearchResponse } from "types/NaverShoppingResponse";

const useNaverProduct = (keyword: string, count: number, orderBy: string = "sim") => {
  const [products, setProducts] = useState<NaverProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchNaverProductData = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await naverApiInstance.get<NaverSearchResponse>("/shop.json", {
        params: {
          query: keyword,
          display: count,
          start: 1,
          sort: orderBy,
        },
      });

      setProducts(response.data.items);
    } catch (error) {
      setErrorMessage("상품 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy, count, keyword]);

  return {
    products,
    isLoading,
    errorMessage,
    fetchNaverProductData,
  };
};

export default useNaverProduct;
