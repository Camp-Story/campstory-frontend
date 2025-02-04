import AdditionalInfo from "@components/community/AdditionalInfo";
import AreaCard from "@components/community/community/AreaCard";
import Comment from "@components/community/question/Comment";
import CommentInput from "@components/community/question/CommentInput";
import TgaList from "@components/community/TagList";
import UserProfile from "@components/community/UserProfile";
import { PATH } from "@constants/path";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";

import getRelativeTime from "@utils/getRelativeTime";

interface Author {
  _id: string;
  fullName: string;
  email: string;
}

interface PostDetail {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author: Author;
}

export default function CommunityDefault() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const currentUserId = localStorage.getItem("id");

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
  try {
    const parsed = JSON.parse(postDetail.title);
    if (parsed.content) realContent = parsed.content || postDetail.content;
  } catch {
    return;
  }

  return (
    <div className="w-[1000px] mx-auto mt-14 cursor-pointer flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <UserProfile nickname={JSON.parse(postDetail.author.fullName).fullName} profileUrl="" />
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
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center text-[15px] text-gray-scale-500">
              <span>작성일</span>
              <span className="font-medium">
                {new Date(postDetail.createdAt).toLocaleDateString()}
              </span>
            </div>
            <TgaList tags={["clean", "kind", "convenience"]} />
            <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
            <div className="text-[15px] text-gray-scale-400">{realContent}</div>
          </div>

          <AdditionalInfo
            bookmarked={false}
            isLiked={false}
            likeCount={10}
            viewCount={115}
            time={getRelativeTime(postDetail.createdAt)}
            handleClickBookmark={() => alert("click bookmark")}
            handleClickLike={() => alert("click like")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
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
    </div>
  );
}
