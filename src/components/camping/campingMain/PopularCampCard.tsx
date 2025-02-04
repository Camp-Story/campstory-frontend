import PopularCampCardProps from "types/PopularCampingCardProps";
import useCamping from "@hooks/useCamping";

export default function PopularCampCard({ rank, src, category, name, path }: PopularCampCardProps) {
  const { searchAndNavigate } = useCamping();

  const handleClick = () => {
    searchAndNavigate(name, path);
  };

  return (
    <div onClick={handleClick} className="flex flex-col">
      <div className="relative h-[300px] w-[300px] hover:brightness-[0.8]">
        <img
          src={src}
          alt="CampingImage"
          className="absolute top-0 size-full object-cover rounded"
        />
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
