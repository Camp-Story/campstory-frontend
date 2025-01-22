import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="relative">
      <img src="/images/camping/camping-banner.png" alt="camping banner" className="w-full" />
      <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
