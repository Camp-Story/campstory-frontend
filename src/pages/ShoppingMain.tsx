import SearchBar from "@components/common/main/SearchBar";
import SubTitle from "@components/common/main//Subtitle";
import CategoryCard from "@components/shopping/CategoryCard";
import { PATH } from "@constants/path";

export default function ShoppingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      {/* Banner */}
      <div className="relative">
        <img src="/images/shopping/shopping-banner.png" alt="banner" className="w-full" />
        <SearchBar
          handleSubmit={() => alert("search!")}
          className="absolute bottom-[60px] left-[50%] -translate-x-[50%]"
        />
      </div>

      {/* Category */}
      <div>
        <SubTitle>카테고리별 분류</SubTitle>
        <div className="flex gap-0 justify-between">
          <CategoryCard
            src="/images/shopping/food.png"
            catName="먹거리"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/tent.png"
            catName="텐트"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/sleeping-bag.png"
            catName="침낭"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/brazier.png"
            catName="화로대"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/camping-furniture.png"
            catName="캠핑 가구"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/bonfire.png"
            catName="소모품"
            path={PATH.shoppingInfoPath}
          />
        </div>
      </div>
    </div>
  );
}
