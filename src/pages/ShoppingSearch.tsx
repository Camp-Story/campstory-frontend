import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router";
import SearchInput from "@components/common/SearchInput";
import Category from "@components/shopping/Category";
import ProductCardList from "@components/shopping/ProductCardList";
import OrderRadio from "@components/community/OrderRadio";

const CATEGORIES: CategoryType[] = [
  { src: "/images/shopping/food.png", catName: "먹거리", keyword: "음식" },
  { src: "/images/shopping/tent.png", catName: "텐트", keyword: "텐트" },
  { src: "/images/shopping/sleeping-bag.png", catName: "침낭", keyword: "침낭" },
  { src: "/images/shopping/brazier.png", catName: "화로대", keyword: "화로대" },
  { src: "/images/shopping/camping-furniture.png", catName: "캠핑 가구", keyword: "캠핑 가구" },
  { src: "/images/shopping/bonfire.png", catName: "소모품", keyword: "숯, 장작" },
] as const;

const DEFAULT_KEYWORD = "텐트";
const SORT_PARAM = "sort";
const KEYWORD_PARAM = "keyword";

type OrderByType = "sim" | "dsc" | "asc" | "date";

interface CategoryType {
  catName: "먹거리" | "텐트" | "침낭" | "화로대" | "캠핑 가구" | "소모품";
  src: string;
  keyword: string;
}

export default function ShoppingSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = (searchParams.get(SORT_PARAM) as OrderByType) || "sim";
  const keyword = searchParams.get(KEYWORD_PARAM) || DEFAULT_KEYWORD;

  const updateSearchParams = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const handleOrderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateSearchParams(SORT_PARAM, e.target.value);
    },
    [updateSearchParams],
  );

  const handleSearch = useCallback(
    (searchKeyword: string) => {
      updateSearchParams(KEYWORD_PARAM, searchKeyword);
    },
    [updateSearchParams],
  );

  const handleCategoryClick = useCallback(
    (catKeyword: string) => {
      updateSearchParams(KEYWORD_PARAM, catKeyword);
    },
    [updateSearchParams],
  );

  // 초기 검색 파라미터 설정
  useEffect(() => {
    if (!searchParams.get(KEYWORD_PARAM)) {
      updateSearchParams(KEYWORD_PARAM, DEFAULT_KEYWORD);
    }
  }, [searchParams, updateSearchParams]);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-24">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>

      <div className="flex justify-center items-center gap-7 mt-7">
        {CATEGORIES.map((category: CategoryType) => (
          <Category
            key={category.catName}
            {...category}
            onClick={() => handleCategoryClick(category.keyword)}
          />
        ))}
      </div>

      <div className="flex mt-16 gap-5 text-lg mb-10" onChange={handleOrderChange}>
        <OrderRadio label="높은금액순" value="dsc" />
        <OrderRadio label="낮은금액순" value="asc" />
        <OrderRadio label="날짜순" value="date" />
        <OrderRadio label="관련도순" value="sim" defaultChecked />
      </div>

      <div className="mb-52 mt-3">
        <ProductCardList orderBy={orderBy} keyword={keyword} />
      </div>
    </div>
  );
}
