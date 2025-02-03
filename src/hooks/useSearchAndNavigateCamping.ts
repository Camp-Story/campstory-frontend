import { useNavigate } from "react-router-dom";
import { goCampingInstance } from "@utils/axiosInstance";
import campingDataResponse from "types/CampingDataResponse";

const useSearchAndNavigateCamping = () => {
  const navigate = useNavigate();

  const searchAndNavigate = async (name: string, path: string) => {
    try {
      const response = await goCampingInstance.get("/searchList", {
        params: {
          numOfRows: 1,
          pageNo: 1,
          keyword: name,
        },
      });
      const campingData: campingDataResponse[] = response.data.response.body.items.item;
      navigate(path, { state: { item: campingData[0] } });
    } catch (error) {
      console.error("Error fetching camping data:", error);
    }
  };

  return { searchAndNavigate };
};

export default useSearchAndNavigateCamping;
