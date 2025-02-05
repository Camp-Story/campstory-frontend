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
    <div className="rounded-lg hover:brightness-75" onClick={() => navigate(path)}>
      <img src={src} alt="tofu-restaurant" />
      <span className="text-[26px] text-gray-scale-400 font-bold text-left inline-block mt-[12px]">
        {title}
      </span>
      <p className="text-gray-scale-200 text-[15px]">{summary}</p>
    </div>
  );
}
