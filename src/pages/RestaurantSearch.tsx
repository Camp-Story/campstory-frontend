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
import useBookMark from "@hooks/useBookmark";
import { RESTAURANT_CHANNEL_ID } from "@constants/channelId";
import useInfiniteScroll from "@hooks/useInfiniteScroll";

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

const NUM_OF_ROWS = 50;

export default function RestaurantSearch() {
  const { handleLike, handleUnlike, isBookmarked } = useBookMark(RESTAURANT_CHANNEL_ID);

  const [restaurants, setRestaurants] = useState<Item[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  // cat3 파라미터를 배열로 변환
  const cat3Param = searchParams.get("cat3") ?? "";
  const selectedCategories = useMemo(() => cat3Param.split(",").filter(Boolean), [cat3Param]);

  const navigate = useNavigate();

  const fetchRestaurantsData = useCallback(
    async (page: number) => {
      if (isPageEnd) return; // 마지막 페이지면 요청하지 않음
      setIsLoading(true);
      setError(null);

      try {
        const endpoint = keyword ? "/searchKeyword1" : "/areaBasedList1";
        const params = keyword
          ? {
              params: {
                numOfRows: NUM_OF_ROWS,
                pageNo: page,
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
                numOfRows: NUM_OF_ROWS,
                pageNo: page,
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

        if (items.length < NUM_OF_ROWS) {
          setIsPageEnd(true);
        }
        if (page === 1) {
          setRestaurants(items);
        } else {
          setRestaurants((prev) => [...prev, ...items]);
        }
      } catch (error) {
        console.log(error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    },
    [isPageEnd, keyword],
  );

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
    if (selectedCategories.length === 0 && pageNumber !== 1) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((item) => selectedCategories.includes(item.cat3));
      setFilteredRestaurants(filtered);
    }
  }, [pageNumber, restaurants, selectedCategories]);

  const handleCategoryChange = (updated: string[]) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (updated.length > 0) {
      newParams.set("cat3", updated.join(","));
    } else {
      newParams.delete("cat3");
    }
    setPageNumber(1);
    setIsPageEnd(false);
    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchRestaurantsData(pageNumber);
  }, [fetchRestaurantsData, pageNumber]);

  useEffect(() => {
    filterRestaurantData();
    console.log("filterRestaurantData()");
  }, [restaurants, selectedCategories, filterRestaurantData]);

  // 무한스크롤
  const { loadMoreRef } = useInfiniteScroll({
    isPageEnd,
    isLoading,
    setPageNumber,
  });

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
              {filteredRestaurants.map((restaurant) => {
                const bookmarked = isBookmarked(restaurant.contentid);
                return (
                  <SearchCard
                    key={restaurant.contentid}
                    img={restaurant.firstimage}
                    bookmarked={!!bookmarked}
                    category={CategoryMap[restaurant.cat3] || "카테고리 없음"}
                    handleClick={() =>
                      navigate(PATH.restaurantInfo(restaurant.contentid), { state: { restaurant } })
                    }
                    handleClickBookmark={(e) =>
                      bookmarked
                        ? handleUnlike(e, bookmarked._id)
                        : handleLike(e, restaurant.contentid, {
                            category: CategoryMap[restaurant.cat3] || "카테고리 없음",
                            image: restaurant.firstimage,
                            location: restaurant.addr1,
                            title: restaurant.title,
                          })
                    }
                    location={`${restaurant.addr1}${restaurant.addr2 && `${restaurant.addr2}`}`}
                    title={restaurant.title}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-2xl text-gray-scale-200">검색 결과가 없습니다.</p>
          )}
          {/* 무한 스크롤 관련 */}
          <div ref={loadMoreRef} className="bg-slate-100 h-40" />
        </div>
      </div>
    </>
  );
}
