export default function MyQuestion() {
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-full p-[20px] drop-shadow-custom">
          <div className="flex gap-4 items-center">
            <div className="text-primary-500 font-bold text-[26px]">Q.</div>
            <div className="text-body1 text-gray-scale-400">
              안녕하세요~ 보통 캠핑장 매점에서 구매하는 주류는 가격이 어떻게 될까용?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
