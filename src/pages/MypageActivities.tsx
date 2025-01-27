import MyPost from "@components/mypage/MyPost";
import MyQuestion from "@components/mypage/MyQuestion";
import MyComment from "@components/mypage/MyComment";

export default function MypageActivities() {
  return (
    <>
      <h1 className="text-title font-bold">나의 활동</h1>
      <h2 className="text-[20px] mt-[30px]">내 게시물</h2>
      <div className="grid grid-cols-2 gap-6 mt-[15px]">
        <span className="w-[450px] h-[410px]">
          <MyPost />
        </span>
        <span className="w-[450px] h-[410px]">
          <MyPost />
        </span>
      </div>

      <h2 className="text-[20px] mt-[90px]">내 질문</h2>

      <div className="mt-[20px] space-y-4">
        <MyQuestion />
        <MyQuestion />
      </div>

      <h2 className="text-[20px] mt-[50px]">내 댓글</h2>

      <div className="mt-[40px] mb-[200px] space-y-4">
        <MyComment />
        <MyComment />
      </div>
    </>
  );
}
