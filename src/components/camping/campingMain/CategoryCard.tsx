import { ReactNode } from "react";

interface CategoryCardProps {
  src: string;
  children: ReactNode;
}

export default function CategoryCard({ src, children }: CategoryCardProps) {
  return (
    <div>
      <img src={src} alt="Camping Image" />
      <div className="text-[26px] font-bold my-4">{children}</div>
    </div>
  );
}
