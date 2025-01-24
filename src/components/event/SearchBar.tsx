import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

interface SearchBarProps {
  className: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <input
        placeholder="검색어를 입력해주세요."
        className="relative py-3 px-6 w-[892px] rounded-full placeholder-gray-scale-300 focus:outline-secondary-300"
      />
      <button
        onClick={() => navigate(PATH.campingSearch)}
        className="absolute top-[50%] -translate-y-[50%] right-[20px] p-2"
      >
        <img src="/SearchIcon.svg" alt="searchIcon" />
      </button>
    </div>
  );
}
