import { useNavigate } from "react-router-dom";

interface TodaysPickProps {
  src?: string;
  title?: string;
  summary?: string;
  path: string;
}

export default function TodaysPick({ src, title, summary, path }: TodaysPickProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="rounded-lg" onClick={() => navigate(path)}>
        <img src={src} alt="tofu-restaurant" />
        <span className="text-highlight font-bold text-left">{title}</span>
        <p className="text-gray-scale-200 text-[20px]">{summary}</p>
      </div>
    </>
  );
}
