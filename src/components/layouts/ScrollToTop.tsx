import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경 시 스크롤 최상단 이동
  }, [pathname]);

  return null;
};

export default ScrollToTop;
