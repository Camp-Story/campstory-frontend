import CheckboxList from "@components/food/RestaurantSearch/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import CategoryMap from "@components/food/CategoryMap";

import { PATH } from "@constants/path";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

interface Item {
  addr1: string;
  addr2: string;
  cat1: string;
  cat2: string;
  cat3: string;
  firstimage: string;
  firstimage2: string;
  tel: string;
  title: string;
  contentid: string;
  mapx: string;
  mapy: string;
  keyword: string;
}

interface ApiResponse {
  response: {
    body: {
      items: {
        item: Item[];
      };
    };
  };
}

const CATEGORY_OPTIONS = Object.entries(CategoryMap).map(([code, label]) => ({
  value: code,
  label,
}));

export default function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const categoryFilterList = useMemo(
    () => searchParams.get("category")?.split(",") || [],
    [searchParams],
  );

  const selectedCategories = useMemo(() => searchParams.get("cat3") || "", [searchParams]);

  const navigate = useNavigate();

  //필터 적용시 받아온 데이터에서 필터.
  const filterRestaurantData = (items: Item[], selectedCategories: string[]) => {
    if (selectedCategories.length === 0) return items; // 필터가 없으면 전체 데이터 반환
    return items.filter((item) => selectedCategories.includes(item.cat3)); // 선택된 카테고리와 일치하는 데이터만 반환
  };

  const fetchRestaurantsData = useCallback(
    async (searchKeyword: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const endpoint = searchKeyword ? "/searchKeyword1" : "/areaBasedList1";
        const params = searchKeyword
          ? {
              params: {
                numOfRows: "30",
                pageNo: "",
                listYN: "Y",
                arrange: "O",
                contentTypeId: 39,
                areaCode: "",
                sigunguCode: "",
                cat1: "",
                cat2: "",
                cat3: selectedCategories,
                keyword: searchKeyword,
              },
            }
          : {
              params: {
                numOfRows: 100,
                pageNo: "",
                listYN: "Y",
                arrange: "O",
                contentTypeId: 39,
                areaCode: "",
                sigunguCode: "",
                cat1: "",
                cat2: "",
                cat3: selectedCategories,
              },
            };
        const response = await tourApiInstance.get<ApiResponse>(endpoint, params);

        let items = response.data.response.body.items.item || [];
        console.log(items);
        // 카테고리 체크박스 선택되어 있으면 데이터 필터링
        if (categoryFilterList.length !== 0) {
          items = filterRestaurantData(items, "category", categoryFilterList);
        }
        setRestaurants(items);
      } catch (error) {
        console.log(error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategories],
  );

  const handleSearch = (searchKeyword: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("keyword", searchKeyword);
    setSearchParams(newParams); // 새로운 검색어로 데이터 호출
  };

  const handleFilterChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("cat3", value);
    } else {
      newParams.delete("cat3");
    }
    setSearchParams({ keyword, cat3: value });
  };
  useEffect(() => {
    fetchRestaurantsData(keyword);
  }, [fetchRestaurantsData, keyword]);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={handleSearch} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <CheckboxList
              title="카테고리"
              categories={CATEGORY_OPTIONS}
              selectedValue={selectedCategories}
              onChange={(value) => handleFilterChange(value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            {keyword || ""} 검색 결과 {restaurants?.length ?? 0}개
          </h2>

          {isLoading && <p>데이터를 불러오는 중입니다...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && Array.isArray(restaurants) && restaurants.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
              {restaurants.map((restaurant) => (
                <SearchCard
                  key={restaurant.contentid}
                  img={restaurant.firstimage}
                  bookmarked={false}
                  category={CategoryMap[restaurant.cat3] || "카테고리 없음"}
                  handleClick={() =>
                    navigate(PATH.restaurantInfo(restaurant.contentid), { state: { restaurant } })
                  }
                  handleClickBookmark={() => alert("bookmark")}
                  location={`${restaurant.addr1}${restaurant.addr2 && `${restaurant.addr2}`}`}
                  title={restaurant.title}
                />
              ))}
            </div>
          ) : (
            <p className="text-2xl text-gray-scale-200">검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
}
