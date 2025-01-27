import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import { RESTURANT_CATEGORY } from "@constants/filters";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PATH } from "@constants/path";
import { tourApiInstance } from "@utils/axiosInstance";

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

const CATEGORY_MAP: Record<string, string> = {
  A05020100: "한식",
  A05020200: "서양식",
  A05020300: "일식",
  A05020400: "중식",
  A05020700: "이색음식점",
  A05020900: "카페/전통찻집",
  A05021000: "클럽",
};

export default function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const fetchRestaurantsData = async (searchKeyword: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await tourApiInstance.get<ApiResponse>("/searchKeyword1", {
        params: {
          numOfRows: 10,
          pageNo: 1,
          listYN: "Y",
          arrange: "O",
          contentTypeId: 39,
          areaCode: "",
          sigunguCode: "",
          cat1: "",
          cat2: "",
          cat3: "",
          keyword: searchKeyword,
        },
      });

      const items = response.data.response.body.items.item;
      // console.log(items[0].addr1);
      console.log(items);
      if (items) {
        setRestaurants(items);
      }
    } catch (error) {
      console.log(error);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword); // 검색어 상태 업데이트
    fetchRestaurantsData(searchKeyword); // 새로운 검색어로 데이터 호출
  };

  useEffect(() => {
    fetchRestaurantsData(keyword || "서울");
  }, [keyword]);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <CheckboxList categories={RESTURANT_CATEGORY} title="카테고리" />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            {keyword || "서울"} 검색 결과 {restaurants.length}개
          </h2>

          {isLoading && <p>데이터를 불러오는 중입니다...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && (
            <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
              {restaurants.map((restaurant) => (
                <SearchCard
                  key={restaurant.contentid}
                  img={restaurant.firstimage}
                  bookmarked={false}
                  category={CATEGORY_MAP[restaurant.cat3] || "카데고리 없음"}
                  handleClick={() => navigate(PATH.restaurantInfo(restaurant.contentid))}
                  handleClickBookmark={() => alert("bookmark")}
                  location={`${restaurant.addr1}${restaurant.addr2 && `${restaurant.addr2}`}`}
                  title={restaurant.title}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
