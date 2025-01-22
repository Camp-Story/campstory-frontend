import CampingSpotItemType from "types/CampingSpotItemType";
import CampingSpotItem from "./CampingSpotItem";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DUMMY_SPOTS: CampingSpotItemType[] = [
  {
    path: "",
    src: "/images/camping/camping-category-1.png",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    path: "",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑",
  },
  {
    path: "",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션",
  },
  {
    path: "/",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "캠핑",
  },
  {
    path: "",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    path: "",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    path: "",
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
];

export default function TopCampingSpotsSection() {
  return (
    <section className="mb-14">
      <h2 className="text-highlight font-impact">인기 캠핑장</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        나를 위한 근사한 휴가를 계획해보세요.
      </p>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {DUMMY_SPOTS.map((item) => (
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
    </section>
  );
}
