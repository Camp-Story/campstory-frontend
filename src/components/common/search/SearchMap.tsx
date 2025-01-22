export default function SearchMap() {
  return (
    <div className="relative">
      <img src="/images/map-small.png" alt="map small" />
      <div
        className="absolute top-0 w-full h-full flex items-center justify-center"
        onClick={() => alert("see map")}
      >
        <div className="w-fit text-xl bg-info-500 text-gray-scale-100 rounded px-[23px] py-[13px]">
          지도 보기
        </div>
      </div>
    </div>
  );
}
