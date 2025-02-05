import { twMerge } from "tailwind-merge";

interface SwiperArrowProps {
  isEnd: boolean;
  isBeginning: boolean;
  top: "sm" | "lg";
  handleNext: () => void;
  handlePrev: () => void;
}

export default function SwiperArrow({
  handleNext,
  handlePrev,
  isBeginning,
  isEnd,
  top,
}: SwiperArrowProps) {
  const className =
    "p-[14px] size-[53px] rounded-full bg-white drop-shadow-custom absolute -translate-y-1/2 z-50";

  const topClassName = {
    sm: "top-[112px]",
    lg: "top-[150px]",
  };
  return (
    <>
      <div
        className={twMerge(
          className,
          topClassName[top],
          "-left-[22px]",
          isBeginning ? "hidden" : "visible",
        )}
        onClick={handlePrev}
      >
        <img src="/images/arrow-left.svg" />
      </div>
      <div
        className={twMerge(
          className,
          topClassName[top],
          "-right-[22px]",
          isEnd ? "hidden" : "visible",
        )}
        onClick={handleNext}
      >
        <img src="/images/arrow-right.svg" />
      </div>
    </>
  );
}
