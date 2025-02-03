import Badge from "./Badge";
import BookmarkIcon from "./icons/BookmarkIcon";
import LikeIcon from "./icons/LikeIcon";
import ShareIcon from "./icons/ShareIcon";
import ViewIcon from "./icons/ViewIcon";

interface AdditionalInfoProps {
  viewCount: number;
  likeCount: number;
  isLiked: boolean;
  bookmarked: boolean;
  time: string;
  handleClickLike: () => void;
  handleClickBookmark: () => void;
}

export default function AdditionalInfo({
  bookmarked,
  isLiked,
  likeCount,
  viewCount,
  time,
  handleClickBookmark,
  handleClickLike,
}: AdditionalInfoProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[5px]">
        <Badge icon={<ViewIcon />} count={viewCount} />
        <Badge
          icon={<LikeIcon isLiked={isLiked} />}
          count={likeCount}
          handleClick={handleClickLike}
        />
        <Badge icon={<BookmarkIcon bookmarked={bookmarked} />} handleClick={handleClickBookmark} />
        <Badge icon={<ShareIcon />} handleClick={() => alert("click share")} />
      </div>

      <span className="text-[13px] text-gray-scale-300">{time}</span>
    </div>
  );
}
