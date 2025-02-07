import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useNavigate } from "react-router";
import { CalendarEvent } from "./EventCalendarSection";
import { PATH } from "@constants/path";
import { EventClickArg } from "@fullcalendar/core"; // EventClickArg 타입 임포트

interface CalendarProps {
  events: CalendarEvent[];
}

export default function Calendar({ events }: CalendarProps) {
  const navigate = useNavigate();

  const handleEventClick = (info: EventClickArg) => {
    // EventClickArg 타입 사용
    const contentId = info.event.extendedProps.contentid;

    // 필요한 event 데이터 생성
    const event = {
      contentid: contentId,
      // 필요한 다른 데이터 추가
    };

    navigate(PATH.eventInfo(contentId), { state: { event } });
  };

  return (
    <FullCalendar
      headerToolbar={{
        start: "prev",
        center: "title",
        end: "next",
      }}
      locale={"ko"}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="100%"
      events={events}
      eventClick={handleEventClick}
    />
  );
}
