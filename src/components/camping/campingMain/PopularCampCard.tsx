import { useNavigate } from "react-router";
import PopularCampCardProps from "types/PopularCampingCardProps";

export default function PopularCampCard({ rank, src, category, name, path }: PopularCampCardProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(path)} className="flex flex-col">
      <div className="relative h-[300px] hover:brightness-[0.8]">
        <img src={src} alt="CampingImage" className="absolute top-0 w-[300px]" />
        <img
          src="images/camping/Gradient.png"
          alt="gradient"
          className="absolute top-0 w-[300px]"
        />
        <div className="absolute font-impact text-gray-scale-0 text-[100px] top-[188px] left-10">
          {rank}
        </div>
      </div>
      <div className="text-body1 font-bold mt-4 mb-[4px] text-gray-scale-300">{category}</div>
      <div className="text-sub-title font-extrabold text-gray-scale-400">{name}</div>
    </div>
  );
}
