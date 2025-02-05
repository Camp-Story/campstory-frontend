import BookmarkList from "@components/mypage/BookmarkList";

export default function Bookmark() {
  return (
    <>
      <BookmarkList type="camping" />
      <BookmarkList type="event" />
      <BookmarkList type="restaurant" />
    </>
  );
}
