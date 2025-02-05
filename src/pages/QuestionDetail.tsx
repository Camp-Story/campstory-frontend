import CommentInput from "@components/community/question/CommentInput";
import QuestionDetailCard from "@components/community/question/QuestionDetailCard";
import Comment from "@components/community/question/Comment";
import { useNavigate, useParams } from "react-router";
import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import PostResponse from "types/PostResponse";

const userId = localStorage.getItem("id");

export default function QuestionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questionData, setQuestionData] = useState<PostResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isSameUser = () => {
    if (userId === questionData?.author._id) return true;
    else return false;
  };

  const fetchDetailData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiInstance.get<PostResponse>(`/posts/${id}`);
      console.log(response.data);
      setQuestionData(response.data);
    } catch (error) {
      setError("질문 정보를 가져오는 중 오류가 발생했습니다.");
      console.log("Error fetching question data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetailData();
  }, [fetchDetailData]);

  if (!id) {
    return <>잘못된 접근입니다.</>;
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
      setQuestionData((prev) =>
        prev ? { ...prev, comments: [...prev.comments, response.data] } : prev,
      );
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      alert("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  //댓글 삭제
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

      setQuestionData((prev) =>
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
    <div className="w-[832px] mx-auto mt-14 flex flex-col gap-[30px]">
      <div className="relative">
        {isLoading && <p>로딩중...</p>}
        {error}
        {questionData ? <QuestionDetailCard data={questionData} /> : <p>데이터가 없습니다.</p>}
        {isSameUser() && (
          <button
            onClick={() => navigate(PATH.questionModify(id))}
            className="absolute right-0 top-1.5 py-1 px-3 border border-primary-500 rounded text-[13px] text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold"
          >
            수정하기
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="text-sub-title text-gray-scale-400 font-bold">댓글</div>
          <CommentInput handleSubmit={handleCommentSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        {questionData?.comments.map((comment) => (
          <Comment key={comment._id} commentData={comment} onDelete={handleCommentDelete} />
        ))}
      </div>
    </div>
  );
}
