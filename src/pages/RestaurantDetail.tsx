import DetailLeft from "@components/detail/DetailLeft";
import DetailRight from "@components/detail/DetailRight";
import NearbyPlacesSection from "@components/detail/NearbyPlacesSection";

import { useParams } from "react-router";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState, useCallback } from "react";
import CategoryMap from "@components/food/CategoryMap";
import ReviewSection from "@components/detail/ReviewSection";
import { NearbyRestaurantResponse } from "types/RestaurantResponse";
import { PATH } from "@constants/path";
import useBookMark from "@hooks/useBookmark";
import { RESTAURANT_CHANNEL_ID } from "@constants/channelId";

interface Item {
  contentid: string;
  originimgurl: string;
  title: string;
  tel: string;
  cat3: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  overview: string;
  homepage: string;
  addr1: string;
  addr2: string;
  opentimefood: string;
  parkingfood: string;
  firstmenu: string;
  infocenterfood: string;
  restdatefood: string;
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

export default function FoodDetail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [restaurantImg, setRestaurantImgList] = useState<Item[]>([]);
  const [restaurantData, setRestaurantData] = useState<{
    common: Item[];
    intro: Item[];
  }>({ common: [], intro: [] });
  const [restaurants, setRestaurants] = useState<NearbyRestaurantResponse[]>([]);

  const { id } = useParams();

  const { isBookmarked, handleUnlike, handleLike } = useBookMark(RESTAURANT_CHANNEL_ID);

  const bookmarked = isBookmarked(id || "");

  const fetchRestaurantsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await tourApiInstance.get("/areaBasedList1", {
        params: {
          numOfRows: 5,
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
      });

      const items: NearbyRestaurantResponse[] = response.data.response.body.items.item;

      setRestaurants(items);
    } catch (error) {
      console.log(error);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchRestaurantsDetail = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const responseImg = await tourApiInstance.get<ApiResponse>("/detailImage1", {
        params: {
          contentId: id,
          numOfRows: 10,
          pageNo: 1,
          imageYN: "Y",
          subImageYN: "Y",
        },
      });

      const responseDetailCommon = await tourApiInstance.get<ApiResponse>("/detailCommon1", {
        params: {
          contentId: id,
          catcodeYN: "Y",
          overviewYN: "Y",
          addrinfoYN: "Y",
          mapinfoYN: "Y",
          defaultYN: "Y",
        },
      });

      const responseIntro = await tourApiInstance.get<ApiResponse>("/detailIntro1", {
        params: {
          contentId: id,
          contentTypeId: "39",
        },
      });
      const imgItems = responseImg.data.response.body.items.item;
      const detailCommonItems = responseDetailCommon.data.response.body.items.item;
      const introItems = responseIntro.data.response.body.items.item;

      setRestaurantImgList(imgItems);
      setRestaurantData({ common: detailCommonItems, intro: introItems });
    } catch (error) {
      setError("데이터를 불러오는데 실패하였습니다.");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchRestaurantsDetail();
    fetchRestaurantsData();
  }, [fetchRestaurantsData, fetchRestaurantsDetail]);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>{error}</p>;
  if (!restaurantData.intro.length || !restaurantData.common.length)
    return <p>데이터를 불러오지 못했습니다.</p>;

  return (
    <>
      <section className="mt-20 w-full flex gap-11 mb-14">
        {restaurantImg !== undefined ? (
          <DetailLeft
            image1={restaurantImg[0]?.originimgurl}
            image2={restaurantImg[1]?.originimgurl}
            image3={restaurantImg[2]?.originimgurl}
          />
        ) : (
          <DetailLeft
            image1={"/images/food/restaurants/restaurant2.png"}
            image2={"/images/food/restaurants/restaurant3.png"}
            image3={"/images/food/restaurants/restaurant4.png"}
          />
        )}

        <DetailRight
          category={CategoryMap[restaurantData.common[0]?.cat3] || "카테고리 없음"}
          title={restaurantData.common[0]?.title}
          address={restaurantData.common[0]?.addr1 || "주소정보 없음"}
          phone={restaurantData.intro[0]?.infocenterfood || "전화번호가 등록되어있지 않습니다."}
          bookmarked={!!bookmarked}
          contenttypeid={"39"}
          overview={restaurantData.common[0]?.overview || "편안하게 방문 부탁드립니다."}
          opentimefood={restaurantData.intro[0]?.opentimefood || "연중무휴"}
          firstmenu={restaurantData.intro[0]?.firstmenu || ""}
          parkingfood={restaurantData.intro[0]?.parkingfood || "유료 주차장 1시간무료"}
          restdatefood={restaurantData.intro[0]?.restdatefood || "연중무휴"}
          mapX={restaurantData.common[0].mapx}
          mapY={restaurantData.common[0].mapy}
          handleClickBookmark={(e) =>
            bookmarked
              ? handleUnlike(e, bookmarked._id)
              : handleLike(e, id || "", {
                  category: CategoryMap[restaurantData.common[0]?.cat3],
                  image: restaurantImg[0]?.originimgurl,
                  location: restaurantData.common[0]?.addr1,
                  title: restaurantData.common[0]?.title,
                })
          }
        />
      </section>
      <NearbyPlacesSection path={PATH.restaurantSearch} places={restaurants} />
      <ReviewSection />
    </>
  );
}
