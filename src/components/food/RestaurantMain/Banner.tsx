import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="relative mt-[10px]">
      <img src="/images/food/food-banner.png" alt="메인이미지" className="w-full object-cover" />
      <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
