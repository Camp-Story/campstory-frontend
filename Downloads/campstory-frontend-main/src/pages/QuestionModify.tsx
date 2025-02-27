import InputContainer from "@components/community/question/QuestionCreate/InputContainer";
import QuestionTag from "@components/community/QuestionTag";

export default function QuestionModify() {
  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">질문 수정하기</h1>

      <div className="flex flex-col gap-5">
        <InputContainer title="제목">
          <input
            placeholder="이곳에 제목을 입력해주세요 (최대 20자 작성)"
            maxLength={20}
            className="p-3.5 px-[25px] text-[15px] border border-gray-scale-200 rounded-sm focus:outline-none"
          />
        </InputContainer>
        <InputContainer title="카테고리">
          <div className="flex gap-2">
            <QuestionTag tag="reservation" isCheckbox />
            <QuestionTag tag="payment" isCheckbox />
            <QuestionTag tag="member" isCheckbox />
            <QuestionTag tag="campingGear" isCheckbox />
            <QuestionTag tag="campsite" isCheckbox />
            <QuestionTag tag="tips" isCheckbox />
          </div>
        </InputContainer>
        <InputContainer title="내용">
          <textarea
            autoFocus
            className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none text-[15px]"
            placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          />
        </InputContainer>
        <button className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]">
          수정하기
        </button>
      </div>
    </div>
  );
}
