import { useNavigate } from "react-router";
import AreaCard from "./AreaCard";
import { PATH } from "@constants/path";
import UserProfile from "../UserProfile";
import TagList from "../TagList";
import AdditionalInfo from "../AdditionalInfo";
import { Tag as TagType } from "../Tag";
import { apiInstance } from "@utils/axiosInstance";
import { useState, useEffect } from "react";

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
  likes,
}: PostCardProps) {
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(PATH.communityPost(postId || "1"));
  };
  const initialLikeCount = likes;

  const token = localStorage.getItem("token");
  const defaultImage = "/images/community/communityPostItem.png";
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeId, setLikeId] = useState<string>("");
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  async function handleLike(e: React.MouseEvent<HTMLDivElement>, postId: string): Promise<void> {
    e.stopPropagation();
    try {
      const response = await apiInstance.post(
        "/likes/create",
        { postId },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
      console.log("좋아요 성공", response.data);
      const createdLikeId = response.data._id;
      setLikeId(createdLikeId);
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    } catch (err) {
      console.error("좋아요 실패:", err);
    }
  }

  async function handleUnlike(e: React.MouseEvent<HTMLDivElement>, likeId: string): Promise<void> {
    e.stopPropagation();
    try {
      const response = await apiInstance.delete("/likes/delete", {
        headers: {
          Authorization: `bearer ${token}`,
        },
        data: { id: likeId },
      });
      console.log("좋아요 취소 성공", response.data);
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } catch (err) {
      console.error("좋아요 취소 실패:", err);
    }
  }

  const toggleLike = (e: React.MouseEvent<HTMLDivElement>, postId: string, likeId: string) => {
    if (isLiked) {
      if (postId) {
        handleUnlike(e, likeId);
      }
    } else {
      handleLike(e, postId);
    }
  };

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
        handleClickLike={(e) => toggleLike(e, postId, likeId)}
      />
    </div>
  );
}
