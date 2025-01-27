import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import { RESTURANT_CATEGORY } from "@constants/filters";
import { useEffect } from "react";

import { tourApiInstance } from "@utils/axiosInstance";

interface RestaurantResponse {
  addr1: string;
  addr2: string;
  cat1: string;
  cat2: string;
  cat3: string;
  firstimage: string;
  firstimage2: string;
  tel: string;
  title: string;
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
export default function RestaurantSearch() {
  // const [restaurants, setRestaurants] = useState<RestaurantResponse[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  const fetchRestaurantsData = async () => {
    // setIsLoading(true);
    // setError(null);

    try {
      const response = await tourApiInstance.get<ApiResponse>("/locationBasedList1", {
        params: {
          numOfRows: 50,
          pageNo: 1,
          listYN: "Y",
          arrange: "O",
          contentTypeId: 39,
          mapX: "126.981611",
          mapY: "37.568477",
          radius: 1000,
          // modifiedtime: "",
        },
      });
      const items = response.data?.response?.body?.items?.item;
      console.log(items);
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);
  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
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
          <h2 className="text-[26px] font-bold text-gray-scale-400">'음식' 검색 결과 14개</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={true}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
          </div>
        </div>
      </div>
    </>
  );
}
