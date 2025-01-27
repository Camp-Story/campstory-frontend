interface SubtitleProps {
  title: string;
  summary: string;
}

export default function Subtitle({ title, summary }: SubtitleProps) {
  return (
    <>
      <div className="text-left mb-6">
        <span className="text-highlight mb-2">{title}</span>
        <p className="text-gray-scale-200 mb-4 text-[20px]">{summary}</p>
      </div>
    </>
  );
}
