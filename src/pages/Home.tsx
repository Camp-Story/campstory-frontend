import CampingSpotItemType from "../types/CampingSpotItemType";
import CampingSpotItem from "@components/home/CampingSpotItem";
import CampingSearchForm from "../components/home/CampingSearchForm";

const DUMMY: CampingSpotItemType[] = [
  {
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
  {
    src: "",
    name: "속초 밤하늘 글램핑",
    category: "글램핑•펜션•오토캠핑",
  },
];

function Home() {
  return (
    <>
      <section className="relative mb-24">
        <img
          src="/images/main/main-banner-2.png"
          alt="자연 속에서 써내려가는 우리의 이야기, CAMP STORY"
          className="w-full object-cover"
        />
        <CampingSearchForm />
      </section>
      <section className="mb-14">
        <h2 className="text-highlight font-impact mb-2">인기 캠핑장</h2>
        <p className="text-sub-title text-gray-scale-300 mb-7">
          나를 위한 근사한 휴가를 계획해보세요.
        </p>
        <ul className="flex gap-8">
          {DUMMY.map((item) => (
            <CampingSpotItem
              key={item.src}
              src={item.src}
              name={item.name}
              category={item.category}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
