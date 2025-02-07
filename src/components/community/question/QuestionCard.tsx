import AdditionalInfo from "../AdditionalInfo";
import UserProfile from "../UserProfile";
import useLike from "@./hooks/useLike";

interface QuestionCardProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  userName: string;
  coverImage: string;
  title: string;
  timeStamp: string;
  questionId: string;
  likes: number;
}

export default function QuestionCard({
  handleClick,
  userName,
  coverImage,
  title,
  timeStamp,
  questionId,
}: QuestionCardProps) {
  const { isLiked, likeCount, toggleLike } = useLike(questionId);

  return (
    <>
      <div onClick={handleClick} className="flex flex-col gap-3 hover:cursor-pointer">
        <UserProfile nickname={userName} profileUrl={coverImage} />
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-[600px] p-[20px] rounded-lg drop-shadow-custom">
          <div className="flex gap-2 items-center">
            <div className="text-primary-500 font-bold text-sub-title">Q.</div>
            <div className="text-body1 font-medium text-gray-scale-400 pt-1">{title}</div>
          </div>
          <AdditionalInfo
            bookmarked
            isLiked={isLiked}
            likeCount={likeCount}
            viewCount={115}
            time={timeStamp}
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={toggleLike}
          />
        </div>
      </div>
    </>
  );
}
