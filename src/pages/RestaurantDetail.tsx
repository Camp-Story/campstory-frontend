import NearbyPlacesSection from "@components/camping/campingDetail/NearbyPlacesSection";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import DetailLeft from "@components/event/eventDetail/DetailLeft";
import DetailRight from "@components/event/eventDetail/DetailRight";
import { PATH } from "@constants/path";
import ReviewCardProps from "types/ReviewCardProps";

const ReviewData: ReviewCardProps[] = [
  {
    src: "/images/shpping/photo-review-dummy-1.png",
    contents:
      "2박3일 캠핑하는 동안 모든 게 좋았습니다. (언덕은 운동하는 기분으로) 깔끔하고 힐링하는 분위기 속에서 정말 잘 쉬었습니다. 다른 캠핑장을 가봐도 여기가 최고인 것 같아요!",
    timestamp: "24분 전",
    userId: "사용자 이름1",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-2.png",
    contents:
      "캠핑장은 너무 좋았고, 특히 밤하늘의 별이 정말 아름다웠어요. 아이들과 함께 별자리를 찾아보며 특별한 추억을 만들었습니다. 캠핑장 근처 산책로도 잘 정비되어 있어 좋았어요.",
    timestamp: "1시간 전",
    userId: "사용자 이름2",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-3.png",
    contents:
      "시설이 정말 깨끗했고, 관리가 잘 되어 있었습니다. 주변 경치도 훌륭했고, 특히 아침에 새소리를 들으며 일어나는 기분은 최고였어요. 다시 오고 싶은 곳입니다.",
    timestamp: "2시간 전",
    userId: "사용자 이름3",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shpping/photo-review-dummy-4.png",
    contents:
      "주차 공간이 넓어서 가족 단위로 방문하기 편리했어요. 근처에 있는 계곡에서 물놀이도 즐기고, 캠핑장에서 바비큐 파티도 했습니다. 다음에도 꼭 올 예정입니다.",
    timestamp: "3시간 전",
    userId: "사용자 이름4",
    path: PATH.communityPostPath,
  },
];

export default function FoodDetail() {
  return (
    <>
      <section className="mt-20 w-full flex gap-11 mb-14">
        <DetailLeft image1={"/images/food/sushi-center.png"} image2={""} image3={""} />
        <DetailRight
          category={"한식"}
          title={"강촌식당"}
          address={"강원특별자치도 양양군 양양읍 안산2길 75"}
          phone={"033-671-9966"}
          bookmarked={true}
          contenttypeid={"39"}
        />
      </section>
      <NearbyPlacesSection />
      <div className="mb-[200px]">
        <div className="text-[26px] font-bold mb-5">리뷰 모음</div>
        <div className="grid grid-cols-2 justify-between items-center gap-4">
          {ReviewData.map((item: ReviewCardProps, idx: number) => (
            <ReviewCard
              key={idx}
              src={item.src}
              contents={item.contents}
              timestamp={item.timestamp}
              userId={item.userId}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
