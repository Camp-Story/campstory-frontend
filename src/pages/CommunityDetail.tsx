import AdditionalInfo from "@components/community/AdditionalInfo";
import AreaCard from "@components/community/AreaCard";
import TgaList from "@components/community/TagList";
import UserProfile from "@components/community/UserProfile";

export default function CommunityDefault() {
  return (
    <div className="cursor-pointer flex flex-col gap-2.5">
      <UserProfile nickname="한라봉" profileUrl="" />

      <div className="flex gap-4">
        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src="/images/community/communityPostItem.png" alt="thumbnail" />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-[15px] items-center text-[15px] text-gray-scale-500">
              <span>작성일</span>
              <span className="font-medium">2025.01.14</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <TgaList tags={["clean", "kind", "convenience"]} />

              <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
            </div>

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
    </div>
  );
}
