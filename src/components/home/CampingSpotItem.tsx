import { Link } from "react-router";
import CampingSpotItemType from "../../types/CampingSpotItemType";

export default function CampingSpotItem({ path, src, name, category }: CampingSpotItemType) {
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
