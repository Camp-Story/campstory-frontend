import AdditionalInfo from "@components/community/AdditionalInfo";
import AreaCard from "@components/community/community/AreaCard";
import Comment from "@components/community/question/Comment";
import CommentInput from "@components/community/question/CommentInput";
import { Tag as TagType } from "@components/community/Tag";
import UserProfile from "@components/community/UserProfile";
import { PATH } from "@constants/path";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";

import getRelativeTime from "@utils/getRelativeTime";
import TagList from "@components/community/TagList";
import useLike from "@hooks/useLike";

interface Author {
  _id: string;
  fullName: string;
  email: string;
  image: string;
}

interface CommentData {
  _id: string;
  comment: string;
  createdAt: string;
  author: {
    _id: string;
    fullName: string;
    image: string;
  };
}

interface PostDetail {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author: Author;
  likes: string[];
  comments: CommentData[];
}

export default function CommunityDefault() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [postDetail, setPostDetail] = useState<PostDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  const currentUserId = localStorage.getItem("id");
  const postId = postDetail && postDetail._id;

  const { isLiked, likeCount, toggleLike } = useLike(postId ?? "");

  useEffect(() => {
    if (!id) return;

    apiInstance
      .get<PostDetail>(`/posts/${id}`)
      .then((res) => {
        setPostDetail(res.data);
      })
      .catch((err) => {
        console.error("게시글 불러오기 실패:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (!id) {
    return <div className="text-gray-scale-200 text-xl">잘못된 접근입니다.</div>;
  }

  if (loading || !postDetail) {
    return <div className="text-gray-scale-200 text-xl">Loading...</div>;
  }

  let realContent = "";
  let tagsFromAPI: TagType[] = [];
  try {
    const parsed = JSON.parse(postDetail.title);
    if (parsed.content) realContent = parsed.content || postDetail.content;
    if (parsed.tags && Array.isArray(parsed.tags)) {
      tagsFromAPI = parsed.tags as TagType[];
    }
  } catch (error) {
    console.error("불러오기 실패:", error);
    realContent = postDetail.content;
    tagsFromAPI = [];
  }

  // 댓글 작성 API 호출 함수
  const handleCommentSubmit = async (commentText: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate(PATH.login);
      return;
    }
    try {
      const response = await apiInstance.post(
        "/comments/create",
        {
          comment: commentText,
          postId: id, // 현재 게시글 id 사용
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert("댓글이 작성되었습니다.");

      // 새 댓글을 기존 댓글 목록에 추가
      setPostDetail((prev) =>
        prev ? { ...prev, comments: [...prev.comments, response.data] } : prev,
      );
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      alert("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  const handleCommentDelete = async (commentId: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate(PATH.login);
      return;
    }

    try {
      // 1) 서버에 삭제 요청
      await apiInstance.delete("/comments/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: commentId,
        },
      });
      alert("댓글이 삭제되었습니다.");

      setPostDetail((prev) =>
        prev
          ? {
              ...prev,
              comments: prev.comments.filter((c) => c._id !== commentId),
            }
          : prev,
      );
    } catch (err) {
      console.error("댓글 삭제 실패:", err);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-[1000px] mx-auto mt-14 cursor-pointer flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <UserProfile
          nickname={JSON.parse(postDetail.author.fullName).fullName}
          profileUrl={postDetail.author.image || "https://placehold.co/30x30?text=CAMP+STORY"}
        />
        {postDetail.author._id === currentUserId && (
          <button
            onClick={() => navigate(PATH.communityModify(id))}
            className="py-1 px-3 border border-primary-500 rounded text-[13px] text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold"
          >
            수정하기
          </button>
        )}
      </div>

      <div className="flex gap-8 mb-7">
        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <div className="flex-shrink-0 w-[480px] h-[400px] rounded-lg overflow-hidden">
          <img
            src={postDetail.image || "/images/community/communityPostItem.png"}
            alt="thumbnail"
            className="size-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center text-[15px] text-gray-scale-500">
              <span>작성일</span>
              <span className="font-medium">
                {new Date(postDetail.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex gap-[5px]">
              <TagList tags={tagsFromAPI || ["clean"]} />
            </div>
            <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
            <div className="text-[15px] text-gray-scale-400">{realContent}</div>
          </div>

          <AdditionalInfo
            bookmarked={false}
            isLiked={isLiked}
            likeCount={likeCount}
            viewCount={115}
            time={getRelativeTime(postDetail.createdAt)}
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={toggleLike}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-4">
          <div className="text-sub-title text-gray-scale-400 font-bold">댓글</div>
          <CommentInput handleSubmit={handleCommentSubmit} />
        </div>
        <div className="flex flex-col gap-[40px]">
          {postDetail.comments.map((comment) => (
            <Comment key={comment._id} commentData={comment} onDelete={handleCommentDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
