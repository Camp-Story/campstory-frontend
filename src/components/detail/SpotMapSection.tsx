import { useEffect } from "react";

const { kakao } = window;

interface SpotMapSectionProps {
  mapX: string;
  mapY: string;
}

export default function SpotMapSection({ mapX, mapY }: SpotMapSectionProps) {
  useEffect(() => {
    const container = document.getElementById("staticMap");
    const markerPosition = new kakao.maps.LatLng(mapY, mapX);
    const marker = {
      position: markerPosition,
    };

    const staticOptions = {
      center: new kakao.maps.LatLng(mapY, mapX),
      level: 3,
      marker,
    };

    new kakao.maps.StaticMap(container, staticOptions);
  }, [mapX, mapY]);

  return <div id="staticMap" style={{ width: "100%", height: "100%" }}></div>;
}
