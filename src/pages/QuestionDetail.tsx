import CommentInput from "@components/community/question/CommentInput";
import QuestionDetailCard from "@components/community/question/QuestionDetailCard";

export default function QuestionDetail() {
  return (
    <div>
      <div className="mt-[100px]">
        <QuestionDetailCard />
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sub-title text-gray-scale-400 font-bold mt-[30px]">댓글</div>
        <CommentInput
          handleSubmit={() => {
            alert("submit!");
          }}
        />
      </div>
    </div>
  );
}
