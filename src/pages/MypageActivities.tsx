import Post from "@components/mypage/Post";

export default function MypageActivities() {
  return (
    <>
      <h1 className="text-sub-title font-bold">나의 활동</h1>
      <h2 className="text-[15px] mt-[30px]">내 게시물</h2>
      <div className="grid grid-cols-2 gap-6 mt-[15px]">
        <span className="w-[450px] h-[410px]">
          <Post />
        </span>
        <span className="w-[450px] h-[410px]">
          <Post />
        </span>
      </div>

      <div>
        <h2 className="text-[15px] mt-[30px]">내 질문</h2>
      </div>
    </>
  );
}
