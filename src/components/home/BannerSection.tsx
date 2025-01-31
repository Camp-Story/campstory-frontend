import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";

function SearchForm() {
  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 py-8 px-12 bg-white rounded-xl drop-shadow-custom flex items-end gap-4">
      <div className="flex flex-col gap-4 w-50">
        <label htmlFor="camping" className="text-sub-title font-bold text-gray-scale-400">
          캠핑장
        </label>
        <input
          type="text"
          id="camping"
          placeholder="캠핑장 검색"
          className="w-full px-5 py-4 rounded text-body1 bg-gray-scale-100 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4 w-50">
        <label htmlFor="date" className="text-sub-title font-bold text-gray-scale-400">
          날짜
        </label>
        <input
          type="text"
          id="date"
          placeholder="01.16 목 - 01-17 금 (1박)"
          className="w-full px-5 py-4 rounded text-body1 bg-gray-scale-100 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4 w-50">
        <label className="text-sub-title font-bold text-gray-scale-400">지역</label>
        <Select>
          <SelectTrigger className="w-[200px] px-5 py-4 text-body1">
            <SelectValue placeholder="지역 선택" className="text-body1" />
          </SelectTrigger>
          <SelectContent>
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
      <button className="flex-1 py-4 bg-secondary-300 text-body1 text-gray-scale-0 rounded hover:bg-secondary-500 transition">
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
