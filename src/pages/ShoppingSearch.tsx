import { useState } from "react";
import SearchInput from "@components/common/SearchInput";
import Category from "@components/shopping/Category";
import ProductCardList from "@components/shopping/ProductCardList";
import OrderRadio from "@components/community/OrderRadio";

export default function ShoppingSearch() {
  const [orderBy, setOrderBy] = useState("sim");
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderBy(e.target.value);
    console.log("Selected order:", e.target.value);
  };

  return (
    <div className="mx-">
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
      <div className="flex mt-[64px] gap-5 text-[18px] mb-10" onChange={handleOrderChange}>
        <OrderRadio label="높은금액순" value="dsc" />
        <OrderRadio label="낮은금액순" value="asc" />
        <OrderRadio label="날짜순" value="date" />
        <OrderRadio label="관련도순" value="sim" defaultChecked />
      </div>

      <div className="mb-[208px] mt-[10px] gap-4">
        <ProductCardList orderBy={orderBy} />
      </div>
    </div>
  );
}
