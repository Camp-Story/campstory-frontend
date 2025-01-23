import ImageSection from "@components/camping/campingDetail/ImageSection";
import SpotDetailSection from "@components/camping/campingDetail/SpotDetailSection";
import SpotAboutSection from "@components/camping/campingDetail/SpotAboutSection";
import NearbyPlacesSection from "@components/camping/campingDetail/NearbyPlacesSection";

export default function CampingDetail() {
  return (
    <>
      <ImageSection />
      <SpotDetailSection
        title="가온오토캠핑장"
        category="일반야영장•자동차야영장•글램핑"
        address="강원 횡성군 서원면 서원서로102번길 3-18"
        phone="010-3148-9970"
      />
      <SpotAboutSection shortIntro="" description="" campingInfo={{ sample: "test" }} />
      <NearbyPlacesSection />
    </>
  );
}
