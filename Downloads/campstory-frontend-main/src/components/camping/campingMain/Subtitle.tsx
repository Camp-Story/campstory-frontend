import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <div className="mb-[20px] text-highlight text-gray-scale-400 font-impact">{children}</div>;
}
