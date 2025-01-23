import { useState } from "react";
interface FilterButtonsProps {
  filters: Array<string>;
}
export default function FilterButtons({ filters }: FilterButtonsProps) {
  const [selectedFilter, setSelectedFilter] = useState("최신순"); // 기본 선택 필터

  return (
    <div className="flex justify-center gap-4 text-sm text-gray-scale-100">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`${
            selectedFilter === filter
              ? "font-bold text-sub-title text-black"
              : "text-sub-title text-gray-scale-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
