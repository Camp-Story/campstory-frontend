interface SearchBarProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  handleSubmit: () => void;
}

export default function SearchBar({ handleSubmit, ...props }: SearchBarProps) {
  return (
    <div {...props}>
      <input
        placeholder="검색어를 입력해주세요."
        className="relative py-3 px-6 w-[892px] rounded-full placeholder-gray-scale-300 focus:outline-gray-scale-0"
      />
      <button
        onClick={handleSubmit}
        className="absolute top-[50%] -translate-y-[50%] right-[20px] p-2"
      >
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
