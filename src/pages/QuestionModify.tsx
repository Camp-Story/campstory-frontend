import InputContainer from "@components/community/question/QuestionCreate/InputContainer";
import QuestionTag, { Tag } from "@components/community/QuestionTag";
import PostResponse from "types/PostResponse";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { apiInstance } from "@utils/axiosInstance";
import { QUESTION_CHANNEL_ID } from "@constants/channelId";
import { PATH } from "@constants/path";

const TAGS: Tag[] = ["reservation", "payment", "member", "campingGear", "campsite", "tips"];

export default function QuestionModify() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [questionData, setQuestionData] = useState<PostResponse>();
  const [formData, setFormData] = useState({ title: "", tag: [] as string[], content: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDetailData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiInstance.get<PostResponse>(`/posts/${id}`);
      setQuestionData(response.data);
    } catch (error) {
      setError("질문 정보를 가져오는 중 오류가 발생했습니다.");
      console.log("Error fetching question data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const isDefaultChecked = (tag: string): boolean => {
    return formData.tag.includes(tag);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log(e.target);
    setFormData((prev) => ({
      ...prev,
      tag: checked ? [...prev.tag, value] : prev.tag.filter((tag) => tag !== value),
    }));
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await apiInstance.put(
      "/posts/update",
      {
        postId: id,
        title: JSON.stringify(formData),
        channelId: QUESTION_CHANNEL_ID,
        image: null,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (response.status === 200 || response.status === 201) {
      alert("수정 성공!");
      navigate(PATH.questionPost(id!), { state: { userId: questionData?.author._id } });
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, [fetchDetailData]);

  useEffect(() => {
    if (questionData) {
      try {
        const { title, tag, content } = JSON.parse(questionData.title);
        setFormData({ title, tag, content });
      } catch (error) {
        console.error("JSON 파싱 에러:", error);
      }
    }
  }, [questionData]);

  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">질문 수정하기</h1>
      {isLoading && <p>로딩중...</p>}
      {error}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputContainer title="제목">
          <input
            name="title"
            placeholder="이곳에 제목을 입력해주세요 (최대 20자 작성)"
            maxLength={20}
            onChange={handleChange}
            defaultValue={formData.title}
            className="p-3.5 px-[25px] text-[15px] border border-gray-scale-200 rounded-sm focus:outline-none"
          />
        </InputContainer>
        <InputContainer title="카테고리">
          <div className="flex gap-2">
            {TAGS.map((tag) => (
              <QuestionTag
                key={tag}
                tag={tag}
                isCheckbox
                defaultChecked={isDefaultChecked(tag)}
                handleChange={handleCheckbox}
              />
            ))}
          </div>
        </InputContainer>
        <InputContainer title="내용">
          <textarea
            autoFocus
            name="content"
            onChange={handleChange}
            defaultValue={formData.content}
            className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none text-[15px]"
            placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          />
        </InputContainer>
        <button className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]">
          수정하기
        </button>
      </form>
    </div>
  );
}
