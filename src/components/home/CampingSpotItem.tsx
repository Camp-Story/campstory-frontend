import CampingSpotItemType from "../../types/CampingSpotItemType";

export default function CampingSpotItem({ src, name, category }: CampingSpotItemType) {
  return (
    <li>
      <div className="w-56 h-56 rounded-xl bg-gray-scale-100 mb-4 overflow-hidden">
        <img
          src={src || "/images/camping/camping-category-1.png"}
          alt="캠핑장 이미지"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sub-title font-bold mb-1">{name}</h3>
      <p className="text-gray-scale-300">{category}</p>
    </li>
  );
}
