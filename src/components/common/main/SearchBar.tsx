import { useState } from "react";

interface SearchBarProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleSubmit: (input: string) => void;
}

export default function SearchBar({ handleSubmit, ...props }: SearchBarProps) {
  const [input, setInput] = useState<string>(""); // 검색어 상태 관리

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value); // 입력 값 업데이트
  };

  const onSubmit = () => {
    handleSubmit(input); // 부모 컴포넌트로 검색어 전달
    setInput(""); // 입력창 초기화
  };

  return (
    <div {...props}>
      <input
        placeholder="검색어를 입력해주세요."
        className="relative py-3 px-6 w-[892px] rounded-full placeholder-gray-scale-300 focus:outline-gray-scale-0"
        onChange={handleChange}
      />
      <button onClick={onSubmit} className="absolute top-[50%] -translate-y-[50%] right-[20px] p-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7084 17.708L21.875 21.8747"
            stroke="#333333"
            strokeWidth="1.14583"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.125 11.4583C3.125 16.0607 6.85596 19.7917 11.4583 19.7917C13.7635 19.7917 15.8501 18.8557 17.3587 17.343C18.8622 15.8356 19.7917 13.7555 19.7917 11.4583C19.7917 6.85596 16.0607 3.125 11.4583 3.125C6.85596 3.125 3.125 6.85596 3.125 11.4583Z"
            stroke="#333333"
            strokeWidth="1.14583"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
