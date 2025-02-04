import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useNavigate } from "react-router-dom";
import { CalendarEvent } from "./EventCalendarSection";
import { PATH } from "@constants/path";

interface CalendarProps {
  events: CalendarEvent[];
}

export default function Calendar({ events }: CalendarProps) {
  const navigate = useNavigate();

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="100%"
      events={events}
      eventClick={(info) => {
        const contentId = info.event.extendedProps.contentid;
        navigate(PATH.eventInfo(contentId));
      }}
    />
  );
}
