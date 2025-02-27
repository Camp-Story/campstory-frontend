import AdditionalInfo from "../AdditionalInfo";
import QuestionTag from "@components/community/QuestionTag";

export default function QuestionCard() {
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* UserInfo */}
        <div className="flex gap-2 items-center">
          <img
            src="https://placehold.co/30x30?text=CAMP+STORY"
            alt="profile"
            className="rounded-full w-[40px] h-[40px]"
          />
          <span className="text-sub-title font-bold text-gray-scale-400">한라봉</span>
        </div>

        {/* card */}
        <div className="flex flex-col gap-[10px] bg-gray-scale-0 w-[832px] p-[24px] rounded-sm drop-shadow-custom">
          <div className="flex items-start gap-5">
            <div className="flex gap-4 items-start">
              <div className="text-primary-500 -mt-1.5 font-bold text-[26px]">Q.</div>
              <div className="w-10/12 text-body1 font-medium text-gray-scale-400">
                안녕하세요~ 보통 캠핑장 매점에서 구매하는 주류는 가격이 어떻게 될까용?긴 문장 테스트
                입니다. 긴 문장 테스트 입니다. 긴 문장 테스트 입니다. 긴 문장 테스트 입니다. 긴 문장
                테스트 입니다.
              </div>
            </div>
            <div className="text-body2 ml-auto text-gray-scale-300">2025.01.24</div>
          </div>

          {/* Tag */}
          <div className="flex gap-2 mt-[30px]">
            <QuestionTag tag="campingGear" />
            <QuestionTag tag="campsite" />
            <QuestionTag tag="tips" />
          </div>
          <AdditionalInfo
            bookmarked
            isLiked={false}
            likeCount={10}
            viewCount={115}
            time="24분"
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={() => alert("click like")}
          />
        </div>
      </div>
    </>
  );
}
