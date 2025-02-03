import InputContainer from "@components/community/question/QuestionCreate/InputContainer";
import QuestionTag from "@components/community/QuestionTag";
// import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import { useState } from "react";
// import { useNavigate } from "react-router";

export default function QuestionCreate() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  // const navigate = useNavigate()
  const token = localStorage.getItem("token");
  console.log(token);
  // const token = tokenLoader();
  // console.log(token);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(formData.title + formData.content);
    const response = await apiInstance.post(
      "/posts/create",
      {
        title: JSON.stringify(formData),
        channelId: "67a01c3c896e1c0cc883e18c",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (response.status === 200 || response.status === 201) {
      alert("작성 성공!");
      // navigate(PATH.question);
    }
  };

  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">질문 작성하기</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputContainer title="제목">
          <input
            name="title"
            placeholder="이곳에 제목을 입력해주세요 (최대 20자 작성)"
            maxLength={20}
            onChange={handleChange}
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
            name="content"
            onChange={handleChange}
            className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none text-[15px]"
            placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          />
        </InputContainer>
        <button
          type="submit"
          className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]"
        >
          저장하기
        </button>
      </form>
    </div>
  );
}
