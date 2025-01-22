interface SearchCardProps {
  category: string;
  title: string;
  location: string;
  bookmarked: boolean;
  handleClickBookmark: () => void;
  handleClick: () => void;
}

export default function SearchCard({
  bookmarked,
  category,
  handleClick,
  handleClickBookmark,
  location,
  title,
}: SearchCardProps) {
  return (
    <article className="flex flex-col rounded-xl bg-white overflow-hidden drop-shadow">
      <img src="/images/camping/searchCamping.png" alt="camping thumbanil" />
      <div className="px-5 py-[15px] flex flex-col gap-[46px]">
        <div className="flex justify-between">
          <div className="flex flex-col text-gray-scale-300">
            <span className="text-[15px]">{category}</span>
            <div className="text-sub-title font-bold">{title}</div>
            <div className="flex gap-[7px] items-center">
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.63478 15.1998C6.63478 15.1998 12.2696 10.1911 12.2696 6.43459C12.2696 3.32258 9.74679 0.799805 6.63478 0.799805C3.52278 0.799805 1 3.32258 1 6.43459C1 10.1911 6.63478 15.1998 6.63478 15.1998Z"
                  stroke="#676767"
                />
                <path
                  d="M8.43501 6.19992C8.43501 7.19403 7.62913 7.99992 6.63501 7.99992C5.6409 7.99992 4.83501 7.19403 4.83501 6.19992C4.83501 5.20581 5.6409 4.39992 6.63501 4.39992C7.62913 4.39992 8.43501 5.20581 8.43501 6.19992Z"
                  stroke="#676767"
                />
              </svg>
              <span className="text-[15px]">{location}</span>
            </div>
          </div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClickBookmark}
          >
            <circle cx="15" cy="15" r="15" fill={bookmarked ? "#F29B30" : "#D9D9D9"} />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9999 8.38854C15.8749 7.49946 17.0144 7 18.2039 7C19.4884 7 20.7146 7.58238 21.6124 8.60881C22.5038 9.62713 23 10.9998 23 12.4254C23 13.851 22.5037 15.2238 21.6124 16.242C21.0197 16.9194 20.4279 17.6122 19.8331 18.3086C18.6249 19.723 17.4038 21.1526 16.1353 22.4995L16.1324 22.5026C15.4782 23.187 14.4422 23.1621 13.816 22.4465L8.38716 16.2419C6.53761 14.1281 6.53761 10.7227 8.38716 8.6089C10.1971 6.54038 13.1115 6.46693 14.9999 8.38854Z"
              fill={bookmarked ? "#F85900" : "#B4B4B4"}
            />
          </svg>
        </div>

        {/* TODO: id로 상세 페이지 연결 */}
        <button
          className="bg-gray-scale-100 rounded h-[30px] text-[15px] font-bold text-gray-scale-300"
          onClick={handleClick}
        >
          더 알아보기
        </button>
      </div>
    </article>
  );
}
