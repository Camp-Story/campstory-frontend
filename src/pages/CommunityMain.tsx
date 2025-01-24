import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import PostCard from "@components/community/community/PostCard";
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
          <OrderRadio label="최신순" value="recent" defaultChecked />
          <OrderRadio label="인기순" value="popular" />
        </div>

        <div className="flex gap-[5px]">
          <Tag tag="clean" isCheckbox />
          <Tag tag="kind" isCheckbox />
          <Tag tag="convenience" isCheckbox />
        </div>

        <button
          className="px-3 py-2 ml-auto text-white text-sm bg-primary-500 rounded"
          onClick={() => navigate(PATH.communityCreate)}
        >
          글 작성하기
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-[64px] gap-y-[60px]">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
