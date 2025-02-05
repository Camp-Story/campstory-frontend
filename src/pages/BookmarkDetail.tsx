import BookmarkList from "@components/mypage/BookmarkList";
import { useParams } from "react-router";

export default function BookmarkDetail() {
  const { type } = useParams<{ type: "camping" | "event" | "restaurant" }>();

  if (!type) {
    return <>잘못된 접근입니다.</>;
  }

  return (
    <>
      <BookmarkList type={type} showAll />
    </>
  );
}
