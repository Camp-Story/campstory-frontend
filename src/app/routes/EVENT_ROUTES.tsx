import { PATH } from "@constants/path";
import EventMain from "@pages/EventMain";

const EVENT_ROUTES = [
  {
    path: PATH.event,
    element: <EventMain/>,
  },
  {
    path: PATH.eventSearch,
    element: <>event search</>,
  },
  {
    path: PATH.eventInfoPath,
    element: <>event information</>,
  },
];

export default EVENT_ROUTES;
