import PopularCampCard from "@components/camping/campingMain/PopularCampCard";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import Subtitle from "@components/camping/campingMain/Subtitle";
import PopularCampCardProps from "types/PopularCampingCardProps";
import CategoryCard from "@components/camping/campingMain/CategoryCard";
import SearchBar from "@components/common/main/SearchBar";
import ReviewCardProps from "types/ReviewCardProps";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

// Swiper 관련 모듈
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const PopularCampingData: PopularCampCardProps[] = [
  {
    rank: 1,
    src: "https://gocamping.or.kr/upload/camp/100143/6658baV6n0C7YWf8c14NbOIG.jpg",
    category: "일반야영장,글램핑",
    name: "포천 라온글램핑&오토캠핑장",
    path: PATH.campingInfo("100143"),
  },
  {
    rank: 2,
    src: "https://gocamping.or.kr/upload/camp/100012/7773TzZfFrXfsE7BDqFThHcz.jpg",
    category: "일반야영장",
    name: "포에스카라반파크",
    path: PATH.campingInfo("100012"),
  },
  {
    rank: 3,
    src: "https://gocamping.or.kr/upload/camp/100086/9786dCp7UcR4L4AV1bO3JJS0.jpg",
    category: "글램핑",
    name: "노마드글램핑",
    path: PATH.campingInfo("100086"),
  },
  {
    rank: 4,
    src: "https://gocamping.or.kr/upload/camp/100014/8783jnJVhUEMxHYpQohDroQP.jpg",
    category: "글램핑",
    name: "학암포글램핑",
    path: PATH.campingInfo("100014"),
  },
  {
    rank: 5,
    src: "https://gocamping.or.kr/upload/camp/100231/5031zWs3pLvMY7zBvq7xHILf.jpg",
    category: "카라반",
    name: "가평 리오카라반",
    path: PATH.campingInfo("100231"),
  },
  {
    rank: 6,
    src: "https://gocamping.or.kr/upload/camp/100002/20339geHYKzGA9OjsoC0nFwX.jpg",
    category: "일반야영장",
    name: "힐링피아 카라반 글램핑 풀 캠핑장",
    path: PATH.campingInfo("100002"),
  },
  {
    rank: 7,
    src: "https://gocamping.or.kr/upload/camp/100234/2153uRmKRQ283E8reKpprw7M.jpg",
    category: "일반야영장,카라반",
    name: "산마루카라반",
    path: PATH.campingInfo("100234"),
  },
];

const ReviewData: ReviewCardProps[] = [
  {
    src: "/images/shopping/photo-review-dummy-1.png",
    profileSrc: "/images/review/ReviewProfileImg-01.jpg",
    contents:
      "2박3일 캠핑하는 동안 모든 게 좋았습니다. (언덕은 운동하는 기분으로) 깔끔하고 힐링하는 분위기 속에서 정말 잘 쉬었습니다. 다른 캠핑장을 가봐도 여기가 최고인 것 같아요!",
    timestamp: "24분 전",
    userId: "사용자 이름1",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-2.png",
    profileSrc: "/images/review/ReviewProfileImg-02.jpg",
    contents:
      "캠핑장은 너무 좋았고, 특히 밤하늘의 별이 정말 아름다웠어요. 아이들과 함께 별자리를 찾아보며 특별한 추억을 만들었습니다. 캠핑장 근처 산책로도 잘 정비되어 있어 좋았어요.",
    timestamp: "1시간 전",
    userId: "사용자 이름2",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-3.png",
    profileSrc: "/images/review/ReviewProfileImg-03.jpg",
    contents:
      "시설이 정말 깨끗했고, 관리가 잘 되어 있었습니다. 주변 경치도 훌륭했고, 특히 아침에 새소리를 들으며 일어나는 기분은 최고였어요. 다시 오고 싶은 곳입니다.",
    timestamp: "2시간 전",
    userId: "사용자 이름3",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-4.png",
    profileSrc: "/images/review/ReviewProfileImg-04.png",
    contents:
      "주차 공간이 넓어서 가족 단위로 방문하기 편리했어요. 근처에 있는 계곡에서 물놀이도 즐기고, 캠핑장에서 바비큐 파티도 했습니다. 다음에도 꼭 올 예정입니다.",
    timestamp: "3시간 전",
    userId: "사용자 이름4",
    path: PATH.communityPostPath,
  },
];

export default function CampingMain() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[60px]">
      {/* Banner */}
      <div className="relative">
        <img src="/images/camping/camping-banner.png" alt="banner" className="w-full" />
        <SearchBar
          handleSubmit={(input) =>
            navigate({ pathname: PATH.campingSearch, search: `?keyword=${input}` })
          }
          className="absolute bottom-[60px] left-[50%] -translate-x-[50%]"
        />
      </div>
      <div>
        <Subtitle>카테고리별 캠핑장</Subtitle>
        <div className="flex gap-2 justify-between items-center">
          <CategoryCard
            src="/images/camping/camping-category-1.png"
            criteria="category"
            value="일반야영장"
          />
          <CategoryCard
            src="/images/camping/camping-category-2.png"
            criteria="category"
            value="글램핑"
          />
          <CategoryCard
            src="/images/camping/camping-category-3.png"
            criteria="category"
            value="카라반"
          />
          <CategoryCard
            src="/images/camping/camping-category-4.png"
            criteria="category"
            value="자동차야영장"
          />
        </div>
      </div>
      <div>
        <Subtitle>인기 캠핑장</Subtitle>
        <Swiper
          style={{ width: "100%", height: "auto" }}
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 2500 }}
        >
          {PopularCampingData.map((item: PopularCampCardProps, idx: number) => (
            <SwiperSlide key={idx}>
              <PopularCampCard
                rank={item.rank}
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
          <CategoryCard src="/images/camping/Seoul.png" criteria="area" value="서울" />
          <CategoryCard src="/images/camping/Busan.png" criteria="area" value="부산" />
          <CategoryCard src="/images/camping/Jeju.png" criteria="area" value="제주도" />
          <CategoryCard src="/images/camping/Gangneung.png" criteria="area" value="강원도" />
          <CategoryCard src="/images/camping/Seoul.png" criteria="area" value="경기도" />
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
              profileSrc={item.profileSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
