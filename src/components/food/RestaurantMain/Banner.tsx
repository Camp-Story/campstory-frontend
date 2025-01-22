import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <>
      <div className="relative ">
        <img
          src="/images/food/food-banner.png"
          alt="메인이미지지"
          className="w-full object-cover"
        />
        <div className="min-w-96 mx-auto absolute bottom-[140px] left-[50%] -translate-x-[50%] text-3xl text-white"></div>
        <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
      </div>
    </>
  );
}
