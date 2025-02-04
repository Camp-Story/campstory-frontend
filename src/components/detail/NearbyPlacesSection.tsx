import { Link } from "react-router";
import NearbyPlaceItem from "./NearbyPlaceItem";
import { campingDataResponse } from "types/CampingDataResponse";
import { CommonDetails } from "types/EventResponse";
import { NearbyRestaurantResponse } from "types/RestaurantResponse";
import { CAMPING_CHANNEL_ID, EVENT_CHANNEL_ID, RESTAURANT_CHANNEL_ID } from "@constants/channelId";

// 유니온 타입 정의
type PlaceData = campingDataResponse | CommonDetails | NearbyRestaurantResponse;

interface NearbyPlacesSectionProps {
  path: string;
  places: PlaceData[];
}

// 타입 가드 함수들
const isCampingData = (place: PlaceData): place is campingDataResponse => {
  return (place as campingDataResponse).facltNm !== undefined;
};

const isEventData = (place: PlaceData): place is CommonDetails => {
  return (place as CommonDetails).contenttypeid !== undefined;
};

const isRestaurantData = (place: PlaceData): place is NearbyRestaurantResponse => {
  return (place as NearbyRestaurantResponse).cat3 !== undefined;
};

export default function NearbyPlacesSection({ path, places }: NearbyPlacesSectionProps) {
  return (
    <section className="mb-14">
      <div className="flex flex-wrap justify-between items-center mb-5">
        <div className="text-[26px] font-bold">인근 명소</div>
        <Link to={path} className="text-[20px] font-bold text-info-500">
          더보기
        </Link>
      </div>
      <div className="flex flex-wrap justify-between">
        {places.map((place, index) => {
          let imageUrl: string;
          let category: string;
          let name: string;
          let channelId: string;
          let contentId: string;
          const location = place.addr1;

          if (isCampingData(place)) {
            imageUrl = place.firstImageUrl || "https://placehold.co/230x230?text=CAMP+STORY";
            category = place.induty;
            name = place.facltNm;
            channelId = CAMPING_CHANNEL_ID;
            contentId = place.contentId;
          } else if (isEventData(place)) {
            imageUrl = place.firstimage || "https://placehold.co/230x230?text=CAMP+STORY";
            category = place.contenttypeid === "15" ? "축제" : "행사";
            name = place.title;
            channelId = EVENT_CHANNEL_ID;
            contentId = place.contentid;
          } else if (isRestaurantData(place)) {
            imageUrl = place.firstimage || "https://placehold.co/230x230?text=CAMP+STORY";
            category = place.cat3;
            name = place.title;
            channelId = RESTAURANT_CHANNEL_ID;
            contentId = place.contentid;
          } else {
            imageUrl = "https://placehold.co/230x230?text=CAMP+STORY";
            category = "기타";
            name = "알 수 없는 명소";
            channelId = "";
            contentId = "";
          }

          return (
            <NearbyPlaceItem
              key={index}
              imageUrl={imageUrl}
              category={category}
              name={name}
              channelId={channelId}
              contentId={contentId}
              location={location}
            />
          );
        })}
      </div>
    </section>
  );
}
