import ReviewCardProps from "types/ReviewCardProps";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import DetailLeft from "@components/detail/DetailLeft";
import DetailRight from "@components/detail/DetailRight";
import NearbyPlacesSection from "@components/detail/NearbyPlacesSection";
import { PATH } from "@constants/path";
import { useParams } from "react-router";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState } from "react";
import CategoryMap from "@components/food/CategoryMap";

interface Item {
  contentid: string;
  originimgurl: string | null;
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

const ReviewData: ReviewCardProps[] = [
  {
    src: "/images/shpping/photo-review-dummy-1.png",
    contents:
      "2박3일 캠핑하는 동안 모든 게 좋았습니다. (언덕은 운동하는 기분으로) 깔끔하고 힐링하는 분위기 속에서 정말 잘 쉬었습니다. 다른 캠핑장을 가봐도 여기가 최고인 것 같아요!",
    timestamp: "24분 전",
    userId: "사용자 이름1",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-2.png",
    contents:
      "캠핑장은 너무 좋았고, 특히 밤하늘의 별이 정말 아름다웠어요. 아이들과 함께 별자리를 찾아보며 특별한 추억을 만들었습니다. 캠핑장 근처 산책로도 잘 정비되어 있어 좋았어요.",
    timestamp: "1시간 전",
    userId: "사용자 이름2",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-3.png",
    contents:
      "시설이 정말 깨끗했고, 관리가 잘 되어 있었습니다. 주변 경치도 훌륭했고, 특히 아침에 새소리를 들으며 일어나는 기분은 최고였어요. 다시 오고 싶은 곳입니다.",
    timestamp: "2시간 전",
    userId: "사용자 이름3",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-4.png",
    contents:
      "주차 공간이 넓어서 가족 단위로 방문하기 편리했어요. 근처에 있는 계곡에서 물놀이도 즐기고, 캠핑장에서 바비큐 파티도 했습니다. 다음에도 꼭 올 예정입니다.",
    timestamp: "3시간 전",
    userId: "사용자 이름4",
    path: PATH.communityPostPath,
  },
];

export default function FoodDetail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [restaurantImg, setRestaurantImgList] = useState<Item[]>([]);
  const [restaurantData, setRestaurantData] = useState<{
    common: Item[];
    intro: Item[];
  }>({ common: [], intro: [] });
  const { id } = useParams();
  const fetchRestaurantsDetail = async () => {
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
      console.log(imgItems);

      setRestaurantImgList(imgItems);
      setRestaurantData({ common: detailCommonItems, intro: introItems });

      console.log(detailCommonItems);
    } catch (error) {
      setError("데이터를 불러오는데 실패하였습니다.");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantsDetail();
  }, []);

  return (
    <>
      {isLoading && "로딩중.."}
      {error}
      <section className="mt-20 w-full flex gap-11 mb-14">
        {Array.isArray(restaurantImg) && restaurantImg.length > 0 ? (
          <DetailLeft
            image1={restaurantImg[0]?.originimgurl || "/images/food/restaurants/restaurant2.png"}
            image2={restaurantImg[1]?.originimgurl || "/images/food/restaurants/restaurant3.png"}
            image3={restaurantImg[2]?.originimgurl || "/images/food/restaurants/restaurant4.png"}
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
          phone={restaurantData.common[0]?.tel || "전화번호가 등록되어있지 않습니다."}
          bookmarked={true}
          contenttypeid={"39"}
          overview={restaurantData.common[0]?.overview || "편안하게 방문 부탁드립니다."}
          opentimefood={restaurantData.intro[0]?.opentimefood || "연중무휴"}
          firstmenu={restaurantData.intro[0]?.firstmenu || ""}
          infocenterfood={
            restaurantData.intro[0]?.infocenterfood || "전화번호가 등록되어있지 않습니다."
          }
          parkingfood={restaurantData.intro[0]?.parkingfood || "유로주차장 1시간무료"}
          restdatefood={restaurantData.intro[0]?.restdatefood || "연중무휴"}
        />
      </section>
      <NearbyPlacesSection />
      <div className="mb-[200px]">
        <div className="text-[26px] font-bold mb-5">리뷰 모음</div>
        <div className="grid grid-cols-2 justify-between items-center gap-4">
          {ReviewData.map((item: ReviewCardProps, idx: number) => (
            <ReviewCard
              key={idx}
              src={item.src}
              contents={item.contents}
              timestamp={item.timestamp}
              userId={item.userId}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
