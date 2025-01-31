import { useEffect, useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { PATH } from "@constants/path";
import CalendarEventCard from "./CalendarEventCard";
import { tourApiInstance } from "@utils/axiosInstance";

interface Item {
  addr1: string;
  firstimage: string;
  title: string;
  contentid: string;
  eventstartdate: string;
}

interface ApiResponse {
  response: {
    body: {
      items: {
        item: Item[];
      };
      totalCount: number;
    };
  };
}

export default function EventCalendarSection() {
  const [events, setEvents] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getTodayDate = () => {
    const today = new Date("2024-01-01");
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const getFormattedTodayDate = () => {
    const today = new Date("2024-01-01");
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const fetchEventsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await tourApiInstance.get<ApiResponse>("/searchFestival1", {
        params: {
          numOfRows: 4,
          pageNo: 1,
          arrange: "A",
          listYN: "Y",
          eventStartDate: getTodayDate(),
          _type: "json",
        },
      });

      const items = response.data.response.body.items.item || [];
      setEvents(items);
    } catch (error) {
      console.log(error);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEventsData();
  }, [fetchEventsData]);

  return (
    <div className="flex mb-[100px] h-[461px]">
      <div className="w-[400px] h-[461px] border border-gray-scale-300 p-2 rounded mr-[20px] bg-white drop-shadow">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" height="100%" />
      </div>
      <div className="flex flex-col">
        <div className="text-highlight text-gray-scale-500 mb-2">축제 일정 한눈에 보기</div>
        <div className="text-[20px] text-gray-scale-400 mb-[37px]">
          월별 축제 일정을 한눈에 확인하고, 원하는 축제를 놓치지 마세요.
        </div>
        <div className="text-[20px] text-gray-scale-400 font-bold mb-[20px]">
          {getFormattedTodayDate()}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {events.map((event, idx) => (
            <CalendarEventCard
              key={idx}
              src={event.firstimage}
              title={event.title}
              addr1={event.addr1}
              path={PATH.eventInfo(event.contentid)}
            />
          ))}
        </div>
      </div>
      {isLoading && <p>데이터를 불러오는 중입니다...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
