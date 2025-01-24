import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import QuestionTag from "@components/community/QuestionTag";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

export default function QuestionMain() {
  const navigate = useNavigate();
  return (
    <>
      {/* SearchBar */}
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        {/* OrderRadio */}
        <div className="flex gap-5 text-sm">
          <OrderRadio label="최신순" value="recent" defaultChecked />
          <OrderRadio label="인기순" value="popular" />
        </div>

        {/* Tags */}
        <div className="flex gap-[5px]">
          <QuestionTag tag="reservation" isCheckbox />
          <QuestionTag tag="payment" isCheckbox />
          <QuestionTag tag="member" isCheckbox />
          <QuestionTag tag="campingGear" isCheckbox />
          <QuestionTag tag="campsite" isCheckbox />
          <QuestionTag tag="tips" isCheckbox />
        </div>

        {/* Button */}
        <button
          className="px-3 py-2 ml-auto text-white text-sm bg-primary-500 rounded"
          onClick={() => navigate(PATH.questionCreate)}
        >
          글 작성하기
        </button>
      </div>
    </>
  );
}
