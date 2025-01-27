// interface CampingInfoProps<T extends string = string> {
//   [key: string]: T;
// }

interface CampingDetailProps {
  shortIntro: string;
  description: string;
  campingFacilities: string;
  nearbyFacilities: string;
  homepage: string;
}

export default function SpotAboutSection({
  shortIntro,
  description,
  campingFacilities,
  nearbyFacilities,
  homepage,
}: CampingDetailProps) {
  return (
    <section className="grid grid-cols-12 mb-14">
      <div className="col-span-5 flex flex-col justify-between">
        <div>
          <h3 className="text-[26px] font-bold mb-3">캠핑장 소개</h3>
          {shortIntro && (
            <span className="block text-body1 text-gray-scale-400 mb-3">
              <strong className="mr-4 text-gray-scale-500">한줄소개</strong>
              {shortIntro}
            </span>
          )}
          <p className="text-body1 text-gray-scale-400">{description && description}</p>
        </div>
        <div>
          <h3 className="text-[26px] font-bold mb-3">기본 정보</h3>
          <ul>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">부대시설</strong>
                {campingFacilities}
              </span>
            </li>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">주변시설</strong>
                {nearbyFacilities}
              </span>
            </li>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">홈페이지</strong>
                {homepage}
              </span>
            </li>
          </ul>
          <button className="text-secondary-500 font-bold">더보기</button>
        </div>
      </div>
      <div className="col-start-7 -col-end-1 w-full h-[400px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img src="/images/map-large.png" alt="[임시] 지도 이미지" className="w-full object-cover" />
      </div>
    </section>
  );
}
