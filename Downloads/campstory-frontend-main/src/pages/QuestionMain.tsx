import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import QuestionCard from "@components/community/question/QuestionCard";
import QuestionTag from "@components/community/QuestionTag";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

export default function QuestionMain() {
  const navigate = useNavigate();
  return (
    <div className="mt-14 px-4">
      {/* SearchBar */}
      <div className="mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        {/* OrderRadio */}
        <div className="flex gap-5 text-sub-title">
          <OrderRadio label="최신순" value="recent" defaultChecked />
          <OrderRadio label="인기순" value="popular" />
        </div>

        {/* Tags */}
        <div className="flex gap-3">
          <QuestionTag tag="reservation" isCheckbox />
          <QuestionTag tag="payment" isCheckbox />
          <QuestionTag tag="member" isCheckbox />
          <QuestionTag tag="campingGear" isCheckbox />
          <QuestionTag tag="campsite" isCheckbox />
          <QuestionTag tag="tips" isCheckbox />
        </div>

        {/* Button */}
        <button
          className="px-3 py-2 ml-auto text-white text-body1 bg-primary-500 rounded"
          onClick={() => navigate(PATH.questionCreate)}
        >
          질문 작성하기
        </button>
      </div>

      {/* QuestionCards */}
      <div className="grid grid-cols-2 gap-x-7 gap-y-10 justify-between">
        <QuestionCard handleClick={() => navigate(PATH.questionPostPath)} />
        <QuestionCard handleClick={() => navigate(PATH.questionPostPath)} />
        <QuestionCard handleClick={() => navigate(PATH.questionPostPath)} />
        <QuestionCard handleClick={() => navigate(PATH.questionPostPath)} />
      </div>
    </div>
  );
}
