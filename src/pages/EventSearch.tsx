import AreaCheckbox from "@components/common/search/AreaCheckbox";
import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { AREA, EVENT_CATEGORY, EVENT_PROGRESS } from "@constants/filters";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState } from "react";

interface EventListResponse {
  addr1: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  eventstartdate: string;
  eventenddate: string;
  firstimage: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  title: string;
}

interface EventListSearchResponse {
  response: {
    body: {
      items: {
        item: EventListResponse[];
      };
      totalCount: number;
    };
  };
}

const categoryMapping: { [key: string]: string } = {
  A02070100: "문화 관광",
  A02070200: "일반",
  A02081100: "전통공연",
  A02081200: "연극",
  A02081300: "뮤지컬",
  A02081400: "오페라",
  A02081500: "전시회",
  A02081600: "박람회",
  A02081700: "무용",
  A02081800: "클래식음악회",
  A02081900: "대중콘서트",
};

function getCategoryName(cat3: string): string {
  return categoryMapping[cat3] || "카테고리 없음";
}

export default function EventSearch() {
  const [events, setEvents] = useState<EventListResponse[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEventData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await tourApiInstance.get<EventListSearchResponse>("/searchFestival1", {
        params: {
          _type: "json",
          numOfRows: 10,
          pageNo: 1,
          arrange: "D",
          listYN: "Y",
          eventStartDate: "20200101",
        },
      });

      console.log(response.data?.response?.body?.items?.item[0]);
      setEvents(response.data?.response?.body?.items?.item || []);
      setTotalCount(response.data?.response?.body?.totalCount || 0);
    } catch (error) {
      setError("행사 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[34px]">
        <div className="flex flex-col gap-[30px]">
          <SearchMap />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <CheckboxList categories={EVENT_PROGRESS} title="진행/예정" />

            <hr />

            <CheckboxList categories={EVENT_CATEGORY} title="카테고리" />

            <hr />

            <h4 className="text-base font-bold">지역</h4>
            <div className="grid grid-cols-3 gap-2.5 w-[230px]">
              {AREA.map((area) => (
                <AreaCheckbox code={area.code} label={area.label} value={area.value} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            '행사' 검색 결과 {totalCount}개
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            {isLoading && <p>로딩 중...</p>}
            {error && <p>에러 발생: {error}</p>}
            {events.map((event) => (
              <SearchCard
                key={event.contentid}
                img={event.firstimage || "https://placehold.co/250x250?text=CAMP+STORY"}
                bookmarked={false}
                category={getCategoryName(event.cat3)}
                handleClick={() => alert(event.title)}
                handleClickBookmark={() => alert("Bookmark!")}
                location={event.addr1 || "주소 정보 없음"}
                title={event.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
