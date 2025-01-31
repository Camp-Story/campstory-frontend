import { useEffect } from "react";

const { kakao } = window;

interface SpotMapSectionProps {
  mapX: string;
  mapY: string;
}

export default function SpotMapSection({ mapX, mapY }: SpotMapSectionProps) {
  useEffect(() => {
    const container = document.getElementById("staticMap");
    const markerPosition = new kakao.maps.LatLng(mapY, mapX); // 지도 마커 위치
    const marker = {
      position: markerPosition,
    };

    const staticOptions = {
      center: new kakao.maps.LatLng(mapY, mapX), // 이미지 지도의 중심좌표
      level: 3, // 이미지 지도의 확대 레벨
      marker,
    };

    new kakao.maps.StaticMap(container, staticOptions);
  }, []);

  return <div id="staticMap" style={{ width: "100%", height: "100%" }}></div>;
}
