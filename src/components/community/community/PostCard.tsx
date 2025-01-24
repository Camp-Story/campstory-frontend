import { useNavigate } from "react-router";
import AreaCard from "./AreaCard";
import { PATH } from "@constants/path";
import UserProfile from "../UserProfile";
import TgaList from "../TagList";
import AdditionalInfo from "../AdditionalInfo";

export default function PostCard() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(PATH.communityPost("1"))} className="cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        <UserProfile nickname="사용자 닉네임" profileUrl="" />

        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src="/images/community/communityPostItem.png" alt="thumbnail" />

        <TgaList tags={["clean", "kind", "convenience"]} />

        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
      </div>

      <div className="text-[15px] text-gray-scale-400 line-clamp-2 mb-[34px]">
        안녕하세요. 이번엔 스노우라인 캠핑 빌리지에 다녀왔습니다. 정말 좋네요 추천합니다! 다음엔
        어디를 다녀올까요. 추천해주세요. 어디든 재밌게 갈 수 있습니다. 액티비티를 경험할 수 있는
        곳이었으면 좋겠어요. 추가적으로 강아지와 함께 갈 수 있는 곳이면 더 좋아요! 캠핑 고수님들
        도와주세요!!!
      </div>

      <AdditionalInfo
        bookmarked
        isLiked
        likeCount={10}
        viewCount={115}
        time="24분"
        handleClickBookmark={() => alert("click bookmark")}
        handleClickLike={() => alert("click like")}
      />
    </div>
  );
}
