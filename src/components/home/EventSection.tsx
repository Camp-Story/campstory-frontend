import { Link } from "react-router";

export default function EventSection() {
  return (
    <section className="mb-14">
      <h2 className="text-highlight font-impact">캠핑, 더 즐겁게!</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        다양한 이벤트와 특별한 혜택을 확인하고, 더 풍성한 캠핑을 즐겨보세요.
      </p>
      <article className="grid grid-cols-12 gap-4">
        <Link
          to="/"
          className="p-7 col-span-4 flex items-center justify-between bg-gray-scale-0 drop-shadow-custom rounded-xl"
        >
          <div className="py-4">
            <p className="text-sub-title text-gray-scale-300">매일, 매일 선착순!</p>
            <h4 className="font-impact text-title leading-10 text-gray-scale-400">
              1월 제휴
              <br />
              추가 할인
            </h4>
          </div>
          <div className="w-36 h-36 flex items-center justify-center bg-info-500 bg-opacity-20 rounded-full">
            <img src="/images/main/main-event-discount.png" alt="" />
          </div>
        </Link>
        <Link
          to="/"
          className="p-7 col-span-4 flex items-center justify-between bg-gray-scale-0 drop-shadow-custom rounded-xl"
        >
          <div className="py-4">
            <p className="text-sub-title text-gray-scale-300">캠스에서 엄선한</p>
            <h4 className="font-impact text-title leading-10 text-gray-scale-400">
              캠프스토리
              <br />
              PICK
            </h4>
          </div>
          <div className="w-36 h-36 flex items-center justify-center bg-secondary-300 bg-opacity-20 rounded-full">
            <img src="/images/main/main-event-thumb-up.png" alt="" className="" />
          </div>
        </Link>
        <Link
          to="/"
          className="p-7 col-span-4 flex items-center justify-between bg-gray-scale-0 drop-shadow-custom rounded-xl"
        >
          <div className="py-4">
            <p className="text-sub-title text-gray-scale-300">황금연휴엔 캠핑!</p>
            <h4 className="font-impact text-title leading-10 text-gray-scale-400">
              전국 인기
              <br />
              캠핑장 보러가기
            </h4>
          </div>
          <div className="w-36 h-36 flex items-center justify-center bg-primary-500 bg-opacity-20 rounded-full">
            <img src="/images/main/main-event-tent.png" alt="" />
          </div>
        </Link>
      </article>
    </section>
  );
}
