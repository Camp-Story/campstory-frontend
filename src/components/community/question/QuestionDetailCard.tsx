import PostResponse from "types/PostResponse";
import AdditionalInfo from "../AdditionalInfo";
import QuestionTag from "@components/community/QuestionTag";
import { Tag } from "../QuestionTag";
import getRelativeTime from "@utils/getRelativeTime";
import useLike from "@hooks/useLike";

export default function QuestionCard({ data }: { data: PostResponse }) {
  const { nickName } = JSON.parse(data.author.fullName);
  const { title, tag, content } = JSON.parse(data.title);
  const { isLiked, likeCount, toggleLike } = useLike(data._id);
  console.log(tag);
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* UserInfo */}
        <div className="flex gap-2 items-center">
          <img
            src={data.author.image || "https://placehold.co/30x30?text=CAMP+STORY"}
            alt="profile"
            className="rounded-full w-[40px] h-[40px]"
          />
          <span className="text-sub-title font-bold text-gray-scale-400">{nickName}</span>
        </div>

        {/* card */}
        <div className="flex flex-col gap-[10px] bg-gray-scale-0 w-[832px] p-[24px] rounded-sm drop-shadow-custom">
          <div className="flex items-start gap-5">
            <div className="flex gap-4 items-start">
              <div className="text-primary-500 -mt-1.5 font-bold text-[26px]">Q.</div>
              <div className="flex flex-col gap-2 w-[660px]">
                <div className="text-body1 font-semibold text-gray-scale-400">{title}</div>
                <div className="text-body1 font-medium text-gray-scale-400">{content}</div>
              </div>
            </div>
            <div className="text-body2 ml-auto text-gray-scale-300">
              {getRelativeTime(data.createdAt)}
            </div>
          </div>

          {/* Tag */}
          <div className="flex gap-2 mt-[10px]">
            {tag.map((tag: Tag) => {
              return <QuestionTag key={tag} tag={tag} />;
            })}
          </div>
          <AdditionalInfo
            bookmarked
            isLiked={isLiked}
            likeCount={likeCount}
            viewCount={115}
            time=""
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={toggleLike}
          />
        </div>
      </div>
    </>
  );
}
