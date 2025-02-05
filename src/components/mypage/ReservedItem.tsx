import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import { useNavigate } from "react-router";

interface ReservedItemProps {
  itemId: string;
  title: string;
  location: string;
  image: string;
  date: Date;
  onDelete: (itemId: string) => void;
}

export default function ReservedItem({
  itemId,
  title,
  location,
  image,
  date,
  onDelete,
}: ReservedItemProps) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const dDay = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const handleReservationDelete = async () => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate(PATH.login);
      return;
    }

    try {
      await apiInstance.delete("/posts/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: itemId,
        },
      });

      alert("예약이 취소되었습니다..");
      onDelete(itemId);
    } catch (err) {
      console.error("예약 취소 실패:", err);
      alert("예약 취소 중 오류가 발생했습니다.");
    }
  };

  return (
    <li className="flex gap-6 items-center">
      <div className="size-[200px] rounded-xl overflow-hidden">
        <img
          className="size-full object-cover"
          src={image || "https://placehold.co/200x200?text=CAMP+STORY"}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="inline rounded-full px-3 py-1 text-body1 bg-primary-500/20">예약확정</div>
        <div className="mt-2 text-sub-title font-bold text-primary-500">
          {`D${dDay > 0 ? "-" + dDay : "+" + Math.abs(dDay)}`}
        </div>
        <div className="text-gray-400 border w-72 my-3"></div>
        <div className="text-sub-title mb-1">{title || "장소명이 없습니다."}</div>
        <div className="text-body1 text-gray-scale-400 mb-2">{location || "주소가 없습니다."}</div>
        <div className="flex items-end justify-between gap-9">
          <div className="flex gap-9">
            <div className="text-gray-scale-500 text-body1">
              체크인
              <div className="text-gray-scale-500 font-bold">15:00</div>
            </div>
            <div className="text-gray-scale-500 text-body1">
              체크아웃
              <div className="text-gray-scale-500 font-bold">11:00</div>
            </div>
          </div>
          <button
            onClick={handleReservationDelete}
            className="text-body2 bg-gray-200 w-20 py-1 flex items-center justify-center rounded-sm"
          >
            취소하기
          </button>
        </div>
      </div>
    </li>
  );
}
