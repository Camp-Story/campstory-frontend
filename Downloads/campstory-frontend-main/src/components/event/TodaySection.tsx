import TodaySectionProps from "types/TodaySectionProps";
import { Link } from "react-router";

export default function TodaySection({
  src,
  title,
  subTitle,
  tag,
  path,
  contentId,
}: TodaySectionProps) {
  return (
    <section className="flex mx-[106px] my-[100px] h-[400px]">
      <div className="flex-1 mr-[70px]">
        <div className="text-highlight text-[52px] text-gray-scale-500 mb-[20px]">{title}</div>
        <div className="text-[20px] text-gray-scale-300 mb-14 max-h-[72px] overflow-y-auto">
          {subTitle}
        </div>
        <div className="flex items-center text-[20px] text-gray-scale-300 font-bold mb-12">
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
          <Link
            to={`${path.replace(":id", contentId)}`}
            className="border p-2 rounded-xl text-gray-scale-400 font-bold bg-gray-scale-100 w-[302px] h-[58px] flex justify-center items-center shadow-sm hover:bg-gray-300 transition"
          >
            더 알아보기
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={src} alt="오늘의 행사 이미지" className="max-w-full" />
      </div>
    </section>
  );
}
