import AreaCheckbox from "@components/camping/campingSearch/AreaCheckbox";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { CAMPING_AREA, CAMPING_CATEGORY } from "@constants/filters";
import { PATH } from "@constants/path";
import campingDataResponse from "types/CampingDataResponse";
import { goCampingInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import CategoryCheckbox from "@components/camping/campingSearch/CategoryCheckbox";

export default function CampingSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [campingData, setCampingData] = useState<campingDataResponse[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [keyword, setKeyword] = useState<string>(searchParams.get("keyword") || "");
  const [category, setCategory] = useState<string[]>(
    searchParams.get("category") ? searchParams.get("category")!.split(",") : [],
  );
  const [area, setArea] = useState<string[]>(
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
        console.log(response.data.response.body.items.item);
        console.log("category: ", category, "/ area: ", area);
        let data = response.data.response.body.items.item;
        if (category.length !== 0) {
          data = filterCampingData(data, "category", category);
        }
        if (area.length !== 0) {
          data = filterCampingData(data, "area", area);
        }
        setCampingData(data);
        setCount(data.length);
      } catch (error) {
        setError("캠핑 데이터를 가져오는 중 오류가 발생했습니다.");
        console.error("Error fetching camping data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [area, category],
  );

  useEffect(() => {
    fetchCampingData(keyword);
  }, [fetchCampingData, keyword]);

  const handleSearch = (searchKeyword: string) => {
    searchParams.append("keyword", searchKeyword);
    setSearchParams(searchParams);
    setKeyword(searchKeyword); // 검색어 상태 업데이트
  };

  // 카테고리에 따른 데이터 필터링 함수
  const filterCampingData = (
    campingData: campingDataResponse[],
    criteria: "category" | "area",
    category: string[],
  ) => {
    const filterKey = criteria === "category" ? "induty" : "doNm";
    const filteredData = campingData.filter((item) =>
      category.some((cat) => item[filterKey].includes(cat)),
    );
    console.log(filteredData);
    console.log("category: ", category);
    return filteredData;
  };

  // 카테고리 체크박스 체크 여부에 따라 url 변경 및 category, area 상태 변경
  const handleCheckbox = (criteria: "category" | "area", value: string, isChecked: boolean) => {
    const queryList = criteria === "category" ? [...category] : [...area];
    const setFunc = criteria === "category" ? setCategory : setArea;
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
                  checked={category.includes(campingCategory.value)}
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
                  checked={area.includes(campingArea.value)}
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
            {error}
            {campingData.length !== 0 ? (
              campingData.map((item) => (
                <SearchCard
                  key={item.contentId}
                  img={item.firstImageUrl}
                  bookmarked={false}
                  category={item.induty}
                  handleClick={() =>
                    navigate(PATH.campingInfo(item.contentId), { state: { item } })
                  }
                  handleClickBookmark={() => alert("bookmark")}
                  location={item.addr1}
                  title={item.facltNm}
                />
              ))
            ) : (
              <>
                <h3 className=" text-sub-title">검색 결과가 없습니다.</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
