import CalendarEventCardProps from "types/CalendarEventCardProps";
import { useNavigate } from "react-router";

export default function CalendarEventCard({ src, title, addr1, path }: CalendarEventCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center"
    >
      <div className="w-[100px] h-[100px] ml-[15px] mr-6">
        <img src={src} alt="행사 이미지" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex-1">
        <div className="text-[20px] font-bold text-gray-scale-500">{title}</div>
        <div className="flex items-center">
          <img
            src="/images/festival/event-tag-location.png"
            alt="지도 아이콘"
            className="w-[20px] h-[20px] mr-[5px]"
          />
          <div className="text-[15px] text-gray-scale-300">{addr1}</div>
        </div>
      </div>
    </div>
  );
}
