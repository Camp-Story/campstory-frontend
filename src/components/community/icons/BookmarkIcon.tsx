interface BookmarkIconProps {
  bookmarked?: boolean;
}

export default function BookmarkIcon({ bookmarked }: BookmarkIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_30)">
        <path
          d="M14.1667 2.5H5.83332C4.91666 2.5 4.16666 3.25 4.16666 4.16667V17.5L9.99999 15L15.8333 17.5V4.16667C15.8333 3.25 15.0833 2.5 14.1667 2.5Z"
          fill={bookmarked ? "#1A9EFE" : "#999999"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_30">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
