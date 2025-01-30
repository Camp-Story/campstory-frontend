import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import CategoryMap from "@components/food/CategoryMap";

// import { RESTURANT_CATEGORY } from "@constants/filters";
import { PATH } from "@constants/path";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState, useCallback } from "react";
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
  const keyword = searchParams.get("keyword") || "서울";
  const selectedCategory = searchParams.get("cat3") || "";

  const navigate = useNavigate();

  const fetchRestaurantsData = useCallback(
    async (searchKeyword: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await tourApiInstance.get<ApiResponse>("/searchKeyword1", {
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
            cat3: selectedCategory,
            keyword: searchKeyword,
          },
        });

        const items = response.data.response.body.items.item || []; // itmes의 배열이 데이타가 없을시 undefined 렌더링 오류 방지
        // console.log(items[0].addr1);
        console.log(items);
        setRestaurants(items);
      } catch (error) {
        console.log(error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategory],
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
              selectedValue={selectedCategory}
              onChange={(value) => handleFilterChange(value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            "{keyword || "서울"}" 검색 결과 {restaurants?.length ?? 0}개
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
