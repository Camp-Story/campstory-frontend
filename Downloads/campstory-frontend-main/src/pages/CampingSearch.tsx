import AreaCheckbox from "@components/camping/campingSearch/AreaCheckbox";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";
import CategoryCheckbox from "@components/camping/campingSearch/CategoryCheckbox";
import { CAMPING_AREA, CAMPING_CATEGORY } from "@constants/filters";
import { PATH } from "@constants/path";
import campingDataResponse from "types/CampingDataResponse";
import { goCampingInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function CampingSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // API 관련 State
  const [campingData, setCampingData] = useState<campingDataResponse[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // URL Query 관련 State
  const [keyword, setKeyword] = useState<string>(searchParams.get("keyword") || "");
  const [categoryFilterList, setCategoryFilterList] = useState<string[]>(
    searchParams.get("category") ? searchParams.get("category")!.split(",") : [],
  );
  const [areaFilterList, setAreaFilterList] = useState<string[]>(
    searchParams.get("area") ? searchParams.get("area")!.split(",") : [],
  );

  const fetchCampingData = useCallback(
    async (searchKeyword: string | null) => {
      setIsLoading(true);
      setError(null);
      try {
        const endpoint = searchKeyword ? "/searchList" : "/basedList";
        const params = searchKeyword
          ? {
              params: {
                numOfRows: 100,
                pageNo: 1,
                keyword: searchKeyword,
              },
            }
          : { params: { numOfRows: 100, pageNo: 1 } };
        const response = await goCampingInstance.get(endpoint, params);
        if (!response.data.response.body.items.item) {
          setCampingData([]);
          setCount(0);
          throw new Error("No search results found.");
        }
        let data = response.data.response.body.items.item;
        // 카테고리 체크박스 선택되어 있으면 데이터 필터링
        if (categoryFilterList.length !== 0) {
          data = filterCampingData(data, "category", categoryFilterList);
        }
        // 지역 체크박스 선택되어 있으면 데이터 필터링
        if (areaFilterList.length !== 0) {
          data = filterCampingData(data, "area", areaFilterList);
        }
        setCampingData(data);
        setCount(data.length);
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
    [categoryFilterList, areaFilterList],
  );

  // SearchInput 키워드에 따라서 url 변경 & keyword 상태 업데이트
  const handleSearch = (searchKeyword: string) => {
    searchParams.set("keyword", searchKeyword);
    setSearchParams(searchParams);
    setKeyword(searchKeyword);
  };

  // 체크박스 체크 여부에 따라 url 변경 & categoryList, areaList 상태 업데이트
  const handleCheckbox = (criteria: "category" | "area", value: string, isChecked: boolean) => {
    const queryList = criteria === "category" ? [...categoryFilterList] : [...areaFilterList];
    const setFunc = criteria === "category" ? setCategoryFilterList : setAreaFilterList;
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
    fetchCampingData(keyword);
  }, [fetchCampingData, keyword]);

  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap />

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
            {Intl.NumberFormat("ko-KR").format(Number(count))}개
          </h2>
          {isLoading && "로딩중.."}
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            {campingData.length !== 0 ? (
              campingData.map((item) => (
                <SearchCard
                  key={item.contentId}
                  img={item.firstImageUrl}
                  bookmarked={false}
                  category={item.induty}
                  location={item.addr1}
                  title={item.facltNm}
                  handleClickBookmark={() => alert("bookmark")}
                  handleClick={() =>
                    navigate(PATH.campingInfo(item.contentId), { state: { item } })
                  }
                />
              ))
            ) : (
              <>
                <h3 className=" text-sub-title">{error ? error : "검색 결과가 없습니다."}</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
