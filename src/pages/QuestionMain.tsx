import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import QuestionCard from "@components/community/question/QuestionCard";
import QuestionTag from "@components/community/QuestionTag";
import { QUESTION_CHANNEL_ID } from "@constants/channelId";
import { PATH } from "@constants/path";
import PostResponse from "types/PostResponse";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
// import PostResponse from "types/PostResponse";

export default function QuestionMain() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>();
  const [questionData, setQuestionData] = useState<PostResponse[]>([]);
  const [filteredData, setFilteredData] = useState<PostResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (input: string) => {
    searchParams.set("keyword", input);
    setSearchParams(searchParams);
    setKeyword(input);
  };

  const searchQuestionData = useCallback(
    (input: string) => {
      const data = questionData.filter((question) =>
        JSON.parse(question.title).title.includes(input),
      );
      console.log("filteredData", data);
      setFilteredData(data);
    },
    [questionData],
  );

  const fetchQuestionData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiInstance.get<PostResponse[]>(
        `/posts/channel/${QUESTION_CHANNEL_ID}`,
      );
      setQuestionData(response.data);
      setFilteredData(response.data);
      console.log(response.data);
      console.log(JSON.parse(response.data[0].title).title);
    } catch (error) {
      setError("질문 목록을 가져오는 중 오류가 발생했습니다.");
      console.log("Error fetching question data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionData();
  }, []);

  useEffect(() => {
    if (keyword) {
      searchQuestionData(keyword);
    }
  }, [keyword, searchQuestionData]);

  return (
    <div className="mt-14 px-4">
      {/* SearchBar */}
      <div className="mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
        {/* <SearchInput handleSubmit={(input) => <>{input}</>} /> */}
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
      {isLoading && <p>로딩중...</p>}
      {error}
      <div className="grid grid-cols-2 gap-x-7 gap-y-10 justify-between">
        {filteredData.map((question) => (
          <QuestionCard
            key={question._id}
            handleClick={
              () =>
                navigate(PATH.questionPost(question._id), {
                  state: { userId: question.author._id },
                })
              // navigate(PATH.questionPost(question._id), { state: { userId: question.author } })
            }
            userName={JSON.parse(question.author.fullName).fullName}
            // userName={"한라봉"}
            coverImage={question.author.image || "https://placehold.co/30x30?text=CAMP+STORY"}
            // coverImage={"https://placehold.co/30x30?text=CAMP+STORY"}
            title={JSON.parse(question.title).title}
            timeStamp={new Date(question.createdAt).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
}
