import { useEffect, useState } from "react";
import WeatherSection from "./WeatherSection";
import { fetchWeatherData } from "@utils/fetchWeatherData";

interface DetailLeftProps {
  image1: string;
  image2: string;
  image3: string;
  mapX: string;
  mapY: string;
}

interface WeatherDataType {
  SKY?: string; // 현재 하늘 상태: 맑음(1), 구름많음(3), 흐림(4)
  TMP?: string; // 현재 온도
  TMN?: string; // 최저기온
  TMX?: string; // 최고기온
  REH?: string; // 습도
  POP?: string; // 강수 확률
  PCP?: string; // 강수량
  PTY?: string; // 강수형태
}

interface WeatherDataItem {
  baseDate: string; // 예보 기준 날짜 (YYYYMMDD)
  baseTime: string; // 예보 기준 시간 (HHMM)
  category: string; // 기상 요소 (TMP: 기온, REH: 습도 등)
  fcstDate: string; // 예측 날짜 (YYYYMMDD)
  fcstTime: string; // 예측 시간 (HHMM)
  fcstValue: string; // 예측 값 (예: 온도, 습도 등)
  nx: number; // 예보 지역 X 좌표
  ny: number; // 예보 지역 Y 좌표
}

function getSkyDescription(sky: string | undefined): string {
  switch (sky) {
    case "1":
      return "맑음";
    case "3":
      return "구름많음";
    case "4":
      return "흐림";
    default:
      return "";
  }
}

export default function DetailLeft({ image1, image2, image3, mapX, mapY }: DetailLeftProps) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  const getWeatherData = async () => {
    const weatherData: WeatherDataItem[] = await fetchWeatherData(mapX, mapY);

    const sky = weatherData.find((item) => item.category === "SKY")?.fcstValue;
    const tmp = weatherData.find((item) => item.category === "TMP")?.fcstValue;
    const tmn = weatherData.find((item) => item.category === "TMN")?.fcstValue;
    const tmx = weatherData.find((item) => item.category === "TMX")?.fcstValue;
    const reh = weatherData.find((item) => item.category === "REH")?.fcstValue;
    const pop = weatherData.find((item) => item.category === "POP")?.fcstValue;
    const pcp = weatherData.find((item) => item.category === "PCP")?.fcstValue;
    const pty = weatherData.find((item) => item.category === "PTY")?.fcstValue;

    setWeatherData({
      SKY: getSkyDescription(sky),
      TMP: tmp,
      TMN: tmn,
      TMX: tmx,
      REH: reh,
      POP: pop,
      PCP: pcp,
      PTY: pty,
    });
    console.log({ sky, tmp, tmn, tmx, reh, pop, pcp, pty });
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <article className="w-7/12 grid grid-cols-6 gap-5">
      <div className="col-span-6 h-[444px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={image1 || "https://placehold.co/450x250?text=CAMP+STORY"}
          alt="이미지 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={image2 || "https://placehold.co/450x250?text=CAMP+STORY"}
          alt="이미지 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={image3 || "https://placehold.co/450x250?text=CAMP+STORY"}
          alt="이미지 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 h-[140px] bg-gray-scale-100 rounded-xl flex items-center justify-center text-sub-title">
        더보기
      </div>
      <WeatherSection {...weatherData} />
    </article>
  );
}
