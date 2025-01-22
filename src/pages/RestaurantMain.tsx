import Banner from "@components/food/RestaurantMain/Banner";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "한식",
      image: "/images/flag-korea.png",
      path: "/RestaurantSearch",
    },
    {
      id: 2,
      name: "양식",
      image: "/flags/flag-america.png",
      path: "/FoodDetails",
    },
    {
      id: 3,
      name: "중식",
      image: "/flags/flag-china.png",
      path: "/FoodDetails",
    },
    {
      id: 4,
      name: "일식",
      image: "/flags/flag-japan.png",
      path: "/FoodDetails",
    },
    {
      id: 5,
      name: "이색음식점",
      image: "/flags/flag-exotic.png",
      path: "/FoodSearch",
    },
    {
      id: 6,
      name: "카페/전통찻집",
      image: "/flags/flag-cafe.png",
      path: "/FoodDetails",
    },
  ];

  return (
    <>
      <Banner />

      <div className="mt-20">
        {/* 상단 제목 */}
        <div className="text-left mb-6">
          <h2 className="text-2xl font-bold">음식 카테고리 한눈에 보기</h2>
          <p className="text-gray-600">입맛에 맞는 완벽한 한 끼를 지금 바로 찾아보세요!</p>
        </div>

        {/* 카테고리 카드들 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:h-28 gap-4 my-10">
          {categories.map((category) => (
            <button
              onClick={() => navigate(category.path)}
              key={category.id}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="w-15 bg-gray-200 rounded-full">
                {/* 아이콘/이미지 */}
                <img src={category.image} alt="flags" className="m-3" />
              </div>
              {/* 카테고리 이름 */}
              <span className="text-sm font-semibold mt-3">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 스시시 */}
      <div className="flex flex-col sm:flex-row items-center overflow-hidden max-w-3xl mx-auto mt-20 p-4">
        {/* 이미지 섹션 */}
        <div className="w-auto relative">
          <img
            src="@food/s.png" // 이미지 URL을 변경하세요
            alt="초밥 요리"
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="bg-slate-50 text-blue-500 text-sm font-bold px-6 py-2 rounded-2xl shadow-md absolute bottom-10 -right-8 ">
            GOOD!
          </span>
        </div>

        {/* 텍스트 섹션 */}
        <div className="sm:w-2/3 sm:ml-4 mt-4 sm:mt-0">
          <h2 className="text-xl font-bold mb-2">가정초밥 효자점, 초밥의 진수를 맛보다</h2>
          <p className="text-gray-600 mb-4 text-sm">
            "경북 포항에서 만나는 신선한 초밥과 맛있는 점심 특선! 단체석도 마련되어 있어 모임
            장소로도 최적입니다."
          </p>

          {/* 버튼 섹션 */}
          <div className="flex items-center">
            <button className="ml-4 bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition">
              추천 맛집 더 알아보기
            </button>
          </div>
        </div>
      </div>
      {/* 오늘의 신상 맛집 */}
      <div className="mt-20">
        <h2 className="text-xl font-bold mb-2">오늘의 신상 맛집</h2>
        <p className="text-gray-600 mb-4 text-sm">
          최신 맛집을 한번에 확인하고, 새로운 미식 여정을 시작해보세요!
        </p>
      </div>
      <div className="flex justify-between sm:h-auto lg:h-auto gap-4 my-10">
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={() => navigate("./FoodDetails")}
        >
          <img src="/restaurants/restaurant1.png" alt="tofu-restaurant" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={() => navigate("./FoodDetails")}
        >
          <img src="/restaurants/restaurant2.png" alt="tofu-restaurant" className="m-3" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={() => navigate("./FoodDetails")}
        >
          <img src="/restaurants/restaurant3.png" alt="tofu-restaurant" className="m-3" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={() => navigate("./FoodDetails")}
        >
          <img src="/restaurants/restaurant4.png" alt="tofu-restaurant" className="m-3" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
