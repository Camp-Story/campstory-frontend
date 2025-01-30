import Banner from "@components/food/RestaurantMain/Banner";

import TodaysPick from "@components/food/RestaurantMain/TodaysPick";
import Title from "@components/food/RestaurantMain/Title";
import CategoryCard from "@components/food/RestaurantMain/CategoryCard";
import { useNavigate } from "react-router";

function MainPage() {
  const categories = [
    {
      id: 1,
      name: "한식",
      image: "/images/food//flag-korea.png",
      cat3: "A05020100",
    },
    {
      id: 2,
      name: "양식",
      image: "/images/food/flag-usa.png",
      cat3: "A05020200",
    },
    {
      id: 3,
      name: "중식",
      image: "/images/food/flag-china.png",
      cat3: "A05020400",
    },
    {
      id: 4,
      name: "일식",
      image: "/images/food/flag-japan.png",
      cat3: "A05020300",
    },
    {
      id: 5,
      name: "이색음식점",
      image: "/images/food/coffee.png",
      cat3: "A05020700",
    },
    {
      id: 6,
      name: "카페/전통찻집",
      image: "/images/food/unique-food.png",
      cat3: "A05020900",
    },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (cat3: string) => {
    navigate(`/restaurant/search?cat3=${cat3}`);
  };
  return (
    <>
      <Banner />

      {/* 상단 제목 */}
      <div className="mt-20">
        <Title
          title="음식 카테고리 한눈에 보기"
          summary="입맛에 맞는 완벽한 한 끼를 지금 바로 찾아보세요!"
        />
      </div>

      {/* 카테고리 카드들 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 lg:h-28 gap-4 my-10">
        {categories.map((category) => (
          <CategoryCard
            src={category.image}
            key={category.id}
            catName={category.name}
            onClick={() => handleCategoryClick(category.cat3)}
          />
        ))}
      </div>

      {/* 스시시 */}
      <div className="flex flex-col sm:flex-row items-center overflow-hidden max-w-3xl mx-auto mt-20 p-4">
        {/* 이미지 섹션 */}
        <div className="w-auto relative">
          <img
            src="/images/food/sushi-center.png"
            alt="초밥 요리"
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="bg-slate-50 text-blue-500 text-sm font-bold px-6 py-2 rounded-2xl shadow-md absolute bottom-10 -right-8 ">
            GOOD!
          </span>
        </div>

        {/* 텍스트 섹션 */}
        <div className="sm:w-2/3 sm:ml-4 mt-4 sm:mt-0">
          <Title
            title="가정초밥 효자점, 초밥의 진수를 맛보다"
            summary="경북 포항에서 만나는 신선한 초밥과 맛있는 점심 특선! 단체석도 마련되어 있어 모임
            장소로도 최적입니다."
          />

          {/* 버튼 섹션 */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/restaurant/information/2839132")}
              className="ml-4 bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              추천 맛집 더 알아보기
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 -mb-4">
        <Title
          title="오늘의 신상 맛집"
          summary="최신 맛집을 한번에 확인하고, 새로운 미식 여정을 시작해보세요!"
        />
      </div>

      <div className="flex justify-between sm:h-auto lg:h-auto gap-4 my-10">
        <TodaysPick
          src="/images/food/restaurants/restaurant1.png"
          title="가월리 손두부"
          summary="두부전골,옛날 손두부"
          path="/restaurant/information/2875310"
        />
        <TodaysPick
          src="/images/food/restaurants/restaurant2.png"
          title="가음당 본점"
          summary="시누키우동, 돈까스"
          path="/restaurant/information/2910497"
        />
        <TodaysPick
          src="/images/food/restaurants/restaurant3.png"
          title="갓포 마코토"
          summary="계절 모둠 사시미, 한우 스키야키"
          path="/restaurant/information/2869670"
        />

        <TodaysPick
          src="/images/food/restaurants/restaurant4.png"
          title="감꽃당"
          summary="스콘과 에그타르트"
          path="/restaurant/information/2622715"
        />
      </div>
    </>
  );
}

export default MainPage;
