import AdditionalInfo from "@components/community/AdditionalInfo";
import AreaCard from "@components/community/community/AreaCard";
import Comment from "@components/community/question/Comment";
import CommentInput from "@components/community/question/CommentInput";
import TgaList from "@components/community/TagList";
import UserProfile from "@components/community/UserProfile";
import { PATH } from "@constants/path";
import { useNavigate, useParams } from "react-router";

export default function CommunityDefault() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    return <>잘못된 접근입니다.</>;
  }

  return (
    <div className="w-[1000px] mx-auto mt-14 cursor-pointer flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <UserProfile nickname="한라봉" profileUrl="" />
        <button
          onClick={() => navigate(PATH.communityModify(id))}
          className="py-1 px-3 border border-primary-500 rounded text-[13px] text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold"
        >
          수정하기
        </button>
      </div>

      <div className="flex gap-8 mb-7">
        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <div className="flex-shrink-0 w-[480px] h-[400px] rounded-lg overflow-hidden">
          <img
            src="/images/community/communityPostItem.png"
            alt="thumbnail"
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center text-[15px] text-gray-scale-500">
              <span>작성일</span>
              <span className="font-medium">2025.01.14</span>
            </div>
            <TgaList tags={["clean", "kind", "convenience"]} />
            <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
            <div className="text-[15px] text-gray-scale-400">
              안녕하세요. 이번엔 스노우라인 캠핑 빌리지에 다녀왔습니다. 정말 좋네요 추천합니다!
              다음엔 어디를 다녀올까요. 추천해주세요. 어디든 재밌게 갈 수 있습니다. 액티비티를
              경험할 수 있는 곳이었으면 좋겠어요. 추가적으로 강아지와 함께 갈 수 있는 곳이면 더
              좋아요! 캠핑 고수님들 도와주세요!!!
            </div>
          </div>

          <AdditionalInfo
            bookmarked={false}
            isLiked={false}
            likeCount={10}
            viewCount={115}
            time="24분"
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={() => alert("click like")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-4">
          <div className="text-sub-title text-gray-scale-400 font-bold">댓글</div>
          <CommentInput
            handleSubmit={() => {
              alert("submit!");
            }}
          />
        </div>
        <div className="flex flex-col gap-[40px]">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}
