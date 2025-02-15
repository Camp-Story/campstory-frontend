import { useNavigate } from "react-router";
import AreaCard from "./AreaCard";
import { PATH } from "@constants/path";
import UserProfile from "../UserProfile";
import TagList from "../TagList";
import AdditionalInfo from "../AdditionalInfo";
import { Tag as TagType } from "../Tag";
import useLike from "@hooks/useLike";

interface PostCardProps {
  postId: string;
  profileUrl?: string;
  img?: string;
  tags?: TagType[];
  location?: string;
  fullname: string;
  content?: string;
  bookmarked?: boolean;
  isLiked?: boolean;
  likeCount?: string;
  viewCount?: number;
  time: string;
  userImage: string;
  likes: number;
}

export default function PostCard({
  postId,
  fullname = "",
  content = "",
  img,
  time,
  tags,
  userImage,
}: PostCardProps) {
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(PATH.communityPost(postId || "1"));
  };
  const defaultImage = "/images/community/communityPostItem.png";

  const { isLiked, likeCount, toggleLike } = useLike(postId);

  return (
    <div onClick={handleClickCard} className="cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        <UserProfile nickname={fullname} profileUrl={userImage || ""} />

        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <div className="w-full h-[400px] overflow-hidden rounded-xl">
          <img src={img || defaultImage} alt="thumbnail" className="size-full object-cover" />
        </div>
        <TagList tags={tags || ["clean"]} />

        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
      </div>
      <div className="text-[15px] text-gray-scale-400 line-clamp-2 mb-[34px]">
        {content || "본문이 없습니다."}
      </div>

      <AdditionalInfo
        bookmarked
        isLiked={isLiked}
        likeCount={likeCount}
        viewCount={120}
        time={time}
        handleClickBookmark={() => alert("click bookmark")}
        handleClickLike={toggleLike}
      />
    </div>
  );
}
