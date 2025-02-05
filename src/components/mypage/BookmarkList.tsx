import { CAMPING_CHANNEL_ID, EVENT_CHANNEL_ID, RESTAURANT_CHANNEL_ID } from "@constants/channelId";
import { PATH } from "@constants/path";
import useBookMark from "@hooks/useBookmark";
import useCamping from "@hooks/useCamping";
import { useNavigate } from "react-router";
import BookmarkCard from "./BookmarkCard";

const CHANNEL = {
  camping: {
    channelId: CAMPING_CHANNEL_ID,
    title: "캠핑",
    searchPath: PATH.campingSearch,
    detailPath: (id: string) => PATH.campingInfo(id),
  },
  event: {
    channelId: EVENT_CHANNEL_ID,
    title: "행사",
    searchPath: PATH.eventSearch,
    detailPath: (id: string) => PATH.eventInfo(id),
  },
  restaurant: {
    channelId: RESTAURANT_CHANNEL_ID,
    title: "음식점",
    searchPath: PATH.restaurantSearch,
    detailPath: (id: string) => PATH.restaurantInfo(id),
  },
};

export interface BookmarkListProps {
  type: "camping" | "event" | "restaurant";
  showAll?: boolean;
}

export default function BookmarkList({ type, showAll }: BookmarkListProps) {
  const { channelId, detailPath, title, searchPath } = CHANNEL[type];

  const navigate = useNavigate();

  const { userId, posts, handleUnlike } = useBookMark(channelId);
  const { searchAndNavigate } = useCamping();

  const likedPosts = posts.filter((post) => post.likes.find((like) => like.user === userId));
  const willShow = showAll ? likedPosts : likedPosts.slice(0, 2);

  const NavigateTo = (id: string, title: string, image: string) => {
    switch (type) {
      case "camping":
        searchAndNavigate(title, detailPath(id));
        break;
      case "event":
        navigate(detailPath(id), {
          state: { event: { firstimage: image } },
        });
        break;
      case "restaurant":
        navigate(detailPath(id));
        break;
    }
  };

  return (
    <div>
      <div className="text-[26px] font-bold mb-8 flex justify-between items-end">
        <div>{`${title} 찜 목록`}</div>
        {likedPosts.length > 2 && !showAll && (
          <div
            className="text-primary-500 text-body1"
            onClick={() => navigate(PATH.bookmarkDetail(type))}
          >
            더보기
          </div>
        )}
      </div>
      {likedPosts.length === 0 && (
        <h2 className="text-body1">
          {`찜한 ${title} 장소가 없습니다. `}
          <span
            className="text-primary-500 hover:cursor-pointer"
            onClick={() => navigate(searchPath)}
          >
            추가하기
          </span>
        </h2>
      )}
      <div className="grid grid-cols-2 gap-x-11 gap-y-[30px] mb-10">
        {willShow.map((post) => {
          const { title, category, image, location, id } = JSON.parse(post.title || "{}");
          return (
            post && (
              <BookmarkCard
                key={id}
                img={image || "https://placehold.co/450x250?text=CAMP+STORY"}
                bookmarked={true}
                category={category}
                handleClickBookmark={(e) => handleUnlike(e, post._id)}
                handleClick={() => NavigateTo(id, title, image)}
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
