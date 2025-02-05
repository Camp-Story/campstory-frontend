import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import CampingSpotItemType from "../../types/CampingSpotItemType";
import { PATH } from "@constants/path";
import PopularCampCardProps from "types/PopularCampingCardProps";
import useCamping from "@hooks/useCamping";
import SwiperArrow from "@components/common/SwiperArrow";
import useSwiper from "@hooks/useSwiper";

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

function CampingSpotItem({ path, src, name, category }: CampingSpotItemType) {
  const { searchAndNavigate } = useCamping();

  const handleClick = () => {
    searchAndNavigate(name, path);
  };

  return (
    <article>
      <div
        onClick={handleClick}
        className="block w-56 h-56 rounded-xl bg-gray-scale-100 mb-4 overflow-hidden cursor-pointer"
      >
        <img
          src={src || "https://placehold.co/224x224?text=CAMP+STORY"}
          alt="캠핑장 이미지"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sub-title font-bold mb-1">{name}</h3>
      <p className="text-gray-scale-300">{category}</p>
    </article>
  );
}

export default function TopCampingSpotsSection() {
  const { handleSlideChange, handleNext, handlePrev, isBeginning, isEnd, swiperRef } = useSwiper();

  return (
    <section className="mb-7 relative">
      <h2 className="text-highlight font-impact">인기 캠핑장</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        나를 위한 근사한 휴가를 계획해보세요.
      </p>
      <div className="relative overflow-visible">
        <SwiperArrow
          handleNext={handleNext}
          handlePrev={handlePrev}
          isBeginning={isBeginning}
          isEnd={isEnd}
          top="sm"
        />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={32}
          slidesPerView={5}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {PopularCampingData.map((item) => (
            <SwiperSlide key={item.src}>
              <CampingSpotItem
                path={item.path}
                src={item.src}
                name={item.name}
                category={item.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to={PATH.campingSearch} className="absolute top-5 font-bold right-0 text-info-500">
        더보기
      </Link>
    </section>
  );
}
