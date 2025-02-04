import UserProfile from "../UserProfile";
import getRelativeTime from "@utils/getRelativeTime";

interface CommentData {
  _id: string;
  comment: string;
  createdAt: string;
  author: {
    fullName: string;
    profileUrl?: string;
  };
}

interface CommentProps {
  commentData: CommentData;
}

export default function Comment({ commentData }: CommentProps) {
  const { comment, author, createdAt } = commentData;
  return (
    <div>
      <div className="flex gap-4 items-center">
        <UserProfile nickname={JSON.parse(author.fullName).fullName} profileUrl="" />
        <div className="text-gray-scale-300">{getRelativeTime(createdAt)}</div>
      </div>
      <div className="text-gray-scale-400 font-medium ml-[40px] mt-3 leading-5">{comment}</div>
    </div>
  );
}
