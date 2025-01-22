import { ReactNode } from "react";

interface CategoryCardProps {
  src: string;
  children: ReactNode;
}

export default function CategoryCard({ src, children }: CategoryCardProps) {
  return (
    <div>
      <img src={src} alt="Camping Image" className="hover:brightness-75" />
      <div className="text-[26px] text-gray-scale-400 font-bold my-4">{children}</div>
    </div>
  );
}
