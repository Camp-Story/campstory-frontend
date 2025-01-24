import AreaCard from "@components/community/community/AreaCard";
import ImageUploader from "@components/community/communityCreate/ImageUploader";
import Tag from "@components/community/Tag";
import { useParams } from "react-router";

export default function CommunityModify() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 수정</h1>
      <ImageUploader />

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
          수정하기
        </button>
      </div>
    </div>
  );
}
