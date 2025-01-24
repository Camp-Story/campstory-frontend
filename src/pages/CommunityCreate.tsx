import AreaCard from "@components/community/community/AreaCard";
import Tag from "@components/community/Tag";
import ImageIcon from "@components/community/icons/ImageIcon";

export default function CommunityCreate() {
  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 쓰기</h1>
      <div className="flex gap-[11px] mb-10">
        <div>
          <input
            type="file"
            id="image"
            accept="image/png, image/gif, image/jpeg"
            className="hidden"
          />
          <label
            htmlFor="image"
            className="flex flex-col gap=[5px] justify-center items-center rounded w-[110px] h-[110px] bg-gray-scale-100"
          >
            <ImageIcon />
            <span className="text-[15px] text-gray-scale-400">4/10</span>
          </label>
        </div>
        <div className="snap-x flex gap-[11px] snap-mandatory w-full overflow-x-scroll scrollbar-hidden">
          <div className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]">
            <img src="https://placehold.co/110x110?text=CAMP+STORY" alt="community image" />
          </div>
          <div className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]">
            <img src="https://placehold.co/110x110?text=CAMP+STORY" alt="community image" />
          </div>
          <div className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]">
            <img src="https://placehold.co/110x110?text=CAMP+STORY" alt="community image" />
          </div>
          <div className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]">
            <img src="https://placehold.co/110x110?text=CAMP+STORY" alt="community image" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[15px]">
        <h2 className="text-sub-title">장소 선택</h2>
        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
        <h2 className="text-sub-title">태그 선택</h2>
        <div className="flex gap-[5px]">
          <Tag tag="clean" isCheckbox />
          <Tag tag="kind" isCheckbox />
          <Tag tag="convenience" isCheckbox />
        </div>
        <textarea
          autoFocus
          className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none"
          placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
        />
        <button className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]">
          저장하기
        </button>
      </div>
    </div>
  );
}
