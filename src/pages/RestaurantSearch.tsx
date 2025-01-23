import CheckboxList from "@components/common/search/CheckboxList";
import SearchCard from "@components/common/search/SearchCard";
import SearchMap from "@components/common/search/SearchMap";
import SearchInput from "@components/common/SearchInput";

import { RESTURANT_CATEGORY } from "@constants/filters";

export default function RestaurantSearch() {
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
            <CheckboxList categories={RESTURANT_CATEGORY} title="카테고리" />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[26px] font-bold text-gray-scale-400">'음식' 검색 결과 14개</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]">
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={true}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
            <SearchCard
              img="/images/food/restaurants/searchRestaurant.png"
              bookmarked={false}
              category="이색음식점"
              handleClick={() => alert("click")}
              handleClickBookmark={() => alert("bookmark")}
              location="제주특별자치도 제주시 곽지1길 18 "
              title="곽지Bar다"
            />
          </div>
        </div>
      </div>
    </>
  );
}
