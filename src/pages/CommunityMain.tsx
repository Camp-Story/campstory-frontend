import SearchInput from "@components/common/SearchInput";
import Tag from "@components/community/Tag";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

export default function CommunityMain() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        <div className="flex gap-5 text-sm">
          <span className="text-gray-scale-400 font-bold">최신순</span>
          <span className="text-gray-scale-300">인기순</span>
        </div>

        <div className="flex gap-[5px]">
          <Tag tag="clean" />
          <Tag tag="kind" />
          <Tag tag="conveny" />
        </div>

        <button
          className="px-3 py-2 ml-auto text-white text-sm bg-primary-500 rounded"
          onClick={() => navigate(PATH.communityCreate)}
        >
          글 작성하기
        </button>
      </div>
    </>
  );
}
