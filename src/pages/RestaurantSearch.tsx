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
  const [filteredRestaurants, setFilteredRestaurants] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  // cat3 파라미터를 배열로 변환
  const cat3Param = searchParams.get("cat3") ?? "";
  const selectedCategories = useMemo(() => cat3Param.split(",").filter(Boolean), [cat3Param]);

  const navigate = useNavigate();

  const fetchRestaurantsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const endpoint = keyword ? "/searchKeyword1" : "/areaBasedList1";
      const params = keyword
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
              cat3: "",
              keyword: keyword,
            },
          }
        : {
            params: {
              numOfRows: 1000,
              pageNo: "",
              listYN: "Y",
              arrange: "O",
              contentTypeId: 39,
              areaCode: "",
              sigunguCode: "",
              cat1: "",
              cat2: "",
              cat3: "",
            },
          };

      const response = await tourApiInstance.get<ApiResponse>(endpoint, params);

      const items = response.data.response.body.items.item || [];

      setRestaurants(items);
    } catch (error) {
      console.log(error);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, [keyword]);

  const handleSearch = (searchKeyword: string) => {
    // 기존 파라미터를 복사
    const newParams = new URLSearchParams(searchParams.toString());

    // keyword 파라미터 갱신
    if (searchKeyword) {
      newParams.set("keyword", searchKeyword);
    } else {
      newParams.delete("keyword");
    }

    // 이미 선택되어 있는 카테고리 유지
    if (selectedCategories.length > 0) {
      newParams.set("cat3", selectedCategories.join(","));
    }

    setSearchParams(newParams);
  };

  const filterRestaurantData = useCallback(() => {
    if (selectedCategories.length === 0) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((item) => selectedCategories.includes(item.cat3));
      setFilteredRestaurants(filtered);
    }
  }, [restaurants, selectedCategories]);

  const handleCategoryChange = (updated: string[]) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (updated.length > 0) {
      newParams.set("cat3", updated.join(","));
    } else {
      newParams.delete("cat3");
    }

    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, [fetchRestaurantsData]);

  useEffect(() => {
    filterRestaurantData();
  }, [restaurants, selectedCategories, filterRestaurantData]);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={handleSearch} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap
            markers={restaurants.map((rest) => ({
              addr1: rest.addr1,
              contentid: rest.contentid,
              facltNm: rest.title,
              firstImageUrl: rest.firstimage,
              mapX: rest.mapx,
              mapY: rest.mapy,
            }))}
            type="restaurant"
          />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <CheckboxList
              title="카테고리"
              categories={CATEGORY_OPTIONS}
              selectedValue={selectedCategories}
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            {keyword || ""} 검색 결과 {filteredRestaurants?.length ?? 0}개
          </h2>

          {isLoading && <p>데이터를 불러오는 중입니다...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
              {filteredRestaurants.map((restaurant) => (
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
