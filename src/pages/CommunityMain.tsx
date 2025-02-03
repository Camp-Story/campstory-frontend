import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import PostCard from "@components/community/community/PostCard";
import Tag from "@components/community/Tag";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";

interface Post {
  _id: string;
  title: string;
  content: string;
  image?: string;
}

export default function CommunityMain() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    apiInstance
      .get<Post[]>("/posts/channels/67a021790b62dc0dc6cc8e69")
      .then((res) => {
        console.log("res.data =", res.data);
        console.log("Array.isArray(res.data) =", Array.isArray(res.data));
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("게시글 불러오기 실패:", err);
      });
  }, []);

  return (
    <>
      <div className="mt-14 mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        <div className="flex gap-5 text-sub-title">
          <OrderRadio label="최신순" value="recent" defaultChecked />
          <OrderRadio label="인기순" value="popular" />
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
        {posts.map((post) => {
          let realTitle = "";
          let realContent = "";

          try {
            const parsed = JSON.parse(post.title);
            if (parsed.title) realTitle = parsed.title;
            if (parsed.content) realContent = parsed.content;
          } catch {
            realTitle = post.title;
          }
          return (
            <PostCard
              key={post._id}
              postId={post._id}
              title={realTitle}
              content={realContent}
              img={post.image}
            />
          );
        })}
      </div>
    </>
  );
}
