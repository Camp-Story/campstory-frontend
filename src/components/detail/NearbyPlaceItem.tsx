import useBookMark from "@hooks/useBookmark";

interface NearbyPlaceItemProps {
  imageUrl: string;
  category: string;
  name: string;
  channelId: string;
  contentId: string;
}

export default function NearbyPlaceItem({
  imageUrl,
  category,
  name,
  channelId,
  contentId,
}: NearbyPlaceItemProps) {
  const { isBookmarked, handleUnlike, handleLike } = useBookMark(channelId);

  const bookmarked = isBookmarked(contentId);

  return (
    <div>
      <div className="w-[228px] h-[228px] rounded-xl border-2 overflow-hidden mb-3">
        <img src={imageUrl} alt="인근 명소 이미지" className="size-full object-cover" />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-body1 text-gray-scale-300">{category}</div>
          <div className="w-44 whitespace-nowrap text-ellipsis overflow-hidden text-sub-title">
            {name}
          </div>
        </div>
        <div
          onClick={(e) => (bookmarked ? handleUnlike(e, bookmarked._id) : handleLike(e, contentId))}
          className="hover:cursor-pointer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9999 8.38854C15.8749 7.49946 17.0144 7 18.2039 7C19.4884 7 20.7146 7.58238 21.6124 8.60881C22.5038 9.62713 23 10.9998 23 12.4254C23 13.851 22.5037 15.2238 21.6124 16.242C21.0197 16.9194 20.4279 17.6122 19.8331 18.3086C18.6249 19.723 17.4038 21.1526 16.1353 22.4995L16.1324 22.5026C15.4782 23.187 14.4422 23.1621 13.816 22.4465L8.38716 16.2419C6.53761 14.1281 6.53761 10.7227 8.38716 8.6089C10.1971 6.54038 13.1115 6.46693 14.9999 8.38854Z"
              fill={bookmarked ? "#DC3644" : "#B4B4B4"}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
