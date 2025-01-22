import { useState } from "react";
import { GoSearch } from "react-icons/go";

export default function SearchBar({ className, backgroundColor }) {
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
        <button type="submit" className="p-2 rounded-full mx-2 absolute right-0">
          <GoSearch className="size-[24px]" />
        </button>
      </form>
    </div>
  );
}
