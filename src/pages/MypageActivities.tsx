import MyPost from "@components/mypage/MyPost";
import MyQuestion from "@components/mypage/MyQuestion";
// import MyComment from "@components/mypage/MyComment";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import PostResponse from "types/PostResponse";

const COMMUNITY_CHANNEL_ID = "67a021790b62dc0dc6cc8e69";
const QUESTION_CHANNEL_ID = "67a01c3c896e1c0cc883e18c";

export default function MypageActivities() {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [questions, setQuestions] = useState<PostResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const userid = localStorage.getItem("id");

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiInstance.get<PostResponse[]>(`/posts/author/${userid}`);
      const myPosts = response.data.filter((post) => post.channel._id === COMMUNITY_CHANNEL_ID);
      const myQuestions = response.data.filter((post) => post.channel._id === QUESTION_CHANNEL_ID);
      setPosts(myPosts);
      setQuestions(myQuestions);
    } catch (error) {
      setError("커뮤니티 포스트를 불러오는 중 오류가 발생했습니다.");
      console.log("Error fetching camping data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userid]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);
  return (
    <div className="max-w-[880px]">
      {isLoading && <p>로딩중...</p>}
      {error}
      <h2 className="text-title font-bold">나의 활동</h2>

      <h3 className="text-sub-title mt-8">내 게시물</h3>
      <div className="flex flex-shrink-0 flex-wrap justify-between mt-4 gap-y-10">
        {posts.map((post) => (
          <MyPost
            key={post._id}
            id={post._id}
            content={JSON.parse(post.title).content}
            tags={JSON.parse(post.title).tags}
            image={post.image!}
          />
        ))}
      </div>

      <h3 className="text-sub-title mt-8">내 질문</h3>
      <div className="mt-4 space-y-4">
        {questions.map((question) => (
          <MyQuestion
            key={question._id}
            id={question._id}
            title={JSON.parse(question.title).title}
          />
        ))}
      </div>

      {/* <h3 className="text-sub-title mt-8">내 댓글</h3>
      <div className="mt-4 mb-[200px] space-y-4">
        <MyComment />
        <MyComment />
      </div> */}
    </div>
  );
}
