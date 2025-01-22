import SearchInput from "@components/common/SearchInput";
import { AREA, CAMPING_CATEGORY } from "@constants/filters";

export default function CampingSearch() {
  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>
      <div className="flex gap-[34px]">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <img src="/images/map-small.png" alt="map small" />
            <div
              className="absolute top-0 w-full h-full flex items-center justify-center"
              onClick={() => alert("see map")}
            >
              <div className="w-fit bg-info-500 text-gray-scale-100 rounded px-[23px] py-[13px]">
                지도 보기
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">필터</h3>
            <h4 className="text-base font-bold">카테고리</h4>
            <ul className="w-48 flex flex-col gap-5 text-[15px] font-medium text-gray-scale-400">
              {CAMPING_CATEGORY.map((category) => (
                <li className="w-full border-none">
                  <div className="flex gap-2 items-center">
                    <input
                      id={category.value}
                      type="checkbox"
                      value=""
                      className="appearance-none w-6 h-5 rounded-full checked:bg-info-500 checked:border-info-500 bg-gray-scale-100 border-gray-scale-300"
                    />
                    <label htmlFor={category.value} className="w-full">
                      {category.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>

            <hr />

            <h4 className="text-base font-bold">지역</h4>
            <div className="grid grid-cols-3 gap-2.5 w-[230px]">
              {AREA.map((area) => (
                <div className="flex gap-2 items-center w-fit">
                  <input id={area.label} type="checkbox" value="" className="hidden peer" />
                  <label
                    htmlFor={area.label}
                    className="border border-gray-scale-100 peer-checked:border-[#1A9EFE]/50 peer-checked:bg-[#1A9EFE]/15 peer-checked:text-info-500 w-[70px] text-center py-1 rounded-[20px] text-[13px] font-bold"
                  >
                    {area.shorten}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
