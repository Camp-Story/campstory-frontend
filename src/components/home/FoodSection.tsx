import { PATH } from "@constants/path";
import { Link, useNavigate } from "react-router";

interface FoodCategoryProps {
  src: string;
  category: string;
  catId: string;
}

const FOOD_CATEGORY: FoodCategoryProps[] = [
  {
    src: "/images/main/main-food-korea.png",
    category: "한식",
    catId: "A05020100",
  },
  {
    src: "/images/main/main-food-eng.png",
    category: "양식",
    catId: "A05020200",
  },
  {
    src: "/images/main/main-food-china.png",
    category: "중식",
    catId: "A05020400",
  },
  {
    src: "/images/main/main-food-japan.png",
    category: "일본",
    catId: "A05020300",
  },
];

function FoodCategoryItem({ src, category, catId }: FoodCategoryProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: PATH.restaurantSearch,
      search: `search?cat3=${catId}`,
    });
  };

  return (
    <li className="col-span-2">
      <div onClick={handleClick} className="block rounded-full overflow-hidden">
        <img src={src} alt="음식 카테고리 이미지" className="mb-2" />
      </div>
      <h4 className="text-center text-sub-title font-bold text-gray-scale-400">{category}</h4>
    </li>
  );
}

export default function FoodSection() {
  return (
    <article className="relative col-start-1 col-end-5">
      <h2 className="text-highlight font-impact">맛을 찾아서</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        캠핑을 더욱 특별하게 만들어줄 음식을 만나보세요.
      </p>
      <ul className="grid grid-cols-4 gap-4">
        {FOOD_CATEGORY.map((item) => (
          <FoodCategoryItem
            key={item.category}
            src={item.src}
            category={item.category}
            catId={item.catId}
          />
        ))}
      </ul>
      <Link to={PATH.restaurantSearch} className="absolute top-5 font-bold right-0 text-info-500">
        더보기
      </Link>
    </article>
  );
}
