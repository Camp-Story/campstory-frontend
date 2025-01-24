interface AreaCardProps {
  thumbnail: string;
  title: string;
  location: string;
}

export default function AreaCard({ location, thumbnail, title }: AreaCardProps) {
  return (
    <div className="flex gap-2 items-center rounded-full bg-gray-scale-100 px-2.5 py-1.5">
      <img
        src={thumbnail || "https://placehold.co/34x34?text=CAMP+STORY"}
        alt="camp thumbnail"
        className="rounded-full w-[34px] h-[34px]"
      />
      <div className="flex flex-col gap-[3px]">
        <span className="font-bold text-[13px] text-gray-scale-400">{title}</span>
        <span className="text-[11px] text-gray-scale-400">{location}</span>
      </div>
    </div>
  );
}
