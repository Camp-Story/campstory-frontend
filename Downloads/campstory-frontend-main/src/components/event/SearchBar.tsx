import { PATH } from "@constants/path";
import { useState } from "react";
import { useNavigate } from "react-router";

type SearchBarProps = {
  className?: string;
  backgroundColor?: string;
};

export default function SearchBar({ className, backgroundColor }: SearchBarProps) {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`${PATH.eventSearch}?keyword=${encodeURIComponent(query)}`);
    }
  };
  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className=" bg-slate-50 flex mx-auto items-center justify-between rounded-full relative"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`py-3 px-6 w-[892px] font-semibold rounded-full   ${
            backgroundColor
              ? focus
                ? "bg-white placeholder-slate-600  focus:outline-green-700"
                : "bg-slate-200 placeholder-slate-600  focus:outline-green-700"
              : "bg-white focus:outline-secondary-300"
          }`}
        />
        <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-[20px] p-2">
          <img src="/SearchIcon.svg" alt="searchIcon" />
        </button>
      </form>
    </div>
  );
}
