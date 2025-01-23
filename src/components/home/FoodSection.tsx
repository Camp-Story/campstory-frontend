import { Link } from "react-router";

const DUMMY_FOOD_CATEGORY: { src: string; category: string }[] = [
  {
    src: "/images/main/main-food-korea.png",
    category: "한식",
  },
  {
    src: "/images/main/main-food-eng.png",
    category: "양식",
  },
  {
    src: "/images/main/main-food-china.png",
    category: "중식",
  },
  {
    src: "/images/main/main-food-japan.png",
    category: "일본",
  },
];

function FoodCategoryItem({ src, category }: { src: string; category: string }) {
  return (
    <li className="col-span-2">
      <Link to="/" className="block rounded-full overflow-hidden">
        <img src={src} alt="음식 카테고리 이미지" className="mb-2" />
      </Link>
      <h4 className="text-center text-sub-title font-bold text-gray-scale-400">{category}</h4>
    </li>
  );
}

export default function FoodSection() {
  return (
    <article className="col-start-1 col-end-5">
      <h2 className="text-highlight font-impact">맛을 찾아서</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        캠핑을 더욱 특별하게 만들어줄 음식을 만나보세요.
      </p>
      <ul className="grid grid-cols-4 gap-4">
        {DUMMY_FOOD_CATEGORY.map((item) => (
          <FoodCategoryItem src={item.src} category={item.category} />
        ))}
      </ul>
    </article>
  );
}
