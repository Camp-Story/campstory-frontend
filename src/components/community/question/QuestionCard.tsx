import AdditionalInfo from "../AdditionalInfo";
import UserProfile from "../UserProfile";

interface QuestionCardProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleClick: () => void;
  userName: string;
  coverImage: string;
  title: string;
  timeStamp: string;
}

export default function QuestionCard({
  handleClick,
  userName,
  coverImage,
  title,
  timeStamp,
}: QuestionCardProps) {
  return (
    <>
      <div onClick={handleClick} className="flex flex-col gap-3 hover:cursor-pointer">
        <UserProfile nickname={userName} profileUrl={coverImage} />
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-[600px] p-[20px] rounded-lg drop-shadow-custom">
          <div className="flex gap-4 items-center">
            <div className="text-primary-500 font-bold text-[26px]">Q.</div>
            <div className="text-body1 font-medium text-gray-scale-400">{title}</div>
          </div>
          <AdditionalInfo
            bookmarked
            isLiked={false}
            likeCount={10}
            viewCount={115}
            time={timeStamp}
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={() => alert("click like")}
          />
        </div>
      </div>
    </>
  );
}
