import AdditionalInfo from "../AdditionalInfo";
import UserProfile from "../UserProfile";

interface QuestionCardProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleClick: () => void;
}

export default function QuestionCard({ handleClick }: QuestionCardProps) {
  return (
    <>
      <div onClick={handleClick} className="flex flex-col gap-3 hover:cursor-pointer">
        <UserProfile nickname="사용자 닉네임" profileUrl="" />
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-[600px] p-[20px] rounded-lg drop-shadow-custom">
          <div className="flex gap-4 items-center">
            <div className="text-primary-500 font-bold text-[26px]">Q.</div>
            <div className="text-body1 font-medium text-gray-scale-400">
              안녕하세요~ 보통 캠핑장 매점에서 구매하는 주류는 가격이 어떻게 될까용?
            </div>
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
