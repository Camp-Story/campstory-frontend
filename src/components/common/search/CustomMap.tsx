import { MapProps } from "types/common";
import { useEffect, useRef } from "react";

const { kakao } = window;

export default function CustomMap({ markers }: MapProps) {
  const container = useRef(null);

  useEffect(() => {
    const { mapX: centerX, mapY: centerY } = markers[0];

    const options = {
      center: new kakao.maps.LatLng(
        Number(centerY) || 37.56637787425258,
        Number(centerX) || 126.97827585270615,
      ),
      level: 10,
    };
    const map = new kakao.maps.Map(container.current, options);
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    clusterer.addMarkers(
      markers.map((marker) => {
        const markerPosition = new kakao.maps.LatLng(Number(marker.mapY), Number(marker.mapX));
        return new kakao.maps.Marker({ map, position: markerPosition, title: marker.title });
      }),
    );
  }, [markers]);

  return <div id="staticMap" ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
