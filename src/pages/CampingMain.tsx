import Banner from "@components/camping/campingMain/Banner";
import CategoryCard from "@components/camping/campingMain/CategoryCard";
import Subtitle from "@components/camping/campingMain/Subtitle";

export default function CampingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Banner />
      <div>
        <Subtitle>카테고리별 캠핑장</Subtitle>
        <div className="flex gap-2 justify-between items-center">
          <CategoryCard src="/images/camping/camping-category-1.png">캠핑</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-2.png">글램핑</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-3.png">카라반</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-4.png">오토캠핑</CategoryCard>
        </div>
      </div>
    </div>
  );
}
