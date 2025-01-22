interface SubtitleProps {
  title: string;
  summary: string;
}

export default function Subtitle({ title, summary }: SubtitleProps) {
  return (
    <>
      <div className="text-left mb-6">
        <span className="text-xl font-bold mb-2">{title}</span>
        <p className="text-gray-400 mb-4 text-sm">{summary}</p>
      </div>
    </>
  );
}
