import Banner from "@components/camping/campingMain/Banner";
import CategoryCard from "@components/camping/campingMain/CategoryCard";
import PopularCampCard from "@components/camping/campingMain/PopularCampCard";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import Subtitle from "@components/camping/campingMain/Subtitle";
import PopularCampCardProps from "types/PopularCampingCardProps";

// Swiper 관련 모듈
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCardProps from "types/ReviewCardProps";
import { PATH } from "@constants/path";

const PopularCampingData: PopularCampCardProps[] = [
  {
    src: "/images/camping/PopularCamping1.png",
    category: "글램핑",
    name: "스토리 캠핑장",
    path: PATH.campingInfoPath,
  },
  {
    src: "/images/camping/PopularCamping2.png",
    category: "카라반",
    name: "스토리 캠핑장",
    path: PATH.campingInfoPath,
  },
  {
    src: "/images/camping/PopularCamping3.png",
    category: "오토캠핑",
    name: "스토리 캠핑장",
    path: PATH.campingInfoPath,
  },
  {
    src: "/images/camping/PopularCamping4.png",
    category: "일반 야영장",
    name: "스토리 캠핑장",
    path: PATH.campingInfoPath,
  },
  {
    src: "/images/camping/PopularCamping5.png",
    category: "글램핑",
    name: "스토리 캠핑장",
    path: PATH.campingInfoPath,
  },
];

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
  {
    src: "/images/shpping/photo-review-dummy-1.png",
    contents:
      "직원분들이 정말 친절하셨고, 화장실과 샤워 시설도 깔끔해서 마음 편히 사용할 수 있었습니다. 저녁에 캠프파이어를 하며 옆 캠핑팀과도 교류할 수 있어 재미있었어요.",
    timestamp: "4시간 전",
    userId: "사용자 이름5",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-2.png",
    contents:
      "조용한 분위기에서 자연과 함께 힐링할 수 있는 최고의 장소입니다. 새벽에 보는 안개 낀 풍경이 너무 아름다웠어요. 강력 추천합니다!",
    timestamp: "5시간 전",
    userId: "사용자 이름6",
    path: PATH.communityPostPath,
  },
];

export default function CampingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Banner />
      <div>
        <Subtitle>카테고리별 캠핑장</Subtitle>
        <div className="flex gap-2 justify-between items-center">
          <CategoryCard src="/images/camping/camping-category-1.png" path={PATH.campingSearch}>
            캠핑
          </CategoryCard>
          <CategoryCard src="/images/camping/camping-category-2.png" path={PATH.campingSearch}>
            글램핑
          </CategoryCard>
          <CategoryCard src="/images/camping/camping-category-3.png" path={PATH.campingSearch}>
            카라반
          </CategoryCard>
          <CategoryCard src="/images/camping/camping-category-4.png" path={PATH.campingSearch}>
            오토캠핑
          </CategoryCard>
        </div>
      </div>
      <div>
        <Subtitle>인기 캠핑장</Subtitle>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 2500 }}
        >
          {PopularCampingData.map((item: PopularCampCardProps, idx: number) => (
            <SwiperSlide key={idx}>
              <PopularCampCard
                src={item.src}
                category={item.category}
                name={item.name}
                path={item.path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Subtitle>지역별 캠핑장</Subtitle>
        <div className="flex gap-2 justify-between items-center">
          <CategoryCard src="/images/camping/Seoul.png" path={PATH.campingSearch}>
            서울
          </CategoryCard>
          <CategoryCard src="/images/camping/Seoul.png" path={PATH.campingSearch}>
            제주도
          </CategoryCard>
          <CategoryCard src="/images/camping/Seoul.png" path={PATH.campingSearch}>
            부산
          </CategoryCard>
          <CategoryCard src="/images/camping/Seoul.png" path={PATH.campingSearch}>
            강릉
          </CategoryCard>
          <CategoryCard src="/images/camping/Seoul.png" path={PATH.campingSearch}>
            인천
          </CategoryCard>
        </div>
      </div>
      <div>
        <Subtitle>리뷰 모음</Subtitle>
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
    </div>
  );
}
