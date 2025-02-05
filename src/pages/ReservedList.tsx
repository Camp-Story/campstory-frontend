import { Post } from "types/ChannelResponse";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import ReservedItem from "@components/mypage/ReservedItem";
import CheckedOutItem from "@components/mypage/CheckedOutItem";

export default function ReservedList() {
  const id = localStorage.getItem("id");
  const [myReservations, setMyReservations] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await apiInstance.get<Post[]>(`/posts/channel/67a0223e0b62dc0dc6cc8e6d`);
      setMyReservations(res.data.filter((post) => post.author._id === id));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, id]);

  const handleReservationDelete = (itemId: string) => {
    setMyReservations((prevReservations) => prevReservations.filter((item) => item._id !== itemId));
  };

  const currentDate = new Date();
  const upcomingReservations =
    myReservations?.length !== 0
      ? myReservations?.filter((item) => {
          let reservationDetail;
          if (item.title) {
            reservationDetail = JSON.parse(item.title || "{}");
          }
          const reservationDate = new Date(reservationDetail.date);
          return reservationDate > currentDate;
        })
      : [];

  const pastReservations =
    myReservations?.length !== 0
      ? myReservations?.filter((item) => {
          let reservationDetail;
          if (item.title) {
            reservationDetail = JSON.parse(item.title || "{}");
          }
          const reservationDate = new Date(reservationDetail.date);
          return reservationDate <= currentDate;
        })
      : [];

  return (
    <>
      <div className="mb-36">
        <div className="text-title font-bold mb-4">예약 내역</div>
        <div className="flex flex-col mb-10">
          <div className="text-sub-title font-bold mb-3">이용 전</div>
          <ul className="flex flex-col gap-6">
            {upcomingReservations.map((item) => {
              if (item.title) {
                const reservationDetail = JSON.parse(item.title || "{}");
                return (
                  <ReservedItem
                    key={item._id}
                    itemId={item._id}
                    {...reservationDetail}
                    onDelete={handleReservationDelete}
                  />
                );
              }
            })}
          </ul>
        </div>

        <div className="text-sub-title font-bold mb-3">이용 완료</div>
        <ul className="flex flex-col gap-6">
          {pastReservations.map((item) => {
            if (item.title) {
              const reservationDetail = JSON.parse(item.title || "{}");
              return <CheckedOutItem key={item._id} {...reservationDetail} />;
            }
          })}
        </ul>
      </div>
    </>
  );
}
