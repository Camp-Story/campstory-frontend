import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import CampingSpotItemType from "../../types/CampingSpotItemType";

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

function CampingSpotItem({ path, src, name, category }: CampingSpotItemType) {
  return (
    <li>
      <Link
        to={path || "/"}
        className="block w-56 h-56 rounded-xl bg-gray-scale-100 mb-4 overflow-hidden"
      >
        <img src={src || ""} alt="캠핑장 이미지" className="w-full h-full object-cover" />
      </Link>
      <h3 className="text-sub-title font-bold mb-1">{name}</h3>
      <p className="text-gray-scale-300">{category}</p>
    </li>
  );
}

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
