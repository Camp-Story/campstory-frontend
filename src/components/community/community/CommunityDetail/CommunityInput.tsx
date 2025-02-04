// CommentInput.tsx
import { useState } from "react";
import { apiInstance } from "@utils/axiosInstance";

// CommentInputProps 인터페이스: postId와 댓글 생성 후 콜백 함수(onCommentCreated) 전달 가능
interface CommentInputProps {
  postId: string;
  // 새 댓글 생성 후 상위 컴포넌트로 전달하기 위한 콜백 (필요 시 사용)
  onCommentCreated?: (commentData: string) => void;
}

export default function CommentInput({ postId, onCommentCreated }: CommentInputProps) {
  const [comment, setComment] = useState<string>(""); // 댓글 입력값 상태
  const [loading, setLoading] = useState<boolean>(false); // API 호출 로딩 상태

  // 댓글 작성 버튼 클릭 시 실행되는 함수
  const handleSubmit = async () => {
    // ★ 변경된 부분: JWT 토큰이 있는지 확인
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }
    // ★ 변경된 부분: 빈 댓글 입력 방지
    if (!comment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      // ★ 변경된 부분: POST /comments/create 엔드포인트 호출 (요청 본문에 comment와 postId 포함)
      const response = await apiInstance.post(
        "/comments/create",
        {
          comment, // 작성한 댓글 내용
          postId, // 댓글이 달릴 게시글의 ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT 토큰을 헤더에 포함
          },
        },
      );
      console.log("생성된 댓글:", response.data);
      // ★ 변경된 부분: 댓글 생성 후 onCommentCreated 콜백 실행 (필요한 경우)
      if (onCommentCreated) {
        onCommentCreated(response.data);
      }
      // 댓글 입력값 초기화
      setComment("");
    } catch (error) {
      console.error("댓글 생성 실패:", error);
      alert("댓글 작성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* ★ 변경된 부분: 댓글 입력을 위한 textarea */}
      <textarea
        className="p-2 border border-gray-scale-200 rounded w-full"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 작성해주세요."
      />
      {/* ★ 변경된 부분: 댓글 작성 버튼 */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 rounded bg-primary-500 text-white font-bold"
      >
        {loading ? "작성중..." : "댓글 작성"}
      </button>
    </div>
  );
}
