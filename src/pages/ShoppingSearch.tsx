import SearchInput from "@components/common/SearchInput";
import ShowCategories from "@components/shopping/categories";

export default function ShoppingSearch() {
  return (
    <>
      <SearchInput handleSubmit={() => alert("succecssfully submited")} />
      <ShowCategories />
    </>
  );
}
