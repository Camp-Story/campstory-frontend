import ReviewCardProps from "types/ReviewCardProps";

export default function ReviewCard({ src, contents, timestamp, userId }: ReviewCardProps) {
  return (
    <div className="flex gap-2">
      <img src={src} alt="reviewImg" className="w-[200px] h-[200px]" />
      <div className="flex flex-col gap-2 border-2 border-slate-100 rounded-xl w-[400px] h-[200px] p-6 hover:border-primary-500">
        <div className="text-gray-scale-400 text-body1 leading-5">{contents}</div>
        <div className="text-gray-scale-300 text-body1">{timestamp}</div>
        <div className="flex flex-row gap-2 items-center mt-5">
          <img
            src="https://picsum.photos/200"
            alt="user"
            className="w-[34px] h-[34px] rounded-full "
          />
          <div className="text-gray-scale-400 text-body1 font-bold">{userId}</div>
        </div>
      </div>
    </div>
  );
}
