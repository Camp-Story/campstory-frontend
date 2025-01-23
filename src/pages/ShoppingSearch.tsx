import SearchInput from "@components/common/SearchInput";
import Category from "@components/shopping/Category";
import FilterButtons from "@components/shopping/Filter";

export default function ShoppingSearch() {
  return (
    <>
      <div className="mt-[100px]">
        <SearchInput handleSubmit={() => alert("succecssfully submited")} />
      </div>
      <div className="flex justify-center items-center gap-[30px] mt-[30px]">
        <Category path="먹거리" src="/images/shopping/food.png" catName="먹거리" />
        <Category path="텐트" src="/images/shopping/tent.png" catName="텐트" />
        <Category path="침낭" src="/images/shopping/sleeping-bag.png" catName="침낭" />
        <Category path="화로대" src="/images/shopping/brazier.png" catName="화로대" />
        <Category
          path="캠핑 가구"
          src="/images/shopping/camping-furniture.png"
          catName="캠핑 가구"
        />
        <Category path="소모품" src="/images/shopping/bonfire.png" catName="소모품" />
      </div>
      <div className="flex mt-[64px] ">
        <FilterButtons filters={["판매인기순", "높은금액순", "낮은금액순", "최신순"]} />
      </div>
    </>
  );
}
