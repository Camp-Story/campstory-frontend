import { twMerge } from "tailwind-merge";

interface SwiperArrowProps {
  isEnd: boolean;
  isBeginning: boolean;
  handleNext: () => void;
  handlePrev: () => void;
}

export default function SwiperArrow({
  handleNext,
  handlePrev,
  isBeginning,
  isEnd,
}: SwiperArrowProps) {
  const className =
    "p-[14px] size-[53px] rounded-full bg-white drop-shadow-custom absolute top-[150px] -translate-y-1/2 z-50";
  return (
    <>
      <div
        className={twMerge(className, "-left-[22px]", isBeginning ? "hidden" : "visible")}
        onClick={handlePrev}
      >
        <img src="/images/arrow-left.svg" />
      </div>
      <div
        className={twMerge(className, "-right-[22px]", isEnd ? "hidden" : "visible")}
        onClick={handleNext}
      >
        <img src="/images/arrow-right.svg" />
      </div>
    </>
  );
}
