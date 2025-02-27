import BookmarkCard from "@components/mypage/BookmarkCard";

export default function Bookmark() {
  return (
    <div>
      <div className="text-[26px] font-bold mb-8">찜 목록</div>
      <div className="grid grid-cols-2 gap-x-11 gap-y-[30px]">
        <BookmarkCard
          img="/images/camping/searchCamping.png"
          bookmarked={true}
          category="글램핑"
          handleClickBookmark={() => alert("bookmark")}
          location="전라도 담양군"
          title="오스트리아캠핑"
        />
        <BookmarkCard
          img="/images/camping/searchCamping.png"
          bookmarked={true}
          category="글램핑"
          handleClickBookmark={() => alert("bookmark")}
          location="전라도 담양군"
          title="오스트리아캠핑"
        />
        <BookmarkCard
          img="/images/camping/searchCamping.png"
          bookmarked={true}
          category="글램핑"
          handleClickBookmark={() => alert("bookmark")}
          location="전라도 담양군"
          title="오스트리아캠핑"
        />
        <BookmarkCard
          img="/images/camping/searchCamping.png"
          bookmarked={true}
          category="글램핑"
          handleClickBookmark={() => alert("bookmark")}
          location="전라도 담양군"
          title="오스트리아캠핑"
        />
      </div>
    </div>
  );
}
