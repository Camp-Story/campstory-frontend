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
        <span className="text-lg font-bold text-left">{title}</span>
        <p className="text-gray-400 text-sm">{summary}</p>
      </div>
    </>
  );
}
