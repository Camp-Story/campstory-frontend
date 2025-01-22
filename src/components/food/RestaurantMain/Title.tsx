interface SubtitleProps {
  title: string;
  summary: string;
}

export default function Subtitle({ title, summary }: SubtitleProps) {
  return (
    <>
      <div className="text-left mb-6">
        <span className="text-2xl font-bold text-left">{title}</span>
        <p className="text-gray-400 text-left ">{summary}</p>
      </div>
    </>
  );
}
