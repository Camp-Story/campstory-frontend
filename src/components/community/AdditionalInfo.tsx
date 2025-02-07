import Badge from "./Badge";
import LikeIcon from "./icons/LikeIcon";
import ViewIcon from "./icons/ViewIcon";
import { useMemo } from "react";

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
}: AdditionalInfoProps) {
  const randomViewCount = useMemo(() => Math.floor(Math.random() * 25) + 10, []);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[5px]">
        <Badge icon={<ViewIcon />} count={randomViewCount} />
        <Badge
          icon={<LikeIcon isLiked={isLiked} />}
          count={likeCount}
          handleClick={handleClickLike}
        />
      </div>

      <span className="text-[13px] text-gray-scale-300">{time}</span>
    </div>
  );
}
