import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import PostCard from "@components/community/community/PostCard";
import Tag from "@components/community/Tag";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";
import getRelativeTime from "@utils/getRelativeTime";

interface Author {
  _id: string;
  fullName: string;
  email: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  author: Author;
}

export default function CommunityMain() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState<"recent" | "popular">("recent");

  useEffect(() => {
    apiInstance
      .get<Post[]>("/posts/channel/67a021790b62dc0dc6cc8e69")
      .then((res) => {
        const validPosts = res.data.filter((post) => post.author);
        setPosts(validPosts);
      })
      .catch((err) => {
        console.error("게시글 불러오기 실패:", err);
      });
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOrder === "recent") {
      // 최신순: 생성시간 내림차순 (최근 것이 먼저)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortOrder === "popular") {
      // 인기순: 좋아요 수 내림차순 (좋아요가 많은 것이 먼저)
      return b.likes - a.likes;
    }
    return 0;
  });

  return (
    <>
      <div className="mt-14 mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        <div className="flex gap-5 text-sub-title">
          <OrderRadio
            label="최신순"
            value="recent"
            defaultChecked
            onChange={() => setSortOrder("recent")}
          />
          <OrderRadio label="인기순" value="popular" onChange={() => setSortOrder("popular")} />
        </div>

        <div className="flex gap-[5px]">
          <Tag tag="clean" isCheckbox />
          <Tag tag="kind" isCheckbox />
          <Tag tag="convenience" isCheckbox />
        </div>

        <button
          className="px-3 py-2 ml-auto text-white text-body1 bg-primary-500 rounded"
          onClick={() => navigate(PATH.communityCreate)}
        >
          글 작성하기
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-16">
        {sortedPosts.map((post) => {
          let realContent = "";
          try {
            const parsed = JSON.parse(post.title);
            if (parsed.content) realContent = parsed.content;
          } catch {
            return;
          }
          return (
            <PostCard
              key={post._id}
              postId={post._id}
              fullname={JSON.parse(post.author.fullName).fullName}
              content={realContent}
              img={post.image}
              time={getRelativeTime(post.createdAt)}
            />
          );
        })}
      </div>
    </>
  );
}
