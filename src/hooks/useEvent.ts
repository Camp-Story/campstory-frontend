import { useState, useCallback } from "react";
import { tourApiInstance } from "@utils/axiosInstance";
import { CommonDetails, EventDetailData } from "types/EventResponse";

interface ImageDetails {
  originimgurl: string;
}

interface EventDetails {
  sponsor1: string;
  sponsor1tel: string;
  eventenddate: string;
  eventstartdate: string;
  eventhomepage: string;
}

const useEvent = (id: string) => {
  const [eventDetailData, setEventDetailData] = useState<EventDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nearbyEventList, setNearbyEventList] = useState<CommonDetails[]>([]);

  const fetchNearbyEvents = useCallback(
    async (
      mapX: number,
      mapY: number,
      radius: number = 2000,
    ): Promise<CommonDetails[] | undefined> => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await tourApiInstance.get("/locationBasedList1", {
          params: {
            numOfRows: 5,
            pageNo: 1,
            mapX,
            mapY,
            radius,
          },
        });

        const campingData: CommonDetails[] = response.data.response.body.items.item;

        if (!campingData || campingData.length === 0) {
          throw new Error("검색 결과가 없습니다.");
        }

        setNearbyEventList(campingData);
      } catch (error) {
        setError("근처 행사 데이터를 가져오는 중 오류가 발생했습니다.");
        console.error("Error fetching event detail data:", error);
        return undefined;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const fetchEventImgList = useCallback(async () => {
    try {
      const imgResponse = await tourApiInstance.get("/detailImage1", {
        params: {
          _type: "json",
          contentId: id,
          imageYN: "Y",
          subImageYN: "Y",
          numOfRows: 10,
        },
      });
      const items: ImageDetails[] = imgResponse.data.response.body.items.item;
      console.log(items);
      const images = items?.map((item) => item.originimgurl);
      return images ?? [];
    } catch (error) {
      setError("행사 이미지를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching event images:", error);
      return undefined;
    }
  }, [id]);

  const fetchEventDetailData = useCallback(async () => {
    try {
      const introResponse = await tourApiInstance.get("/detailIntro1", {
        params: {
          _type: "json",
          contentId: id,
          contentTypeId: 15,
        },
      });

      const item: EventDetails = Array.isArray(introResponse.data.response.body.items.item)
        ? introResponse.data.response.body.items.item[0]
        : introResponse.data.response.body.items.item;
      const { sponsor1, sponsor1tel, eventenddate, eventstartdate, eventhomepage } = item;
      return { sponsor1, sponsor1tel, eventenddate, eventstartdate, eventhomepage };
    } catch (error) {
      setError("이벤트 상세 정보를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching event detail data:", error);
      return undefined;
    }
  }, [id]);

  const fetchEventCommonData = useCallback(async () => {
    try {
      const commonResponse = await tourApiInstance.get("/detailCommon1", {
        params: {
          _type: "json",
          contentId: id,
          contentTypeId: 15,
          defaultYN: "Y",
          overviewYN: "Y",
          areacodeYN: "Y",
          addrinfoYN: "Y",
          mapinfoYN: "Y",
        },
      });

      const item: CommonDetails = Array.isArray(commonResponse.data.response.body.items.item)
        ? commonResponse.data.response.body.items.item[0]
        : commonResponse.data.response.body.items.item;
      const { title, addr1, addr2, homepage, overview, contentid, contenttypeid, mapx, mapy } =
        item;
      return { title, addr1, addr2, homepage, overview, contentid, contenttypeid, mapx, mapy };
    } catch (error) {
      setError("이벤트 상세 정보를 가져오는 중 오류가 발생했습니다.");
      console.error("Error fetching event detail data:", error);
      return undefined;
    }
  }, [id]);

  return {
    eventDetailData,
    isLoading,
    error,
    nearbyEventList,
    setEventDetailData,
    setIsLoading,
    fetchNearbyEvents,
    fetchEventImgList,
    fetchEventDetailData,
    fetchEventCommonData,
  };
};

export default useEvent;
