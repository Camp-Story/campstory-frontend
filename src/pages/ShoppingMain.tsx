import SearchBar from "@components/common/main/SearchBar";

export default function ShoppingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      {/* Banner */}
      <div className="relative">
        <img src="/images/shpping/shopping-banner.png" alt="banner" className="w-full" />
        <SearchBar
          handleSubmit={() => alert("search!")}
          className="absolute bottom-[60px] left-[50%] -translate-x-[50%]"
        />
      </div>
    </div>
  );
}
