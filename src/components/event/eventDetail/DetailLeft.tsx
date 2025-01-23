export default function DetailLeft() {
  return (
    <article className="w-7/12 grid grid-cols-6 gap-5">
      <div className="col-span-6 h-[444px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={"/images/festival/event-dummy.png"}
          alt="행사 이미지 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={"https://placehold.co/450x250?text=CAMP+STORY"}
          alt="행사 이미지 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={"https://placehold.co/450x250?text=CAMP+STORY"}
          alt="행사 이미지 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl flex items-center justify-center text-sub-title">
        더보기
      </div>
      <div className="col-span-6 h-64 bg-gray-scale-100 rounded-xl overflow-hidden flex items-center justify-center">
        기능 미정
      </div>
    </article>
  );
}
