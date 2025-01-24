import CommentInput from "@components/community/question/CommentInput";
import QuestionDetailCard from "@components/community/question/QuestionDetailCard";
import Comment from "@components/community/question/Comment";
import { useNavigate, useParams } from "react-router";
import { PATH } from "@constants/path";

export default function QuestionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    return <>잘못된 접근입니다.</>;
  }

  return (
    <div className="w-[832px] mx-auto mt-[100px] flex flex-col gap-[30px]">
      <div className="relative">
        <QuestionDetailCard />
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
