import campingDataResponse from "types/CampingDataResponse";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PopularCampCardProps from "types/PopularCampingCardProps";
import { goCampingInstance } from "@utils/axiosInstance";

export default function PopularCampCard({ rank, src, category, name, path }: PopularCampCardProps) {
  const navigate = useNavigate();
  const [campingData, setCampingData] = useState<campingDataResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCampingData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await goCampingInstance.get("/searchList", {
        params: {
          numOfRows: 30,
          pageNo: 1,
          keyword: name,
        },
      });
      // console.log(response.data.response.body.items.item);
      setCampingData(response.data.response.body.items.item);
    } catch (error) {
      setError("캠핑 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching camping data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [name]);

  useEffect(() => {
    fetchCampingData();
  }, [fetchCampingData]);

  return (
    <div
      onClick={() =>
        navigate(path, { state: { item: campingData[0], isLoading: isLoading, error: error } })
      }
      className="flex flex-col"
    >
      <div className="relative h-[300px] w-[300px] hover:brightness-[0.8]">
        <img
          src={src}
          alt="CampingImage"
          className="absolute top-0 size-full object-cover rounded"
        />
        <img
          src="images/camping/Gradient.png"
          alt="gradient"
          className="absolute top-0 w-[300px]"
        />
        <div className="absolute font-impact text-gray-scale-0 text-[100px] top-[188px] left-10">
          {rank}
        </div>
      </div>
      <div className="text-body1 font-bold mt-4 mb-[4px] text-gray-scale-300">{category}</div>
      <div className="text-sub-title font-extrabold text-gray-scale-400">{name}</div>
    </div>
  );
}
