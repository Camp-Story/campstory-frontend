interface FilterCategory {
  value: string;
  label: string;
}

interface TourApiResponse {
  addr1: string;
  firstImageUrl: string;
  facltNm: string;
  contentid: string;
  mapX: string;
  mapY: string;
}

interface MapMarker {
  id: string;
  title: string;
  mapX: string;
  mapY: string;
  addr: string;
  img: string;
}

interface MapProps {
  markers: TourApiResponse[];
  type: "camping" | "event" | "restaurant";
}

export type { FilterCategory, MapMarker, MapProps, TourApiResponse };
