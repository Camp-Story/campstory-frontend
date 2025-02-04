import { Outlet } from "react-router";
import "swiper/css";

export default function HomeLayout() {
  return (
    <>
      <main className="w-[1440px] m-auto">
        <div className="px-main" style={{ minHeight: "calc(100dvh - 392px)" }}>
          <Outlet />
        </div>
      </main>

      <footer className=" bg-gray-100 mt-28">
        <div className="w-[1440px] m-auto px-main pt-14 pb-28 flex justify-between">
          <div>
            <div className="w-64 mb-6">
              <img src="/images/CAMP-STORY-LOGO-3.png" alt="footer logo" />
            </div>
            <h2 className="text-sub-title font-normal text-gray-scale-300">
              자연속에서 써내려가는
              <br /> 우리의 이야기,
              <span className="font-bold text-gray-scale-400">CAMP STORY</span>
            </h2>
          </div>
          <div>
            <h2 className="text-sub-title font-bold text-gray-scale-400 mb-4">MEMBER</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-body1 font-light text-gray-scale-300">
              <li>전성우</li>
              <li>박소영</li>
              <li>하미리</li>
              <li>이석준</li>
              <li>이지환</li>
              <li>김태환</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sub-title font-bold text-gray-scale-400 mb-4">FEATURE</h2>
            <ul className="grid gap-y-2 text-body1 font-light text-gray-scale-300">
              <li>전국 캠핑장 정보</li>
              <li>전국 행사 정보</li>
              <li>전국 음식점 정보</li>
              <li>캠핑 용품 쇼핑</li>
              <li>커뮤니티 & 질문</li>
              <li>사용자 리뷰 & 후기</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sub-title font-bold text-gray-scale-400 mb-4">OPEN API</h2>
            <ul className="grid gap-y-2 text-body1 font-light text-gray-scale-300">
              <li>TOUR API</li>
              <li>Go Camping API</li>
              <li>NAVER Shopping API</li>
              <li>KAKAO API</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
