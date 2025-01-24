import InputContainer from "@components/community/question/QuestionCreate/InputContainer";
import QuestionTag from "@components/community/QuestionTag";

export default function QuestionCreate() {
  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 쓰기</h1>

      <div className="flex flex-col gap-5">
        <InputContainer title="제목">
          <input
            placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
            className="p-4 px-[25px] border border-gray-scale-200 rounded-sm focus:outline-none"
          />
        </InputContainer>
        <InputContainer title="태그 선택">
          <div className="flex gap-3">
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
            className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none"
            placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          />
        </InputContainer>
        <button className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]">
          저장하기
        </button>
      </div>
    </div>
  );
}
