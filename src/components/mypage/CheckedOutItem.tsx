interface CheckedOutItemProps {
  title: string;
  location: string;
  image: string;
}

export default function CheckedOutItem({ title, location, image }: CheckedOutItemProps) {
  return (
    <li className="flex gap-6">
      <div className="size-[150px] rounded-xl overflow-hidden">
        <img
          className="size-full grayscale object-cover"
          src={image || "https://placehold.co/200x200?text=CAMP+STORY"}
          alt="thumbnail"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="inline rounded-full px-3 py-1 text-body1 bg-secondary-300/20">
            이용완료
          </div>
          <div className="mt-2 text-body1 mb-1">{title || "장소명이 없습니다."}</div>
          <div className="text-body2 text-gray-scale-400">{location || "주소가 없습니다."}</div>
        </div>
        <button className="text-body2 bg-gray-200 w-20 py-1 flex items-center justify-center rounded-sm">
          다시예약
        </button>
      </div>
    </li>
  );
}
