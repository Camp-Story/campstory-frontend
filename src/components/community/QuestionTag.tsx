import { twMerge } from "tailwind-merge";

export type Tag = "reservation" | "payment" | "member" | "campingGear" | "campsite" | "tips";

interface TagProps {
  tag: Tag;
  isCheckbox?: boolean;
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

export default function Tag({ tag, isCheckbox }: TagProps) {
  const { label } = TAGS[tag];

  return (
    <div className="flex gap-2 items-center w-fit">
      {isCheckbox && (
        <input id={tag} type="checkbox" value="" className="hidden peer" defaultChecked />
      )}
      <label
        htmlFor={tag}
        className={twMerge(
          "flex gap-[5px] items-center px-2.5 py-[5px] text-gray-scale-400 rounded-[21px] text-[11px]",
          isCheckbox
            ? "cursor-pointer border border-gray-scale-200 hover:bg-gray-scale-100/50 peer-checked:bg-gray-scale-100 peer-checked:hover:bg-gray-scale-100/30 "
            : "bg-gray-scale-100",
        )}
      >
        <span className="leading-3">{label}</span>
      </label>
    </div>
  );
}
