import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import PostCard from "@components/community/community/PostCard";
import Tag from "@components/community/Tag";
import { PATH } from "@constants/path";
import { useNavigate, useSearchParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";
import getRelativeTime from "@utils/getRelativeTime";
import { COMMUNITY_CHANNEL_ID } from "@constants/channelId";

interface Author {
  _id: string;
  fullName: string;
  email: string;
  image: string;
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

const KEYWORD_PARAM = "keyword";
const TAG_PARAM = "tag";

export default function CommunityMain() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState<"recent" | "popular">("recent");
  const keyword = searchParams.get(KEYWORD_PARAM) || null;
  const [tagList, setTagList] = useState<string[]>(
    searchParams.get("tags") ? searchParams.get("tags")!.split(",") : [],
  );

  const updateSearchParams = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const handleTagChange = (tag: string, checked: boolean) => {
    const tags = [...tagList];
    if (checked) tags.push(tag);
    else {
      const index = tagList.indexOf(tag);
      if (index !== -1) {
        tags.splice(index, 1);
      }
    }
    updateSearchParams(TAG_PARAM, tags.join(","));
    setTagList(tags);
  };

  const handleSearch = useCallback(
    (searchKeyword: string) => {
      updateSearchParams(KEYWORD_PARAM, searchKeyword);
    },
    [updateSearchParams],
  );

  const filterPostList = useCallback(
    (input: string | null, tags: string[]) => {
      let data = posts;
      if (input) {
        data = data.filter((post) => JSON.parse(post.title).content.includes(input));
      }
      if (tags.length !== 0) {
        data = data.filter((post) => tags.some((tag) => JSON.parse(post.title).tags.includes(tag)));
      }
      setFilteredPosts(data);
    },
    [posts],
  );

  useEffect(() => {
    apiInstance
      .get<Post[]>(`/posts/channel/${COMMUNITY_CHANNEL_ID}`)
      .then((res) => {
        const validPosts = res.data.filter((post) => post.author);
        setPosts(validPosts);
        setFilteredPosts(validPosts);
      })
      .catch((err) => {
        console.error("게시글 불러오기 실패:", err);
      });
  }, []);

  useEffect(() => {
    if (keyword || tagList) {
      filterPostList(keyword, tagList);
    }
  }, [keyword, filterPostList, tagList]);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
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
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
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
          <Tag
            tag="clean"
            isCheckbox
            defaultChecked={tagList.includes("clean")}
            onChange={(checked: boolean) => handleTagChange("clean", checked)}
          />
          <Tag
            tag="kind"
            isCheckbox
            defaultChecked={tagList.includes("kind")}
            onChange={(checked: boolean) => handleTagChange("kind", checked)}
          />
          <Tag
            tag="convenience"
            isCheckbox
            defaultChecked={tagList.includes("convenience")}
            onChange={(checked: boolean) => handleTagChange("convenience", checked)}
          />
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
              tags={JSON.parse(post.title).tags}
              time={getRelativeTime(post.createdAt)}
              userImage={post.author.image}
            />
          );
        })}
      </div>
    </>
  );
}
