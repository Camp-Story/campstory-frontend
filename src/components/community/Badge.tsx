import { twMerge } from "tailwind-merge";

interface BadgeProps {
  icon: JSX.Element;
  count?: number;
  handleClick?: () => void;
}

export default function Badge({ count, icon, handleClick }: BadgeProps) {
  const handleClickBadge = (e: React.MouseEvent<HTMLDivElement>) => {
    if (handleClick) {
      e.stopPropagation();
      handleClick();
    }
  };

  return (
    <div
      className={twMerge(
        "flex gap-1 items-center border border-gray-scale-200 rounded-xl text-gray-scale-200 text-[13px] px-2.5 py-1 bg-white",
        handleClick ? "hover:brightness-95" : "",
      )}
      onClick={handleClickBadge}
    >
      {icon}
      {count && <div>{count}</div>}
    </div>
  );
}
