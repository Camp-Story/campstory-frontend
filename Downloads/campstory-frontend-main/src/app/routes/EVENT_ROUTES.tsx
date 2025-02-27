import { PATH } from "@constants/path";
import EventDetail from "@pages/EventDetail";
import EventMain from "@pages/EventMain";
import EventSearch from "@pages/EventSearch";

const EVENT_ROUTES = [
  {
    path: PATH.event,
    element: <EventMain />,
  },
  {
    path: PATH.eventSearch,
    element: <EventSearch />,
  },
  {
    path: PATH.eventInfoPath,
    element: <EventDetail />,
  },
];

export default EVENT_ROUTES;
