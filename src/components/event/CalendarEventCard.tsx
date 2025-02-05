import CalendarEventCardProps from "types/CalendarEventCardProps";
import { useNavigate } from "react-router";

export default function CalendarEventCard({ src, title, addr1, path }: CalendarEventCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path, { state: { event: { firstimage: src } } })}
      className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center"
    >
      <div className="w-[100px] h-[100px] mr-4">
        <img src={src} alt="행사 이미지" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <div className="text-[20px] font-bold text-gray-scale-500">{title}</div>
        <div className="flex items-center">
          <img
            src="/images/festival/event-tag-location.png"
            alt="지도 아이콘"
            className="w-[20px] h-[20px] mr-[5px]"
          />
          <div className="text-body1 w-56 whitespace-nowrap overflow-hidden text-ellipsis text-gray-scale-300">
            {addr1}
          </div>
        </div>
      </div>
    </div>
  );
}
