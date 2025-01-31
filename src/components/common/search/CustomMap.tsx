import { MapProps, TourApiResponse } from "types/common";
import { useEffect, useRef } from "react";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

const { kakao } = window;

export default function CustomMap({ markers, type }: MapProps) {
  const navigate = useNavigate();
  const container = useRef(null);

  const NavigateTo = (item: TourApiResponse) => {
    switch (type) {
      case "camping":
        navigate(PATH.campingInfo(item.contentid), { state: { item } });
        break;
      case "event":
        navigate(PATH.eventInfo(item.contentid));
        break;
      case "restaurant":
        navigate(PATH.restaurantInfo(item.contentid));
        break;
    }
  };

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
      markers.map((data) => {
        console.log(data);
        const markerPosition = new kakao.maps.LatLng(Number(data.mapY), Number(data.mapX));
        const marker = new kakao.maps.Marker({
          map,
          position: markerPosition,
          title: data.title,
          clickable: true,
        });

        // const close = document.createElement("div")

        const content = document.createElement("div");
        content.innerHTML =
          '<div class="rounded absolute left-0 bottom-14 drop-shadow -translate-x-1/2">' +
          '    <div class="after:absolute after:left-1/2 after:-translate-x-1/2 after:border-[10px] after:border-b-0 after:border-x-transparent after:border-white">' +
          '        <div class="flex justify-between items-center bg-gray-scale-100 py-1 px-2 text-sub-title">' +
          data.facltNm +
          '<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png" id="close" class="w-4 h-4 hover:cursor-pointer" />' +
          "        </div>" +
          '        <div class="p-2 overflow-hidden bg-white flex flex-col gap-1">' +
          '            <div class="img w-full">' +
          `<img src="${data.firstImageUrl}">` +
          "           </div>" +
          '            <div class="desc flex flex-col text-[15px]">' +
          `                <div class="ellipsis">${data.addr1}</div>` +
          `<div id="navigation" class="text-primary-500 mt-3 ml-auto">바로가기</div>` +
          "            </div>" +
          "        </div>" +
          "    </div>" +
          "</div>";

        const overlay = new kakao.maps.CustomOverlay({
          content: content,
          position: marker.getPosition(),
        });

        kakao.maps.event.addListener(marker, "click", function () {
          overlay.setMap(map);
        });
        content.querySelector("#close")?.addEventListener("click", function () {
          overlay.setMap(null);
        });
        content.querySelector("#navigation")?.addEventListener("click", function () {
          NavigateTo(data);
        });

        return marker;
      }),
    );
  }, [markers]);

  return <div id="staticMap" ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
