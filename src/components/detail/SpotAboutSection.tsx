// interface CampingInfoProps<T extends string = string> {
//   [key: string]: T;
// }

interface CampingDetailProps {
  shortIntro: string;
  description: string;
  sbrsEtc: string;
  posblFcltyCl: string;
  homepage: string;
}

export default function SpotAboutSection({
  shortIntro,
  description,
  sbrsEtc,
  posblFcltyCl,
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
          <p className="text-body1 text-gray-scale-400">
            {description && description}
            담양군 봉산면 기곡리에 위치한 힐링파크 담양점은 도심과 떨어져 조용히 숲과 자연에서
            자유로이 쉴수 있는 힐링파크다. 이곳은 기존 봉산관광농원이라는 이름으로 1998년 농림부
            1등급 판정을 받은 시설로 어느 휴양지에서도 느끼지 못했던 색다른 휴식과 즐거움을 동시에
            느낄 수 있다. 담양 힐링파크는 대한민국에서 둘째가라면 서러울 정도로 많은 편의시설을
            자랑하고 있는데 책을 좋아하는 사람이라면 누구든 이..
          </p>
        </div>
        <div>
          <h3 className="text-[26px] font-bold mb-3">기본 정보</h3>
          <ul>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">부대시설</strong>전기,무선인터넷,
                장작판매 {sbrsEtc}
              </span>
            </li>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">주변시설</strong>
                운동장,강/물놀이,농어촌체험시설 {posblFcltyCl}
              </span>
            </li>
            <li className="mb-3">
              <span className="block text-body1 text-gray-scale-400">
                <strong className="mr-4 text-gray-scale-500">홈페이지</strong>www.campstory.com{" "}
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
