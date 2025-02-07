import AdditionalInfo from "../AdditionalInfo";
import UserProfile from "../UserProfile";
import { useState, useEffect } from "react";
import { apiInstance } from "@utils/axiosInstance";

interface QuestionCardProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  userName: string;
  coverImage: string;
  title: string;
  timeStamp: string;
  questionId: string;
  likes: number;
}

export default function QuestionCard({
  handleClick,
  userName,
  coverImage,
  title,
  timeStamp,
  likes,
  questionId,
}: QuestionCardProps) {
  const initialLikeCount = likes;

  const token = localStorage.getItem("token");
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeId, setLikeId] = useState<string>("");
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  async function handleLike(
    e: React.MouseEvent<HTMLDivElement>,
    questionId: string,
  ): Promise<void> {
    e.stopPropagation();
    try {
      const response = await apiInstance.post(
        "/likes/create",
        { postId: questionId },
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

  const toggleLike = (e: React.MouseEvent<HTMLDivElement>, questionId: string, likeId: string) => {
    if (isLiked) {
      if (questionId) {
        handleUnlike(e, likeId);
      }
    } else {
      handleLike(e, questionId);
    }
  };
  const boundToggleLike = (e: React.MouseEvent<HTMLDivElement>) => {
    toggleLike(e, questionId, likeId);
  };

  return (
    <>
      <div onClick={handleClick} className="flex flex-col gap-3 hover:cursor-pointer">
        <UserProfile nickname={userName} profileUrl={coverImage} />
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-[600px] p-[20px] rounded-lg drop-shadow-custom">
          <div className="flex gap-2 items-center">
            <div className="text-primary-500 font-bold text-sub-title">Q.</div>
            <div className="text-body1 font-medium text-gray-scale-400 pt-1">{title}</div>
          </div>
          <AdditionalInfo
            bookmarked
            isLiked={isLiked}
            likeCount={likeCount}
            viewCount={115}
            time={timeStamp}
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={boundToggleLike}
          />
        </div>
      </div>
    </>
  );
}
