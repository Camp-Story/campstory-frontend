import AreaCheckbox from "@components/common/search/AreaCheckbox";
import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { AREA, EVENT_CATEGORY, EVENT_PROGRESS } from "@constants/filters";
import { PATH } from "@constants/path";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  A02080100: "전통공연",
  A02080200: "연극",
  A02080300: "뮤지컬",
  A02080400: "오페라",
  A02080500: "전시회",
  A02080600: "박람회",
  A02080700: "무용",
  A02080800: "클래식음악회",
  A02080900: "대중콘서트",
  A02081100: "영화",
  A02081200: "스포츠경기",
  A02081300: "기타행사",
  A02081400: "넌버벌",
};

function getCategoryName(cat3: string): string {
  return categoryMapping[cat3] || "카테고리 없음";
}

function useFetchEvents(searchKeyword: string) {
  const [events, setEvents] = useState<EventListResponse[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const keywordMapping: {
    [key: string]: { cat1?: string; cat2?: string; cat3?: string; areaCode?: string };
  } = {
    문화관광: { cat1: "A02", cat2: "A0207", cat3: "A02070100" },
    일반: { cat1: "A02", cat2: "A0207", cat3: "A02070200" },
    전통공연: { cat1: "A02", cat2: "A0208", cat3: "A02080100" },
    연극: { cat1: "A02", cat2: "A0208", cat3: "A02080200" },
    뮤지컬: { cat1: "A02", cat2: "A0208", cat3: "A02080300" },
    오페라: { cat1: "A02", cat2: "A0208", cat3: "A02080400" },
    전시회: { cat1: "A02", cat2: "A0208", cat3: "A02080500" },
    박람회: { cat1: "A02", cat2: "A0208", cat3: "A02080600" },
    무용: { cat1: "A02", cat2: "A0208", cat3: "A02080700" },
    클래식음악회: { cat1: "A02", cat2: "A0208", cat3: "A02080800" },
    대중콘서트: { cat1: "A02", cat2: "A0208", cat3: "A02080900" },
    영화: { cat1: "A02", cat2: "A0208", cat3: "A02081100" },
    스포츠경기: { cat1: "A02", cat2: "A0208", cat3: "A02081200" },
    기타행사: { cat1: "A02", cat2: "A0208", cat3: "A02081300" },
    넌버벌: { cat1: "A02", cat2: "A0208", cat3: "A02081400" },
    서울: { areaCode: "1" },
    제주: { areaCode: "39" },
    강원도: { areaCode: "32" },
    전남: { areaCode: "38" },
    전북: { areaCode: "37" },
    충북: { areaCode: "33" },
    충남: { areaCode: "34" },
    경기도: { areaCode: "31" },
    부산: { areaCode: "6" },
    // 더 많은 키워드와 매핑을 여기에 추가하세요.
  };

  const fetchEventData = async () => {
    setIsLoading(true);
    setError(null);

    let params = {
      _type: "json",
      numOfRows: 10,
      pageNo: 1,
      arrange: "R",
      listYN: "Y",
      contentTypeId: 15,
      areaCode: "",
      sigunguCode: "",
      cat1: "",
      cat2: "",
      cat3: "",
    };

    if (keywordMapping[searchKeyword]) {
      params = { ...params, ...keywordMapping[searchKeyword] };
    }

    try {
      const response = await tourApiInstance.get<EventListSearchResponse>("/areaBasedList1", {
        params,
      });
      setEvents(response.data?.response?.body?.items?.item || []);
      setTotalCount(response.data?.response?.body?.totalCount || 0);
    } catch (error) {
      setError("행사 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching event data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [searchKeyword]);

  return { events, totalCount, isLoading, error };
}

export default function EventSearch() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialKeyword = queryParams.get("keyword") || ""; // 쿼리 파라미터에서 키워드 읽기

  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const { events, totalCount, isLoading, error } = useFetchEvents(keyword);
  const navigate = useNavigate();

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    navigate(`${PATH.eventSearch}?keyword=${searchKeyword}`); // URL에 키워드 반영
  };

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
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
            '{keyword || "행사"}' 검색 결과 {totalCount}개
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
                handleClick={() => navigate(PATH.eventInfo(event.contentid))}
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
