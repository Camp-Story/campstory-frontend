import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="relative mt-[10px]">
      <img
        src="/images/festival/festival-banner.png"
        alt="festival banner"
        className="w-full object-cover"
      />
      <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
