interface SubTitleProps {
  mainText: string;
  subText: string;
}

export default function SubTitle({ mainText, subText }: SubTitleProps) {
  return (
    <div className="mb-4">
      <div className="text-highlight text-gray-scale-400 font-impact">{mainText}</div>
      <div className="mb-[20px] text-[20px] text-gray-scale-300">{subText}</div>
    </div>
  );
}
