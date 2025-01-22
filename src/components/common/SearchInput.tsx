import { cn } from "@utils/style";
import { cva, VariantProps } from "class-variance-authority";

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
  handleSubmit: () => void;
}

export default function SearchInput({ handleSubmit, variant, size, ...props }: SearchInputProps) {
  return (
    <div className={cn(SearchInputVariants({ variant, size }))}>
      <input
        className="bg-inherit w-full outline-none placeholder:text-gray-scale-300 placeholder:text-[15px] text-[15px]"
        placeholder="검색어를 입력해주세요."
        {...props}
      />
      <button onClick={handleSubmit}>
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
