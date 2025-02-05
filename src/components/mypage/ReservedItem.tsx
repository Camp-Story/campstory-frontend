interface ReservedItemProps {
  title: string;
  location: string;
  image: string;
  date: Date;
}
// userId: string;
// status: "Before Use" | "Completed" | "Reservation Canceled";

export default function ReservedItem({ title, location, image, date }: ReservedItemProps) {
  const dDay = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <li className="flex gap-6 items-center">
      <div className="size-[200px] rounded-xl overflow-hidden">
        <img
          className="size-full object-cover"
          src={image || "https://placehold.co/200x200?text=CAMP+STORY"}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="inline rounded-full px-3 py-1 text-body1 bg-primary-500/20">예약확정</div>
        <div className="mt-2 text-sub-title font-bold text-primary-500">
          {`D${dDay > 0 ? "-" + dDay : "+" + Math.abs(dDay)}`}
        </div>
        <div className="text-gray-400 border w-72 my-3"></div>
        <div className="text-sub-title mb-1">{title || "장소명이 없습니다."}</div>
        <div className="text-body1 text-gray-scale-400 mb-2">{location || "주소가 없습니다."}</div>
        <div className="flex gap-9">
          <div className="text-gray-scale-500 text-body1">
            체크인
            <div className="text-gray-scale-500 font-bold">15:00</div>
          </div>
          <div className="text-gray-scale-500 text-body1">
            체크아웃
            <div className="text-gray-scale-500 font-bold">11:00</div>
          </div>
        </div>
        {/* <div className="text-[13px] bg-gray-300 w-[107px] h-[33px] mt-[18px] flex items-center justify-center rounded-sm">
          예약 상세
        </div> */}
      </div>
    </li>
  );
}
