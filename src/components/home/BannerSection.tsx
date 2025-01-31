import { PATH } from "@constants/path";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

function SearchForm() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<string>();
  const [area, setArea] = useState<string>();

  const handleSubmit = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value, category, area);
      navigate({
        pathname: PATH.campingSearch,
        search: `?keyword=${inputRef.current.value}&category=${category}&area=${area}`,
      });
    }
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value); // 선택된 카테고리 값을 상태로 관리
  };

  const handleAreaChange = (value: string) => {
    setArea(value); // 선택된 카테고리 값을 상태로 관리
  };

  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 py-8 px-12 bg-white rounded-xl drop-shadow-custom flex items-end gap-4">
      <div className="flex flex-col gap-4 w-[200px]">
        <label htmlFor="camping" className="text-sub-title font-bold text-gray-scale-400">
          캠핑장
        </label>
        <input
          ref={inputRef}
          type="text"
          id="camping"
          placeholder="캠핑장 검색"
          className="w-full h-[50px] px-5 py-4 rounded text-body1 bg-gray-scale-100 focus:outline-none placeholder-gray-scale-200"
        />
      </div>
      <div className="flex flex-col gap-4 w-50">
        <label className="text-sub-title font-bold text-gray-scale-400">카테고리</label>
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[200px] h-[50px] px-5 py-4 text-body1 bg-gray-scale-100 rounded border-none data-[placeholder]:text-gray-scale-200">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent className="text-gray-scale-400">
            <SelectItem value="일반야영장">일반 야영장</SelectItem>
            <SelectItem value="글램핑">글램핑</SelectItem>
            <SelectItem value="카라반">카라반</SelectItem>
            <SelectItem value="자동차야영장">자동차 야영장</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4 w-50">
        <label className="text-sub-title font-bold text-gray-scale-400">지역</label>
        <Select onValueChange={handleAreaChange}>
          <SelectTrigger className="w-[200px] h-[50px] px-5 py-4 bg-gray-scale-100 rounded border-none data-[placeholder]:text-gray-scale-200 ">
            <SelectValue placeholder="지역 선택" />
          </SelectTrigger>
          <SelectContent className="text-gray-scale-400">
            <SelectItem value="서울시">서울</SelectItem>
            <SelectItem value="제주특별자치도">제주</SelectItem>
            <SelectItem value="부산시">부산</SelectItem>
            <SelectItem value="강원도">강원도</SelectItem>
            <SelectItem value="경기도">경기도</SelectItem>
            <SelectItem value="전라남도">전남</SelectItem>
            <SelectItem value="전라북도">전북</SelectItem>
            <SelectItem value="충청남도">충남</SelectItem>
            <SelectItem value="충청북도">충북</SelectItem>
            <SelectItem value="경상남도">경남</SelectItem>
            <SelectItem value="경상북도">경북</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button
        onClick={handleSubmit}
        className="flex-1 py-4 h-[50px] bg-secondary-300 text-body1 text-gray-scale-0 rounded hover:bg-secondary-500 transition"
      >
        검색
      </button>
    </div>
  );
}

export default function BannerSection() {
  return (
    <section className="relative mb-24">
      <img
        src="/images/main/main-banner-2.png"
        alt="자연 속에서 써내려가는 우리의 이야기, CAMP STORY"
        className="w-full object-cover"
      />
      <SearchForm />
    </section>
  );
}
