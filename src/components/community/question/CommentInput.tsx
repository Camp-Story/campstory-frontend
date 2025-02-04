import { useState } from "react";

interface CommentInputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleSubmit: (commentText: string) => Promise<void>;
}

export default function CommentInput({ handleSubmit }: CommentInputProps) {
  const [comment, setComment] = useState("");

  const onClick = async () => {
    if (comment.trim() === "") return;
    await handleSubmit(comment);
    setComment("");
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="댓글을 남겨보세요"
        className="border border-gray-scale-200 placeholder-gray-scale-300 rounded-full py-3 px-8 w-full"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={onClick} className="-m-[56px] top-[20px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 20.7257V4.27451C3 3.8105 3.16356 3.45701 3.49067 3.21404C3.81779 2.97191 4.16308 2.93521 4.52654 3.10394L21.3185 11.3295C21.7728 11.5615 22 11.9517 22 12.5001C22 13.0485 21.7728 13.4387 21.3185 13.6707L4.52654 21.8963C4.16308 22.065 3.81779 22.0279 3.49067 21.7849C3.16356 21.5428 3 21.1897 3 20.7257ZM5.18077 18.8275L18.1019 12.5001L5.18077 6.17272V10.6019L11.7231 12.5001L5.18077 14.3983V18.8275ZM5.18077 12.5001V6.17272V18.8275V12.5001Z"
            fill="#B4B4B4"
          />
        </svg>
      </button>
    </div>
  );
}
