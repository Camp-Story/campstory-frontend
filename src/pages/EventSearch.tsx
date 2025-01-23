import AreaCheckbox from "@components/common/search/AreaCheckbox";
import CategoryCheckbox from "@components/common/search/CategoryCheckbox";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { AREA, CAMPING_CATEGORY } from "@constants/filters";

export default function EventSearch() {
  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[34px] pb-5">
        <div className="flex flex-col gap-[30px]">
          <SearchMap />

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <h4 className="text-base font-bold">카테고리</h4>
            <ul className="w-48 flex flex-col gap-5 text-[15px] font-medium text-gray-scale-400">
              {CAMPING_CATEGORY.map((category) => (
                <CategoryCheckbox
                  label={category.label}
                  value={category.value}
                  key={category.value}
                />
              ))}
            </ul>

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
          <h2 className="text-[26px] font-bold text-gray-scale-400">'캠핑' 검색 결과 14개</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            <SearchCard
              bookmarked={false}
              category="오토캠핑•펜션"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경기도 가평군 가화로 1364-59"
              title="가평미라몬티풀빌라펜션"
            />
            <SearchCard
              bookmarked={true}
              category="오토캠핑•펜션"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경기도 가평군 가화로 1364-59"
              title="가평미라몬티풀빌라펜션"
            />
            <SearchCard
              bookmarked={true}
              category="오토캠핑•펜션"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경기도 가평군 가화로 1364-59"
              title="가평미라몬티풀빌라펜션"
            />
            <SearchCard
              bookmarked={false}
              category="오토캠핑•펜션"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경기도 가평군 가화로 1364-59"
              title="가평미라몬티풀빌라펜션"
            />
          </div>
        </div>
      </div>
    </>
  );
}
