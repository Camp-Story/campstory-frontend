import { useEffect, useRef } from "react";

const { kakao } = window;

export default function CustomMap() {
  const container = useRef(null);
  // const staticContainer = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.56637787425258, 126.97827585270615), // 지도 중심지지
    level: 5, // 확대 정도
  };

  useEffect(() => {
    console.log(container);

    const map = new kakao.maps.Map(container.current, options);

    const markerPosition = new kakao.maps.LatLng(37.56637787425258, 126.97827585270615); // 지도 마커 위치
    new kakao.maps.Marker({ map, position: markerPosition }); // 지도 마커 표시

    // const staticOptions = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667), // 이미지 지도의 중심좌표
    //   level: 3, // 이미지 지도의 확대 레벨
    // };

    // const staticMap = new kakao.maps.staticMap(staticContainer, staticOptions);
    // console.log(staticMap);
    // new kakao.maps.Marker({ staticMap, position: markerPosition });

    // 마커 클릭 시 카카오 지도 오픈
    // kakao.maps.event.addListener(marker, "click", function () {
    //   handleOpenNewTab(
    //     "https://map.kakao.com/link/map/37.56637787425258,126.97827585270615"
    //   );
    // });

    // 커스텀 오버레이 - https://apis.map.kakao.com/web/sample/roadviewCustomOverlay/
  }, []);
  return <div id="staticMap" ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
