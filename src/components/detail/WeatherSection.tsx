interface WeatherDataType {
  SKY?: string; // 현재 하늘 상태: 맑음(1), 구름많음(3), 흐림(4)
  TMP?: string; // 현재 온도
  TMN?: string; // 최저기온
  TMX?: string; // 최고기온
  REH?: string; // 습도
  POP?: string; // 강수 확률
  PCP?: string; // 강수량
  PTY?: string; // 강수형태: 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
}

function getWeatherIcon(sky: string | undefined, pty: string | undefined): string {
  if (sky === "맑음") {
    return "/images/weathers/sunny.png"; // 맑음 아이콘
  } else if (sky === "구름많음") {
    return "/images/weathers/sun_cloud.png"; // 구름 많음 아이콘
  } else if (sky === "흐림") {
    if (pty === "0") {
      return "/images/weathers/cloudy.png"; // 흐림 아이콘
    } else if (pty === "1" || pty === "2" || pty === "4") {
      return "/images/weathers/rainy.png"; // 비 아이콘
    } else if (pty === "3") {
      return "/images/weathers/snow.png"; // 눈 아이콘
    }
  }
  return "/images/weathers/sunny.png"; // 기본 아이콘
}

export default function WeatherSection({
  SKY,
  TMP,
  TMN,
  TMX,
  REH,
  POP,
  PCP,
  PTY,
}: WeatherDataType) {
  const weatherIcon = getWeatherIcon(SKY, PTY);

  return (
    <section className="col-span-6 gap-20 h-64 border border-gray-scale-100 rounded-xl overflow-hidden flex items-center justify-center py-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="w-44 h-36">
            <img src={weatherIcon} alt="weather" className="size-full object-cover" />
          </div>
          <div className="text-center">
            <div className="font-bold text-8xl leading-none">{TMP}</div>
            <div className="text-3xl leading-none">{SKY}</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center text-3xl">
            <span className="text-info-500 font-semibold mr-2">{TMN}</span>
            <span className="font-semibold mr-2">/</span>
            <span className="text-[#DC3644] font-bold">{TMX}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex text-2xl items-center">
          <div className="font-bold mr-4">습도</div>
          <div>{REH}%</div>
        </div>
        <div className="flex text-2xl items-center">
          <div className="font-bold mr-4">강수확률</div>
          <div>{POP}%</div>
        </div>
        <div className="flex text-2xl items-center">
          <div className="font-bold mr-4">강수량</div>
          <div>{PCP && PCP !== "강수없음" ? `${PCP}` : "없음"}</div>
        </div>
      </div>
    </section>
  );
}
