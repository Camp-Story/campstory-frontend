import { useEffect, useState, useCallback } from "react";
import { PATH } from "@constants/path";
import CalendarEventCard from "./CalendarEventCard";
import { tourApiInstance } from "@utils/axiosInstance";
import { getTodayDate, getFormattedTodayDate, formatDate } from "@utils/dateUtils";
import Calendar from "./Calendar";

interface Item {
  addr1: string;
  firstimage: string;
  title: string;
  contentid: string;
  eventstartdate: string;
  eventenddate: string;
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

export interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    contentid: string;
  };
}

export default function EventCalendarSection() {
  const [events, setEvents] = useState<Item[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

      const eventColors: string[] = ["#F85900", "#1A9EFE", "#1CA673", "#F29B30"];

      const formattedEvents: CalendarEvent[] = items.map((item, index) => ({
        title: item.title,
        start: formatDate(item.eventstartdate),
        end: formatDate(item.eventenddate),
        backgroundColor: eventColors[index % eventColors.length],
        borderColor: eventColors[index % eventColors.length],
        extendedProps: {
          contentid: item.contentid,
        },
      }));

      setCalendarEvents(formattedEvents);
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
    <div className="flex gap-4">
      <div className="w-[400px] border border-gray-scale-100 p-2 rounded mr-[20px] bg-white drop-shadow">
        <Calendar events={calendarEvents} />
      </div>
      <div className="flex flex-col">
        <div className="text-highlight font-impact text-gray-scale-500">축제 일정 한눈에 보기</div>
        <div className="text-sub-title text-gray-scale-400 mb-9">
          월별 축제 일정을 한눈에 확인하고, 원하는 축제를 놓치지 마세요.
        </div>
        <div className="text-sub-title text-gray-scale-400 font-bold mb-4">
          {getFormattedTodayDate()}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {events.map((event) => (
            <CalendarEventCard
              key={event.contentid}
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
