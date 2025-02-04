import BookmarkCard from "@components/mypage/BookmarkCard";
import { PATH } from "@constants/path";
import useBookMark from "@hooks/useBookmark";
import useSearchAndNavigateCamping from "@hooks/useSearchAndNavigateCamping";
import { useNavigate } from "react-router";

export default function Bookmark() {
  const { likes, posts, handleUnlike } = useBookMark("67a0d8576e0e9a207c06c4ee");
  const { searchAndNavigate } = useSearchAndNavigateCamping();
  const navigate = useNavigate();

  const likedPosts = posts.filter((post) => likes.find((like) => like.post === post._id));

  return (
    <div>
      <div className="text-[26px] font-bold mb-8">찜 목록</div>
      {likedPosts.length === 0 && (
        <h2 className="text-body1">
          찜한 캠핑 장소가 없습니다.{" "}
          <span
            className="text-primary-500 hover:cursor-pointer"
            onClick={() => navigate(PATH.campingSearch)}
          >
            추가하기
          </span>
        </h2>
      )}
      <div className="grid grid-cols-2 gap-x-11 gap-y-[30px] mb-10">
        {likedPosts.map((post) => {
          const { title, category, image, location, id } = JSON.parse(post.title || "{}");
          return (
            post && (
              <BookmarkCard
                key={id}
                img={image || "https://placehold.co/450x250?text=CAMP+STORY"}
                bookmarked={true}
                category={category}
                handleClickBookmark={(e) => handleUnlike(e, post._id)}
                handleClick={() => searchAndNavigate(title, PATH.campingInfo(id))}
                location={location}
                title={title}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
