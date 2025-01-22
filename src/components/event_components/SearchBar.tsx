import { useState } from "react";

interface SearchBarProps {
  className: string;
  backgroundColor?: boolean;
}

export default function SearchBar({ className, backgroundColor }: SearchBarProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={className}>
      <input
        placeholder="검색어를 입력하세요"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`py-3 px-6 w-[800px] rounded-full focus:outline-secondary-500 ${
          backgroundColor
            ? focus
              ? "bg-white placeholder-slate-600"
              : "bg-slate-200 placeholder-slate-600"
            : "bg-white"
        } `}
      />
    </div>
  );
}
