import { useNavigate } from "react-router";
import AreaCard from "./AreaCard";
import Badge from "./Badge";
import Tag from "./Tag";
import BookmarkIcon from "./icons/BookmarkIcon";
import LikeIcon from "./icons/LikeIcon";
import ShareIcon from "./icons/ShareIcon";
import ViewIcon from "./icons/ViewIcon";
import { PATH } from "@constants/path";

export default function PostCard() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(PATH.communityPost("1"))} className="cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        <div className="flex gap-[5px] items-center">
          <img
            src="https://placehold.co/30x30?text=CAMP+STORY"
            alt="profile"
            className="rounded-full w-[30px] h-[30px]"
          />
          <span className="text-[15px] font-bold text-gray-scale-400">사용자 닉네임</span>
        </div>

        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src="/images/community/communityPostItem.png" alt="thumbnail" />

        <div className="flex gap-[5px]">
          <Tag tag="clean" />
          <Tag tag="kind" />
          <Tag tag="convenience" />
        </div>

        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
      </div>

      <div className="text-[15px] text-gray-scale-400 line-clamp-2 mb-[34px]">
        안녕하세요. 이번엔 스노우라인 캠핑 빌리지에 다녀왔습니다. 정말 좋네요 추천합니다! 다음엔
        어디를 다녀올까요. 추천해주세요. 어디든 재밌게 갈 수 있습니다. 액티비티를 경험할 수 있는
        곳이었으면 좋겠어요. 추가적으로 강아지와 함께 갈 수 있는 곳이면 더 좋아요! 캠핑 고수님들
        도와주세요!!!
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-[5px]">
          <Badge icon={<ViewIcon />} count={115} />
          <Badge icon={<LikeIcon />} count={10} handleClick={() => alert("click like")} />
          <Badge icon={<BookmarkIcon />} handleClick={() => alert("click bookmark")} />
          <Badge icon={<ShareIcon />} handleClick={() => alert("click share")} />
        </div>

        <span className="text-[13px] text-gray-scale-300">24분전</span>
      </div>
    </div>
  );
}
