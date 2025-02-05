import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";

export default function useSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleNext = () => swiperRef.current?.slideNext();

  const handlePrev = () => swiperRef.current?.slidePrev();

  return {
    swiperRef,
    isBeginning,
    isEnd,
    handleSlideChange,
    handleNext,
    handlePrev,
  };
}
