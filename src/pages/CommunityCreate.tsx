import ImageIcon from "@components/community/icons/ImageIcon";

export default function CommunityCreate() {
  return (
    <div className="w-[618px] mx-auto mt-[70px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 쓰기</h1>
      <div className="flex gap-[11px]">
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
    </div>
  );
}
