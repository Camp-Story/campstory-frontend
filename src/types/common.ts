interface FilterCategory {
  value: string;
  label: string;
}

interface MapMarker {
  title: string;
  mapX: string;
  mapY: string;
}

interface MapProps {
  markers: MapMarker[];
}

export type { FilterCategory, MapMarker, MapProps };
