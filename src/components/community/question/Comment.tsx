import UserProfile from "../UserProfile";
import getRelativeTime from "@utils/getRelativeTime";

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

interface CommentProps {
  commentData: CommentData;
  onDelete: (commentId: string) => void;
}

export default function Comment({ commentData, onDelete }: CommentProps) {
  const { _id, comment, author, createdAt } = commentData;
  const currentUserId = localStorage.getItem("id");

  const isAuthor = author._id === currentUserId;

  const handleDeleteClick = () => {
    onDelete(_id);
  };
  return (
    <div className="relative">
      <div className="flex gap-4 items-center">
        <UserProfile
          nickname={JSON.parse(author.fullName).fullName}
          profileUrl={author.image || "https://placehold.co/30x30?text=CAMP+STORY"}
        />
        <div className="text-gray-scale-300">{getRelativeTime(createdAt)}</div>

        {isAuthor && (
          <button
            onClick={handleDeleteClick}
            className="ml-auto text-xs text-gray-scale-300 hover:text-red-500"
          >
            삭제
          </button>
        )}
      </div>
      <div className="text-gray-scale-400 font-medium ml-[40px] mt-3 leading-5">{comment}</div>
    </div>
  );
}
