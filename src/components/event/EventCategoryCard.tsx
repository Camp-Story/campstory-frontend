import { ReactNode } from "react";
import { useNavigate } from "react-router";

interface EventCategoryCardProps {
  src: string;
  path: string;
  children: ReactNode;
}

export default function EventCategoryCard({ src, path, children }: EventCategoryCardProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(path)}>
      <img src={src} alt="Camping Image" className="hover:brightness-75" />
      <div className="text-[26px] text-gray-scale-400 font-bold my-4">{children}</div>
    </div>
  );
}
