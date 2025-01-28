import AreaCheckbox from "@components/common/search/AreaCheckbox";
import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { AREA, CAMPING_CATEGORY } from "@constants/filters";
import { PATH } from "@constants/path";
import campingDataResponse from "types/CampingDataResponse";
import { goCampingInstance } from "@utils/axiosInstance";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function CampingSearch() {
  const navigate = useNavigate();
  const location = useLocation();

  const [campingData, setCampingData] = useState<campingDataResponse[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>(location.state.input);

  const fetchCampingData = async (searchKeyword: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await goCampingInstance.get("/searchList", {
        params: {
          numOfRows: 30,
          pageNo: 1,
          keyword: searchKeyword,
        },
      });
      // console.log(response.data.response.body.items.item);
      setCampingData(response.data.response.body.items.item);
      setCount(response.data.response.body.totalCount);
    } catch (error) {
      setError("캠핑 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching camping data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCampingData(keyword);
  }, [keyword]);

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword); // 검색어 상태 업데이트
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
            <CheckboxList categories={CAMPING_CATEGORY} title="카테고리" />

            <hr />

            <h4 className="text-base font-bold">지역</h4>
            <div className="grid grid-cols-3 gap-2.5 w-[230px]">
              {AREA.map((area) => (
                <AreaCheckbox
                  key={area.code}
                  code={area.code}
                  label={area.label}
                  value={area.value}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">
            '{keyword}' 검색 결과 {Intl.NumberFormat("ko-KR").format(Number(count))}개
          </h2>
          {isLoading && "로딩중.."}
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            {error}
            {campingData.length !== 0 &&
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
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
