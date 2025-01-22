import { useState } from "react";

type SearchBarProps = {
  className?: string;
  backgroundColor?: string;
};

export default function SearchBar({ className, backgroundColor }: SearchBarProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={className}>
      <form className=" bg-slate-50 flex mx-auto items-center justify-between rounded-full relative">
        <input
          placeholder="검색어를 입력하세요"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`py-3 px-6 w-[800px] font-semibold rounded-full  ${
            backgroundColor
              ? focus
                ? "bg-white placeholder-slate-600  focus:outline-green-700"
                : "bg-slate-200 placeholder-slate-600  focus:outline-green-700"
              : "bg-white focus:outline-slate-200"
          }`}
        />
      </form>
    </div>
  );
}
