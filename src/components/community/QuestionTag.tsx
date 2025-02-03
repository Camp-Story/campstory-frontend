import { twMerge } from "tailwind-merge";

export type Tag = "reservation" | "payment" | "member" | "campingGear" | "campsite" | "tips";

interface TagProps {
  tag: Tag;
  isCheckbox?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TAGS = {
  reservation: {
    label: "예약문의",
  },
  payment: {
    label: "결제문의",
  },
  member: {
    label: "회원문의",
  },
  campingGear: {
    label: "캠핑용품 추천",
  },
  campsite: {
    label: "캠핑장 추천",
  },
  tips: {
    label: "캠핑 꿀팁",
  },
};

export default function Tag({ tag, isCheckbox, handleChange }: TagProps) {
  const { label } = TAGS[tag];
  const onChangeHandler = handleChange || (() => {});

  return (
    <div className="flex gap-2 items-center w-fit">
      {isCheckbox && (
        <input
          id={tag}
          type="checkbox"
          value={tag}
          onChange={(e) => onChangeHandler(e)}
          className="hidden peer"
          // defaultChecked
        />
      )}
      <label
        htmlFor={tag}
        className={twMerge(
          "flex gap-[6px] items-center px-2.5 py-[5px] rounded-[21px] text-gray-scale-400 text-body1 ",
          isCheckbox
            ? "cursor-pointer border border-gray-scale-200 bg-white hover:brightness-95 peer-checked:border-[#1A9EFE]/50 peer-checked:bg-[#1A9EFE]/15 peer-checked:hover:bg-[#1A9EFE]/30"
            : "bg-gray-scale-100",
        )}
      >
        <span className="leading-3 text-gray-scale-300">{label}</span>
      </label>
    </div>
  );
}
