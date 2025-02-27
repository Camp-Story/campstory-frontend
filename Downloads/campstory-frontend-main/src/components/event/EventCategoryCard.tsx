import { ReactNode } from "react";
import { useNavigate } from "react-router";

interface EventCategoryCardProps {
  src: string;
  path: string;
  children: ReactNode;
  cat3: string; // 추가된 키워드 props
}

export default function EventCategoryCard({ src, path, children, cat3 }: EventCategoryCardProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${path}?cat3=${cat3}`)}>
      {" "}
      {/* URL에 키워드 추가 */}
      <img src={src} alt="Camping Image" className="hover:brightness-75" />
      <div className="text-[26px] text-gray-scale-400 font-bold my-4">{children}</div>
    </div>
  );
}
