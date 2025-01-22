import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <>
      <div className="relative ">
        <img src="/image.png" alt="치킨피자" className="w-full object-cover" />
        <div className="min-w-96 mx-auto absolute bottom-[140px] left-[50%] -translate-x-[50%] text-3xl text-white">
          <div className="my-2 ">캠핑 후 즐길 맛집, 여기서 찾으세요!</div>
          <div className=" font-extrabold">최고의 맛집 정보를 한눈에.</div>
        </div>
        <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
      </div>
    </>
  );
}
