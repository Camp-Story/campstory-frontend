import { ReactNode } from "react";

interface PopularCampCardProps {
  src: string;
  category: string;
  children: ReactNode;
}

export default function PopularCampCard({ src, category, children }: PopularCampCardProps) {
  return (
    <div>
      <img src={src} alt="CampingImage" className="w-[300px]" />
      <div className="text-body1 font-bold mt-4 mb-[4px] text-gray-scale-300">{category}</div>
      <div className="text-sub-title font-extrabold text-gray-scale-400">{children}</div>
    </div>
  );
}
