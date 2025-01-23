import AreaCheckbox from "@components/common/search/AreaCheckbox";
import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { AREA, EVENT_CATEGORY, EVENT_PROGRESS } from "@constants/filters";

export default function EventSearch() {
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
          <h2 className="text-[26px] font-bold text-gray-scale-400">'행사' 검색 결과 14개</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            <SearchCard
              img="/images/festival/searchFestival.png"
              bookmarked={true}
              category="(재)영주풍기인삼축제조직위원회"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경상북도 영주시 풍기읍 성내리"
              title="경북영주 풍기인삼축제"
            />
            <SearchCard
              img="/images/festival/searchFestival.png"
              bookmarked={false}
              category="(재)영주풍기인삼축제조직위원회"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경상북도 영주시 풍기읍 성내리"
              title="경북영주 풍기인삼축제"
            />
            <SearchCard
              img="/images/festival/searchFestival.png"
              bookmarked={false}
              category="(재)영주풍기인삼축제조직위원회"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경상북도 영주시 풍기읍 성내리"
              title="경북영주 풍기인삼축제"
            />
            <SearchCard
              img=""
              bookmarked={false}
              category="(재)영주풍기인삼축제조직위원회"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="경상북도 영주시 풍기읍 성내리"
              title="경북영주 풍기인삼축제"
            />
          </div>
        </div>
      </div>
    </>
  );
}
