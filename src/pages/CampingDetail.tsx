import ImageSection from "@components/detail/ImageSection";
import SpotDetailSection from "@components/detail/SpotDetailSection";
import SpotAboutSection from "@components/detail/SpotAboutSection";
import NearbyPlacesSection from "@components/detail/NearbyPlacesSection";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { campingDataResponse } from "types/CampingDataResponse";
import useCamping from "@hooks/useCamping";
import ReviewSection from "@components/detail/ReviewSection";

export default function CampingDetail() {
  const { id } = useParams();
  const location = useLocation();
  const CampingDetailData: campingDataResponse = location.state.item;

  const {
    nearbyCampsiteList,
    campingImgList,
    isLoading,
    error,
    fetchCampingImgList,
    fetchNearbyCampsites,
  } = useCamping();

  useEffect(() => {
    fetchCampingImgList(id as string);
    fetchNearbyCampsites(Number(CampingDetailData.mapX), Number(CampingDetailData.mapY), 20000);
  }, [id, CampingDetailData, fetchCampingImgList, fetchNearbyCampsites]);

  return (
    <>
      {isLoading && "로딩중.."}
      {error}
      {campingImgList !== undefined ? (
        <ImageSection
          image1={campingImgList[0]?.imageUrl}
          image2={campingImgList[1]?.imageUrl}
          image3={campingImgList[2]?.imageUrl}
          image4={campingImgList[3]?.imageUrl}
        />
      ) : (
        <ImageSection image1={CampingDetailData.firstImageUrl} />
      )}
      {/* {item} */}
      <SpotDetailSection
        title={CampingDetailData.facltNm}
        category={CampingDetailData.induty}
        address={CampingDetailData.addr1}
        phone={CampingDetailData.tel}
      />
      <SpotAboutSection
        shortIntro={CampingDetailData.lineIntro}
        description={CampingDetailData.featureNm}
        campingFacilities={CampingDetailData.sbrsCl}
        nearbyFacilities={CampingDetailData.posblFcltyCl}
        homepage={CampingDetailData.homepage}
        mapX={CampingDetailData.mapX}
        mapY={CampingDetailData.mapY}
      />
      <NearbyPlacesSection places={nearbyCampsiteList} />
      <ReviewSection />
    </>
  );
}
