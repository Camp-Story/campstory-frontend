import { Link } from "react-router";

export default function FoodCategoryItem({ src, category }: { src: string; category: string }) {
  return (
    <li className="col-span-2">
      <Link to="/" className="block rounded-full overflow-hidden">
        <img src={src} alt="음식 카테고리 이미지" className="mb-2" />
      </Link>
      <h4 className="text-center text-sub-title font-bold text-gray-scale-400">{category}</h4>
    </li>
  );
}
