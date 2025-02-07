import Badge from "./Badge";
import LikeIcon from "./icons/LikeIcon";
import ViewIcon from "./icons/ViewIcon";
// import BookmarkIcon from "./icons/BookmarkIcon";
// import ShareIcon from "./icons/ShareIcon";

interface AdditionalInfoProps {
  viewCount: number;
  likeCount: number;
  isLiked: boolean;
  bookmarked: boolean;
  time: string;
  handleClickLike: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleClickBookmark?: () => void;
}

export default function AdditionalInfo({
  isLiked,
  likeCount,
  time,
  handleClickLike,
  // handleClickBookmark,
  // bookmarked,
}: AdditionalInfoProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[5px]">
        <Badge icon={<ViewIcon />} count={Math.floor(Math.random() * 30) + 10} />
        <Badge
          icon={<LikeIcon isLiked={isLiked} />}
          count={likeCount}
          handleClick={handleClickLike}
        />
        {/* <Badge icon={<BookmarkIcon bookmarked={bookmarked} />} handleClick={handleClickBookmark} /> */}
        {/* <Badge icon={<ShareIcon />} handleClick={() => alert("click share")} /> */}
      </div>

      <span className="text-[13px] text-gray-scale-300">{time}</span>
    </div>
  );
}
