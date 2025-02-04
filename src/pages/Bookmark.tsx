import BookmarkCard from "@components/mypage/BookmarkCard";
import useBookMark from "@hooks/useBookmark";

export default function Bookmark() {
  const { likes, posts } = useBookMark("67a0d8576e0e9a207c06c4ee");

  return (
    <div>
      <div className="text-[26px] font-bold mb-8">찜 목록</div>
      <div className="grid grid-cols-2 gap-x-11 gap-y-[30px]">
        {likes.map((like) => {
          const post = posts.find((p) => p._id === like.post);
          return (
            post && (
              <BookmarkCard
                img={post.image || "https://placehold.co/450x250?text=CAMP+STORY"}
                bookmarked={true}
                category="글램핑"
                handleClickBookmark={() => alert("bookmark")}
                location="전라도 담양군"
                title="오스트리아캠핑"
              />
            )
          );
        })}
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
