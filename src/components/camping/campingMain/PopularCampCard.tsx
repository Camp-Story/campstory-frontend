import PopularCampCardProps from "types/PopularCampingCardProps";

export default function PopularCampCard({ src, category, name }: PopularCampCardProps) {
  return (
    <div>
      <img src={src} alt="CampingImage" className="w-[300px]" />
      <div className="text-body1 font-bold mt-4 mb-[4px] text-gray-scale-300">{category}</div>
      <div className="text-sub-title font-extrabold text-gray-scale-400">{name}</div>
    </div>
  );
}
