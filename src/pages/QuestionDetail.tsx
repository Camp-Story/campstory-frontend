import CommentInput from "@components/community/question/CommentInput";
import QuestionDetailCard from "@components/community/question/QuestionDetailCard";
import Comment from "@components/community/question/Comment";
export default function QuestionDetail() {
  return (
    <div className="w-[832px] mx-auto mt-[100px] flex flex-col gap-[30px]">
      <div>
        <QuestionDetailCard />
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
