import { PATH } from "@constants/path";
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
    element: <>event information</>,
  },
];

export default EVENT_ROUTES;
