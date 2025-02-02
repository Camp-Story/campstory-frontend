import MyPost from "@components/mypage/MyPost";
import MyQuestion from "@components/mypage/MyQuestion";
import MyComment from "@components/mypage/MyComment";

export default function MypageActivities() {
  return (
    <div className="max-w-[880px]">
      <h2 className="text-title font-bold">나의 활동</h2>

      <h3 className="text-sub-title mt-8">내 게시물</h3>
      <div className="flex flex-shrink-0 flex-wrap justify-between mt-4 gap-y-10">
        <MyPost />
        <MyPost />
        <MyPost />
      </div>

      <h3 className="text-sub-title mt-8">내 질문</h3>
      <div className="mt-4 space-y-4">
        <MyQuestion />
        <MyQuestion />
      </div>

      <h3 className="text-sub-title mt-8">내 댓글</h3>
      <div className="mt-4 mb-[200px] space-y-4">
        <MyComment />
        <MyComment />
      </div>
    </div>
  );
}
