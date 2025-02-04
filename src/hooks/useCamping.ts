import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { goCampingInstance } from "@utils/axiosInstance";
import { campingDataResponse, campingImgListResponse } from "types/CampingDataResponse";

const useCamping = () => {
  const navigate = useNavigate();
  const [nearbyCampsiteList, setNearbyCampsiteList] = useState<campingDataResponse[]>([]);
  const [campingImgList, setCampingImgList] = useState<campingImgListResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 캠핑장 이미지 목록을 가져오는 함수
  const fetchCampingImgList = useCallback(async (contentId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await goCampingInstance.get("/imageList", {
        params: {
          contentId,
        },
      });
      setCampingImgList(response.data.response.body.items.item);
    } catch (error) {
      setError("캠핑 데이터를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching camping image data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 주어진 좌표와 반경을 기반으로 근처 캠핑장 데이터를 가져옵니다.
  const fetchNearbyCampsites = useCallback(
    async (
      mapX: number,
      mapY: number,
      radius: number = 2000,
    ): Promise<campingDataResponse[] | undefined> => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await goCampingInstance.get("/locationBasedList", {
          params: {
            numOfRows: 5,
            pageNo: 1,
            mapX,
            mapY,
            radius,
          },
        });

        const campingData: campingDataResponse[] = response.data.response.body.items.item;

        if (!campingData || campingData.length === 0) {
          throw new Error("검색 결과가 없습니다.");
        }

        setNearbyCampsiteList(campingData);
      } catch (error) {
        setError("근처 캠핑장 데이터를 가져오는 중 오류가 발생했습니다.");
        console.error("Error fetching nearby campsites:", error);
        return undefined;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // 캠핑장 이름을 기반으로 검색하고, 해당 캠핑장의 상세 페이지로 이동합니다.
  const searchAndNavigate = useCallback(
    async (name: string, path: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await goCampingInstance.get("/searchList", {
          params: {
            numOfRows: 1,
            pageNo: 1,
            keyword: name,
          },
        });

        const campingData: campingDataResponse[] = response.data.response.body.items.item;

        if (!campingData || campingData.length === 0) {
          throw new Error("검색 결과가 없습니다.");
        }

        // 검색 결과의 첫 번째 항목을 상태로 전달하며 페이지 이동
        navigate(path, { state: { item: campingData[0] } });
      } catch (error) {
        setError("캠핑장 검색 중 오류가 발생했습니다.");
        console.error("Error searching camping data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  return {
    nearbyCampsiteList,
    campingImgList,
    isLoading,
    error,
    fetchCampingImgList,
    fetchNearbyCampsites,
    searchAndNavigate,
  };
};

export default useCamping;
