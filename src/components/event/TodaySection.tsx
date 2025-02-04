import TodaySectionProps from "types/TodaySectionProps";
import { useNavigate } from "react-router";

export default function TodaySection({
  src,
  title,
  subTitle,
  tag,
  path,
  contentId,
}: TodaySectionProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const event = {
      contentid: contentId,
    };

    navigate(path(contentId), { state: { event } });
  };

  return (
    <section className="flex mx-[105px] h-[400px] my-9">
      <div className="flex-1 mr-[70px]">
        <div className="font-impact text-[52px] leading-tight text-gray-scale-500 mb-4">
          {title}
        </div>
        <div className="text-[20px] leading-tight text-gray-scale-300 mb-11">{subTitle}</div>
        <div className="flex items-center text-[20px] mb-12 text-gray-scale-300">
          {tag.map((t, index) => (
            <div key={index} className="flex items-center mr-4">
              <img
                src="/images/festival/event-tag-star.png"
                alt="별 모양 태그"
                className="inline-block mr-2"
              />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="pb-4">
          <button
            onClick={handleClick}
            className="border p-2 rounded-full text-[20px] text-gray-scale-400 font-bold bg-gray-scale-100 w-[302px] h-[58px] flex justify-center items-center shadow-sm hover:bg-gray-300 transition"
          >
            더 알아보기
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={src} alt="오늘의 행사 이미지" className="max-w-[514px]" />
      </div>
    </section>
  );
}
