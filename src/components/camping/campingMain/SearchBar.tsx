interface SearchBarProps {
  className: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={className}>
      <input
        placeholder="검색어를 입력하세요"
        className="relative py-3 px-6 w-[892px] rounded-full placeholder-gray-scale-300 focus:outline-green-700"
      />
      {/* <img
        src="/SearchIcon.svg"
        alt="searchIcon"
        className="absolute top-[50%] -translate-y-[50%] right-[30px]"
      /> */}
    </div>
  );
}
