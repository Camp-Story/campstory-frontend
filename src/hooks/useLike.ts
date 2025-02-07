import { useState, useEffect } from "react";
import { apiInstance } from "@utils/axiosInstance";

interface UseLikeReturn {
  isLiked: boolean;
  likeCount: number;
  toggleLike: (e: React.MouseEvent<HTMLDivElement>) => Promise<void>;
}

interface Like {
  _id: string;
  user: string;
}
export default function useLike(postId: string, likes = 0): UseLikeReturn {
  const token = localStorage.getItem("token") || "";
  const currentUserId = localStorage.getItem("id");
  const initialLikes = likes;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeId, setLikedId] = useState<string>("");
  const [likeCount, setLikeCount] = useState<number>(initialLikes);

  useEffect(() => {
    async function fetchLikeStatus() {
      try {
        const response = await apiInstance.get(`/posts/${postId}`);
        const data = response.data;
        setLikeCount(data.likes.length);
        if (currentUserId && Array.isArray(data.likes)) {
          const myLike = data.likes.find((like: Like) => like.user === currentUserId);
          if (myLike) {
            setIsLiked(true);
            setLikedId(myLike._id);
          } else {
            setIsLiked(false);
            setLikedId("");
          }
        }
      } catch (err) {
        console.error("좋아요 상태 불러오기 실패:", err);
      }
    }
    fetchLikeStatus();
  }, [postId, token, currentUserId]);

  async function handleLike(e: React.MouseEvent<HTMLDivElement>, postId: string): Promise<void> {
    e.stopPropagation();
    try {
      const response = await apiInstance.post(
        "likes/create",
        { postId },
        {
          headers: { Authorization: `bearer ${token}` },
        },
      );
      console.log("좋아요 성공:", response.data);
      const createdLikeId = response.data._id;
      setLikedId(createdLikeId);
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    } catch (err) {
      console.error("좋아요 실패:", err);
    }
  }

  async function handleUnlike(
    e: React.MouseEvent<HTMLDivElement>,
    currentLikeId: string,
  ): Promise<void> {
    e.stopPropagation();
    try {
      const response = await apiInstance.delete("/likes/delete", {
        headers: { Authorization: `bearer ${token}` },
        data: { id: currentLikeId },
      });
      console.log("좋아요 취소 성공", response.data);
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
      setLikedId("");
    } catch (err) {
      console.error("좋아요 취소 실패:", err);
    }
  }

  const toggleLike = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    e.stopPropagation();
    if (isLiked) {
      if (likeId) {
        await handleUnlike(e, likeId);
      } else {
        console.error("좋아요 취소에 실패하였습니다.");
      }
    } else {
      await handleLike(e, postId);
    }
  };

  return { isLiked, likeCount, toggleLike };
}
