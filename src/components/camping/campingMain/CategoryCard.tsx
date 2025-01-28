import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

interface CategoryCardProps {
  src: string;
  // handleClick: () => void;
  criteria: string;
  value: string;
}

export default function CategoryCard({ src, criteria, value }: CategoryCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate({ pathname: PATH.campingSearch, search: `?keyword=&${criteria}=${value}` })
      }
    >
      <img src={src} alt="Camping Image" className="hover:brightness-75" />
      <div className="text-[26px] text-gray-scale-400 font-bold my-4">{value}</div>
    </div>
  );
}
