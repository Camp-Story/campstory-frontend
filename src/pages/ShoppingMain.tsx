import SearchBar from "@components/common/main/SearchBar";
import SubTitle from "@components/common/main//Subtitle";
import CategoryCard from "@components/shopping/CategoryCard";
import { PATH } from "@constants/path";
import RecommendCard from "@components/shopping/RecommendCard";
import ReviewCardProps from "types/ReviewCardProps";
import ReviewCard from "@components/camping/campingMain/ReviewCard";

const ReviewData: ReviewCardProps[] = [
  {
    src: "/images/shopping/photo-review-dummy-1.png",
    contents:
      "2박3일 캠핑하는 동안 모든 게 좋았습니다. (언덕은 운동하는 기분으로) 깔끔하고 힐링하는 분위기 속에서 정말 잘 쉬었습니다. 다른 캠핑장을 가봐도 여기가 최고인 것 같아요!",
    timestamp: "24분 전",
    userId: "사용자 이름1",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-2.png",
    contents:
      "캠핑장은 너무 좋았고, 특히 밤하늘의 별이 정말 아름다웠어요. 아이들과 함께 별자리를 찾아보며 특별한 추억을 만들었습니다. 캠핑장 근처 산책로도 잘 정비되어 있어 좋았어요.",
    timestamp: "1시간 전",
    userId: "사용자 이름2",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-3.png",
    contents:
      "시설이 정말 깨끗했고, 관리가 잘 되어 있었습니다. 주변 경치도 훌륭했고, 특히 아침에 새소리를 들으며 일어나는 기분은 최고였어요. 다시 오고 싶은 곳입니다.",
    timestamp: "2시간 전",
    userId: "사용자 이름3",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-4.png",
    contents:
      "주차 공간이 넓어서 가족 단위로 방문하기 편리했어요. 근처에 있는 계곡에서 물놀이도 즐기고, 캠핑장에서 바비큐 파티도 했습니다. 다음에도 꼭 올 예정입니다.",
    timestamp: "3시간 전",
    userId: "사용자 이름4",
    path: PATH.communityPostPath,
  },
];

export default function ShoppingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      {/* Banner */}
      <div className="relative">
        <img src="/images/shopping/shopping-banner.png" alt="banner" className="w-full" />
        <SearchBar
          handleSubmit={() => alert("search!")}
          className="absolute bottom-[60px] left-[50%] -translate-x-[50%]"
        />
      </div>

      {/* Category */}
      <div>
        <div className="flex justify-between items-center">
          <SubTitle>카테고리별 분류</SubTitle>
          <button className="text-info-500">더보기</button>
        </div>
        <div className="flex gap-0 justify-between">
          <CategoryCard
            src="/images/shopping/food.png"
            catName="먹거리"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/tent.png"
            catName="텐트"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/sleeping-bag.png"
            catName="침낭"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/brazier.png"
            catName="화로대"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/camping-furniture.png"
            catName="캠핑 가구"
            path={PATH.shoppingInfoPath}
          />
          <CategoryCard
            src="/images/shopping/bonfire.png"
            catName="소모품"
            path={PATH.shoppingInfoPath}
          />
        </div>
      </div>

      {/* Recommend */}
      <div>
        <div className="flex justify-between items-center">
          <SubTitle>오늘의 추천 상품</SubTitle>
          <button className="text-info-500">더보기</button>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <RecommendCard
            src="/images/shopping/photo-review-dummy-1.png"
            brand={"브랜드 이름"}
            productName="시어플러스57 바베큐 그릴"
            discount={30}
            price="168,000원"
          />
          <RecommendCard
            src="/images/shopping/photo-review-dummy-2.png"
            brand={"브랜드 이름"}
            productName="시어플러스57 바베큐 그릴"
            discount={30}
            price="168,000원"
          />
        </div>
      </div>

      {/* Review */}
      <div>
        <div className="flex justify-between items-center">
          <SubTitle>포토 리뷰 모음집</SubTitle>
          <button className="text-info-500">더보기</button>
        </div>
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
    </div>
  );
}
