import CommentInput from "@components/community/question/CommentInput";
import QuestionDetailCard from "@components/community/question/QuestionDetailCard";
import Comment from "@components/community/question/Comment";
import { useNavigate, useParams } from "react-router";
import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import PostResponse from "types/PostResponse";

export default function QuestionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questionData, setQuestionData] = useState<PostResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="w-[832px] mx-auto mt-14 flex flex-col gap-[30px]">
      <div className="relative">
        {isLoading && <p>로딩중...</p>}
        {error}
        {questionData ? <QuestionDetailCard data={questionData} /> : <p>데이터가 없습니다.</p>}
        <button
          onClick={() => navigate(PATH.questionModify(id))}
          className="absolute right-0 top-1.5 py-1 px-3 border border-primary-500 rounded text-[13px] text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold"
        >
          수정하기
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-sub-title text-gray-scale-400 font-bold">댓글</div>
        <CommentInput
          handleSubmit={() => {
            alert("submit!");
          }}
        />
      </div>
      <div className="flex flex-col gap-[40px]">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
