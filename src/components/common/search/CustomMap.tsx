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
      level: 5,
    };
    const map = new kakao.maps.Map(container.current, options);

    markers.forEach((marker) => {
      const markerPosition = new kakao.maps.LatLng(Number(marker.mapY), Number(marker.mapX));
      new kakao.maps.Marker({ map, position: markerPosition, title: marker.title });
    });
  }, [markers]);

  return <div id="staticMap" ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
