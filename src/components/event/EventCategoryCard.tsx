import { ReactNode } from "react";
import { useNavigate } from "react-router";

interface EventCategoryCardProps {
  src: string;
  path: string;
  children: ReactNode;
  keyword: string; // 추가된 키워드 props
}

export default function EventCategoryCard({
  src,
  path,
  children,
  keyword,
}: EventCategoryCardProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${path}?keyword=${keyword}`)}>
      {" "}
      {/* URL에 키워드 추가 */}
      <img src={src} alt="Camping Image" className="hover:brightness-75" />
      <div className="text-[26px] text-gray-scale-400 font-bold my-4">{children}</div>
    </div>
  );
}
