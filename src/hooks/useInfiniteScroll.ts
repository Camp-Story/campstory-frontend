import { useEffect, useRef } from "react";

interface useInfiniteScrollProps {
  isLoading: boolean;
  isPageEnd: boolean;
  setPageNumber: (updater: (prev: number) => number) => void;
}

export default function useInfiniteScroll({
  isLoading,
  isPageEnd,
  setPageNumber,
}: useInfiniteScrollProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isPageEnd) {
          console.log("화면 끝!", entries[0]);
          setPageNumber((prev) => prev + 1);
        }
      },
      { threshold: 0 },
    );
    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, isPageEnd, setPageNumber]);
  return { loadMoreRef };
}
