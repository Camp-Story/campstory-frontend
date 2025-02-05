import { useNavigate } from "react-router";
import { PATH } from "@constants/path";

interface QuestionProps {
  id: string;
  title: string;
}

export default function MyQuestion({ id, title }: QuestionProps) {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(PATH.questionPost(id))} className="cursor-pointer">
        {/* card */}
        <div className="flex flex-col gap-4 bg-gray-scale-0 w-full p-[20px] rounded-lg drop-shadow-custom">
          <div className="flex gap-4 items-center">
            <div className="text-primary-500 font-bold text-[26px]">Q.</div>
            <div className="text-body1 text-gray-scale-400">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
}
