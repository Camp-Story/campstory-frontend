import CalendarEventCardProps from "types/CalendarEventCardProps";

export default function CalendarEventCard({
  src,
  title,
  addr1,
  handleClick,
}: CalendarEventCardProps) {
  return (
    <button
      onClick={handleClick}
      className="h-[130px] border border-gray-scale-200 px-4 py-2 rounded-xl bg-white drop-shadow-md flex items-center hover:brightness-75"
    >
      <div className="w-[100px] h-[100px] mr-4">
        <img src={src} alt="행사 이미지" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex-1 text-left">
        <div className="text-[20px] font-bold text-gray-scale-500">{title}</div>
        <div className="flex">
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
    </button>
  );
}
