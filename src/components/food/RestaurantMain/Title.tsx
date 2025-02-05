interface SubtitleProps {
  title: string;
  summary: string;
}

export default function Subtitle({ title, summary }: SubtitleProps) {
  const titleLines = title.split("\\n");

  return (
    <div className="text-left">
      {titleLines.map((line, index) => (
        <div
          key={index}
          className="text-gray-scale-400 text-highlight font-impact leading-tight mb-2"
        >
          {line}
        </div>
      ))}
      <p className="text-gray-scale-300 text-[20px] leading-tight">{summary}</p>
    </div>
  );
}
