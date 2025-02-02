import { weatherApiInstance } from "@utils/axiosInstance";
import KmaCoordConverter, { GridCoord } from "@utils/KmaCoordConverter";

const converter = new KmaCoordConverter();

// // 위경도를 기상청 좌표로 변환 (서울시청 좌표)
// const nxny: GridCoord = converter.convertToNx(37.5665, 126.9780);
// console.log('기상청 좌표:', nxny);  // { nx: 60, ny: 127 }

// // 기상청 좌표를 위경도로 변환
// const latlon: LatLon = converter.convertToLatLon(60, 127);
// console.log('위경도:', latlon);  // { lat: 37.579..., lon: 126.977... }

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

const fetchWeatherData = async (mapX: string, mapY: string) => {
  try {
    const { nx: convertedNx, ny: convertedNy }: GridCoord = converter.convertToNx(
      Number(mapY),
      Number(mapX),
    );

    const response = await weatherApiInstance.get("/getVilageFcst", {
      params: {
        pageNo: 1,
        numOfRows: 12,
        dataType: "JSON",
        base_date: formatDate(new Date()),
        base_time: "0500",
        nx: convertedNx,
        ny: convertedNy,
      },
    });

    if (response.status !== 200 || Number(response.data.response.header.resultCode) !== 0) {
      throw new Error("해당 위치의 날씨 데이터를 가져오는데 실패했습니다. 다시 시도해주세요.");
    }

    console.log(response);
    console.dir(response.data.response.body.items.item);
  } catch (error) {
    console.log(error);
  }
};

export { fetchWeatherData };
