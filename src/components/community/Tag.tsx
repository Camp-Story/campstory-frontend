import { twMerge } from "tailwind-merge";
import ConvenienceIcon from "./icons/ConvenienceIcon";
import SmileIcon from "./icons/SmileIcon";
import SparklingIcon from "./icons/SparklingIcon";

export type Tag = "clean" | "kind" | "convenience";

interface TagProps {
  tag: Tag;
  isCheckbox?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const TAGS = {
  clean: {
    label: "청결함",
    icon: <SparklingIcon />,
  },
  kind: {
    label: "친절함",
    icon: <SmileIcon />,
  },
  convenience: {
    label: "편의시설",
    icon: <ConvenienceIcon />,
  },
};

export default function Tag({ tag, isCheckbox, defaultChecked, onChange }: TagProps) {
  const { label, icon } = TAGS[tag];

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <div className="flex gap-2 items-center w-fit">
      {isCheckbox && (
        <input
          id={tag}
          type="checkbox"
          value={tag}
          className="hidden peer"
          checked={defaultChecked}
          onChange={handleCheckChange}
        />
      )}
      <label
        htmlFor={tag}
        className={twMerge(
          "flex gap-[5px] items-center px-2.5 py-[5px] text-gray-scale-400 rounded-[21px] text-body1",
          isCheckbox
            ? "cursor-pointer border border-gray-scale-200 bg-white hover:brightness-95 peer-checked:border-[#1A9EFE]/50 peer-checked:bg-[#1A9EFE]/15 peer-checked:hover:bg-[#1A9EFE]/30"
            : "bg-gray-scale-100",
        )}
      >
        <span>{icon}</span>
        <span className="leading-3">{label}</span>
      </label>
    </div>
  );
}
