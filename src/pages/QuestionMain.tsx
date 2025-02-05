import SearchInput from "@components/common/SearchInput";
import OrderRadio from "@components/community/OrderRadio";
import QuestionCard from "@components/community/question/QuestionCard";
import QuestionTag, { Tag } from "@components/community/QuestionTag";
import { QUESTION_CHANNEL_ID } from "@constants/channelId";
import { PATH } from "@constants/path";
import PostResponse from "types/PostResponse";
import { apiInstance } from "@utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import getRelativeTime from "@utils/getRelativeTime";

const TAGS: Tag[] = ["reservation", "payment", "member", "campingGear", "campsite", "tips"];

export default function QuestionMain() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [questionData, setQuestionData] = useState<PostResponse[]>([]);
  const [filteredData, setFilteredData] = useState<PostResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string | null>(searchParams.get("keyword") || null);
  const [tagList, setTagList] = useState<string[]>(
    searchParams.get("tags") ? searchParams.get("tags")!.split(",") : [],
  );

  const handleSearch = (input: string) => {
    setKeyword(input);
    searchParams.set("keyword", input);
    setSearchParams(searchParams);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = [...tagList];
    if (e.target.checked) {
      console.log(e.target.value);
      tags.push(e.target.value);
    } else {
      const index = tags.indexOf(e.target.value);
      if (index !== -1) {
        tags.splice(index, 1);
      }
    }
    searchParams.set("tags", tags.join(","));
    setSearchParams(searchParams);
    setTagList(tags);
  };

  const filterQuestionData = useCallback(
    (input: string | null, tags: string[]) => {
      let data = questionData;
      if (input) {
        data = data.filter((question) => JSON.parse(question.title).title.includes(input));
        console.log("filteredData", data);
      }
      if (tags.length !== 0) {
        data = data.filter((question) =>
          tags.some((tag) => JSON.parse(question.title).tag.includes(tag)),
        );
      }
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
    if (keyword || tagList) {
      filterQuestionData(keyword, tagList);
    }
  }, [keyword, filterQuestionData, tagList]);

  return (
    <div className="mt-14 px-4">
      {/* SearchBar */}
      <div className="mb-[60px]">
        <SearchInput handleSubmit={(input) => handleSearch(input)} />
      </div>

      <div className="flex gap-[50px] justify-between items-center mb-[30px]">
        {/* OrderRadio */}
        <div className="flex gap-5 text-sub-title">
          <OrderRadio label="최신순" value="recent" defaultChecked />
          <OrderRadio label="인기순" value="popular" />
        </div>

        {/* Tags */}
        <div className="flex gap-3">
          {TAGS.map((tag) => (
            <QuestionTag
              key={tag}
              tag={tag}
              isCheckbox
              defaultChecked={tagList.includes(tag)}
              handleChange={(e) => {
                handleCheckbox(e);
              }}
            />
          ))}
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
            handleClick={() =>
              navigate(PATH.questionPost(question._id), {
                state: { userId: question.author._id },
              })
            }
            userName={JSON.parse(question.author.fullName).fullName}
            coverImage={question.author.image || "https://placehold.co/30x30?text=CAMP+STORY"}
            title={JSON.parse(question.title).title}
            timeStamp={getRelativeTime(question.createdAt)}
          />
        ))}
      </div>
    </div>
  );
}
