import AreaCheckbox from "@components/camping/campingSearch/AreaCheckbox";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import CategoryCheckbox from "@components/camping/campingSearch/CategoryCheckbox";
import { CAMPING_AREA, CAMPING_CATEGORY } from "@constants/filters";
import { PATH } from "@constants/path";
import { campingDataResponse } from "types/CampingDataResponse";
import { goCampingInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useBookMark from "@hooks/useBookmark";
import { CAMPING_CHANNEL_ID } from "@constants/channelId";
import useInfiniteScroll from "@hooks/useInfiniteScroll";

const NUM_OF_ROWS = 50;

export default function CampingSearch() {
  const navigate = useNavigate();
  const { handleLike, handleUnlike, isBookmarked } = useBookMark(CAMPING_CHANNEL_ID);
  const [searchParams, setSearchParams] = useSearchParams();
  // API 관련 State
  const [campingData, setCampingData] = useState<campingDataResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  // URL Query 관련 State
  const [keyword, setKeyword] = useState<string>(searchParams.get("keyword") || "");
  const [categoryFilterList, setCategoryFilterList] = useState<string[]>(
    searchParams.get("category") ? searchParams.get("category")!.split(",") : [],
  );
  const [areaFilterList, setAreaFilterList] = useState<string[]>(
    searchParams.get("area") ? searchParams.get("area")!.split(",") : [],
  );

  const fetchCampingData = useCallback(
    async (searchKeyword: string | null, page: number) => {
      if (isPageEnd) return; // 마지막 페이지면 요청하지 않음
      setIsLoading(true);
      setError(null);
      try {
        const endpoint = searchKeyword ? "/searchList" : "/basedList";
        const params = {
          params: {
            numOfRows: NUM_OF_ROWS,
            pageNo: page,
            ...(searchKeyword && { keyword: searchKeyword }),
          },
        };
        const response = await goCampingInstance.get(endpoint, params);
        const newData = response.data.response.body.items?.item || [];
        if (!newData.length && page === 1) {
          setCampingData([]);
          throw new Error("No search results found.");
        }
        let data = newData;
        // 가져온 데이터 개수가 50보다 작으면 마지막 페이지로 판단
        if (data.length < NUM_OF_ROWS) {
          setIsPageEnd(true);
        }
        // 카테고리 체크박스 선택되어 있으면 데이터 필터링
        if (categoryFilterList.length !== 0) {
          data = filterCampingData(data, "category", categoryFilterList);
        }
        // 지역 체크박스 선택되어 있으면 데이터 필터링
        if (areaFilterList.length !== 0) {
          data = filterCampingData(data, "area", areaFilterList);
        }
        if (page === 1) {
          setCampingData(data);
        } else {
          setCampingData((prev) => [...prev, ...data]);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError("검색 결과가 없습니다.");
        } else {
          setError("캠핑 데이터를 가져오는 중 오류가 발생했습니다.");
        }
        console.error("Error fetching camping data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [isPageEnd, categoryFilterList, areaFilterList],
  );

  // SearchInput 키워드에 따라서 url 변경 & keyword 상태 업데이트
  const handleSearch = (searchKeyword: string) => {
    setPageNumber(1);
    setCampingData([]);
    setIsPageEnd(false);
    searchParams.set("keyword", searchKeyword);
    setSearchParams(searchParams);
    setKeyword(searchKeyword);
  };

  // 체크박스 체크 여부에 따라 url 변경 & categoryList, areaList 상태 업데이트
  const handleCheckbox = (criteria: "category" | "area", value: string, isChecked: boolean) => {
    const queryList = criteria === "category" ? [...categoryFilterList] : [...areaFilterList];
    const setFunc = criteria === "category" ? setCategoryFilterList : setAreaFilterList;
    setPageNumber(1);
    setIsPageEnd(false);
    setCampingData([]);
    if (isChecked) {
      queryList.push(value);
    } else {
      const index = queryList.indexOf(value);
      if (index !== -1) {
        queryList.splice(index, 1);
      }
    }
    searchParams.set(criteria, queryList.join(","));
    setSearchParams(searchParams);
    setFunc(queryList);
  };

  // URL Query에 따라 데이터 필터링
  const filterCampingData = (
    campingData: campingDataResponse[],
    criteria: "category" | "area",
    category: string[],
  ) => {
    const filterKey = criteria === "category" ? "induty" : "doNm";
    const filteredData = campingData.filter((item) =>
      category.some((cat) => item[filterKey].includes(cat)),
    );
    return filteredData;
  };

  useEffect(() => {
    fetchCampingData(keyword, pageNumber);
  }, [fetchCampingData, keyword, pageNumber]);

  // 무한스크롤
  const { loadMoreRef } = useInfiniteScroll({
    isPageEnd,
    isLoading,
    setPageNumber,
  });

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap markers={campingData} type="camping" />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <h4 className="text-base font-bold">카테고리</h4>
            <ul className="w-48 flex flex-col gap-5 text-[15px] font-medium text-gray-scale-400">
              {CAMPING_CATEGORY.map((campingCategory) => (
                <CategoryCheckbox
                  key={campingCategory.value}
                  label={campingCategory.label}
                  value={campingCategory.value}
                  checked={categoryFilterList.includes(campingCategory.value)}
                  handleChange={({ target }) =>
                    handleCheckbox("category", target.value, target.checked)
                  }
                />
              ))}
            </ul>

            <hr />

            <h4 className="text-base font-bold">지역</h4>
            <div className="grid grid-cols-3 gap-2.5 w-[230px]">
              {CAMPING_AREA.map((campingArea) => (
                <AreaCheckbox
                  key={campingArea.value}
                  label={campingArea.label}
                  value={campingArea.value}
                  checked={areaFilterList.includes(campingArea.value)}
                  handleChange={({ target }) =>
                    handleCheckbox("area", target.value, target.checked)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            {keyword ? `' ${keyword} '` : "전체"} 검색 결과{" "}
            {Intl.NumberFormat("ko-KR").format(Number(campingData.length))}개
          </h2>
          {/* {isLoading && "로딩중.."} */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            {campingData.length !== 0 ? (
              campingData.map((item) => {
                const bookmarked = isBookmarked(item.contentId);
                return (
                  <SearchCard
                    key={item.contentId}
                    img={item.firstImageUrl}
                    bookmarked={!!bookmarked}
                    category={item.induty}
                    location={item.addr1}
                    title={item.facltNm}
                    handleClickBookmark={(e) =>
                      bookmarked
                        ? handleUnlike(e, bookmarked._id)
                        : handleLike(e, item.contentId, {
                            image: item.firstImageUrl,
                            category: item.induty,
                            location: item.addr1,
                            title: item.facltNm,
                          })
                    }
                    handleClick={() =>
                      navigate(PATH.campingInfo(item.contentId), { state: { item } })
                    }
                  />
                );
              })
            ) : (
              <>
                <h3 className=" text-sub-title">{!isLoading && error}</h3>
              </>
            )}
          </div>
          <div ref={loadMoreRef} className="h-40" />
        </div>
      </div>
    </>
  );
}
