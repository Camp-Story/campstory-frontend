import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import EventAreaCheckbox from "@components/event/EventAreaCheckbox";
import EVENT_CATEGORY_MAP from "@components/event/EventCategoryMap";
import { EVENT_CHANNEL_ID } from "@constants/channelId";

import { AREA, EVENT_PROGRESS } from "@constants/filters";
import { PATH } from "@constants/path";
import useBookMark from "@hooks/useBookmark";
import { tourApiInstance } from "@utils/axiosInstance";
import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

interface Item {
  addr1: string;
  addr2: string;
  cat1: string;
  cat2: string;
  cat3: string;
  firstimage: string;
  firstimage2: string;
  tel: string;
  title: string;
  contentid: string;
  mapx: string;
  mapy: string;
}

interface ApiResponse {
  response: {
    body: {
      items: {
        item: Item[];
      };
      totalCount: number;
    };
  };
}

const CATEGORY_OPTIONS = Object.entries(EVENT_CATEGORY_MAP).map(([code, label]) => ({
  value: code,
  label,
}));

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

export default function EventSearch() {
  const [events, setEvents] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  // 무한 스크롤 관련
  const [pageNumber, setPageNumber] = useState<number>(1);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const selectedCategory = searchParams.get("cat3") || "";
  const selectedArea = parseInt(searchParams.get("areaCode") || "", 10) || null;

  const { handleLike, handleUnlike, isBookmarked } = useBookMark("67a0d6ce6e0e9a207c06c4a8");

  const navigate = useNavigate();

  const fetchEventsData = useCallback(
    async (searchKeyword: string, selectedCat3: string, areaCode: number | null, page: number) => {
      setIsLoading(true);
      setError(null);

      try {
        let response;

        if (searchKeyword) {
          response = await tourApiInstance.get<ApiResponse>("/searchKeyword1", {
            params: {
              pageNo: page,
              numOfRows: 10,
              listYN: "Y",
              arrange: "R",
              contentTypeId: 15,
              keyword: searchKeyword,
              cat3: selectedCat3,
              areaCode: areaCode || "",
            },
          });
        } else {
          response = await tourApiInstance.get<ApiResponse>("/areaBasedList1", {
            params: {
              numOfRows: 10,
              pageNo: page,
              _type: "json",
              listYN: "Y",
              arrange: "R",
              contentTypeId: 15,
              areaCode: areaCode || "",
              sigunguCode: "",
              cat1: "",
              cat2: "",
              cat3: selectedCat3,
            },
          });
        }

        const items = response.data.response.body.items.item || [];
        const totalCount = response.data.response.body.totalCount;

        if (page === 1) {
          setEvents(items);
        } else {
          setEvents((prev) => [...prev, ...items]);
        }

        setTotalCount(totalCount);
      } catch (error) {
        console.log(error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleSearch = (searchKeyword: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("keyword", searchKeyword);
    setPageNumber(1);
    setEvents([]);
    setSearchParams(newParams);
  };

  const handleFilterChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("cat3", value);
    } else {
      newParams.delete("cat3");
    }
    setPageNumber(1);
    setEvents([]);
    setSearchParams(newParams);
  };

  const handleAreaChange = (code: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (selectedArea === code) {
      newParams.delete("areaCode");
    } else {
      newParams.set("areaCode", String(code));
    }
    setPageNumber(1);
    setEvents([]);
    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchEventsData(keyword, selectedCategory, selectedArea, pageNumber);
  }, [fetchEventsData, keyword, selectedCategory, selectedArea, pageNumber]);

  // infinite scroll을 위한 IntersectionObserver 객체 생성
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPageNumber((prev) => prev + 1);
        }
      },
      { threshold: 0 },
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isLoading]);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>
      <div className="flex gap-[34px]">
        <div className="flex flex-col gap-[30px]">
          <SearchMap
            markers={events.map((event) => ({
              addr1: event.addr1,
              contentid: event.contentid,
              facltNm: event.title,
              firstImageUrl: event.firstimage,
              mapX: event.mapx,
              mapY: event.mapy,
            }))}
            type="event"
          />
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <CheckboxList categories={EVENT_PROGRESS} title="진행/예정" />
            <hr />
            <CheckboxList
              title="카테고리"
              categories={CATEGORY_OPTIONS}
              selectedValue={selectedCategory}
              onChange={(value) => handleFilterChange(value)}
            />
            <hr />
            <h4 className="text-base font-bold">지역</h4>
            <div className="grid grid-cols-3 gap-2.5 w-[230px]">
              {AREA.map((area) => (
                <EventAreaCheckbox
                  key={area.areaCode}
                  code={area.areaCode}
                  label={area.label}
                  value={area.value}
                  selectedArea={selectedArea}
                  onAreaChange={handleAreaChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">검색 결과 {totalCount}개</h2>

          {isLoading && <p>데이터를 불러오는 중입니다...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && events.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
              {events.map((event) => {
                const bookmarked = isBookmarked(event.contentid);
                const category = getCategoryName(event.cat3);
                return (
                  <SearchCard
                    key={event.contentid}
                    img={event.firstimage}
                    bookmarked={!!bookmarked}
                    category={category}
                    handleClick={() =>
                      navigate(PATH.eventInfo(event.contentid), {
                        state: { event },
                      })
                    }
                    handleClickBookmark={(e) =>
                      bookmarked
                        ? handleUnlike(e, bookmarked._id)
                        : handleLike(e, event.contentid, {
                            category,
                            image: event.firstimage,
                            location: event.addr1,
                            title: event.title,
                          })
                    }
                    location={`${event.addr1}`}
                    title={event.title}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-2xl text-gray-scale-200">검색 결과가 없습니다.</p>
          )}
          {/* 무한 스크롤 관련 */}
          <div ref={loadMoreRef} className="bg-slate-100 h-40" />
        </div>
      </div>
    </>
  );
}
