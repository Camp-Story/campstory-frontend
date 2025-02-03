import { useNavigate } from "react-router";
import AreaCard from "./AreaCard";
import { PATH } from "@constants/path";
import UserProfile from "../UserProfile";
import TgaList from "../TagList";
import AdditionalInfo from "../AdditionalInfo";

interface PostCardProps {
  postId: string;
  nickname?: string;
  profileUrl?: string;
  img?: string;
  tags?: string[];
  location?: string;
  title?: string;
  content?: string;
  bookmarked?: boolean;
  isLiked?: boolean;
  likeCount?: number;
  viewCount?: number;
  time?: string;
}

export default function PostCard({
  postId,
  title = "",
  content = "",
  img = "/images/community/communityPostItem.png",
}: PostCardProps) {
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(PATH.communityPost(postId || "1"));
  };
  return (
    <div onClick={handleClickCard} className="cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        <UserProfile nickname="사용자 닉네임" profileUrl="" />

        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src={img} alt="thumbnail" />

        <TgaList tags={["clean", "kind", "convenience"]} />

        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
      </div>
      <div>{title}</div>
      <div className="text-[15px] text-gray-scale-400 line-clamp-2 mb-[34px]">
        {content || "본문이 없습니다."}
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
