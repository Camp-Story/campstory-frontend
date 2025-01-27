import { cn } from "@utils/style";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

export const SearchInputVariants = cva(
  `
  flex gap-1 px-[30px] py-2.5 justify-between items-center rounded-[22px] mx-auto
  `,
  {
    variants: {
      variant: {
        default: "bg-gray-scale-100",
        white: "bg-gray-scale-0",
      },
      size: {
        default: "w-[530px]",
        lg: "w-[892px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface SearchInputProps
  extends React.HtmlHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof SearchInputVariants> {
  handleSubmit: (input: string) => void;
}

export default function SearchInput({ handleSubmit, variant, size, ...props }: SearchInputProps) {
  const [input, setInput] = useState<string>(""); // 검색어 상태 관리

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // 입력 값 업데이트
  };

  const onSubmit = () => {
    handleSubmit(input); // 부모 컴포넌트로 검색어 전달
    setInput(""); // 입력창 초기화
  };

  return (
    <div className={cn(SearchInputVariants({ variant, size }))}>
      <input
        className="bg-inherit w-full outline-none placeholder:text-gray-scale-300 placeholder:text-[15px] text-[15px]"
        placeholder="검색어를 입력해주세요."
        value={input}
        onChange={handleChange}
        {...props}
      />
      <button onClick={onSubmit}>
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
