import { twMerge } from "tailwind-merge";
import ConvenienceIcon from "./icons/ConvenienceIcon";
import SmileIcon from "./icons/SmileIcon";
import SparklingIcon from "./icons/SparklingIcon";

type Tag = "clean" | "kind" | "convenience";

interface TagProps {
  tag: Tag;
  isCheckbox?: boolean;
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

export default function Tag({ tag, isCheckbox }: TagProps) {
  const { label, icon } = TAGS[tag];

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
        <span>{icon}</span>
        <span className="leading-3">{label}</span>
      </label>
    </div>
  );
}
