import SearchBar from "@components/common/main/SearchBar";
import SubTitle from "@components/common/main//Subtitle";
import CategoryCard from "@components/shopping/CategoryCard";
import { PATH } from "@constants/path";
import RecommendCard from "@components/shopping/RecommendCard";
import ReviewCardProps from "types/ReviewCardProps";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import ProductCard from "@components/shopping/ProductCard";
import { Link, useNavigate } from "react-router";

const RecommendProductData = [
  {
    brand: "코베아",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_5242096/52420960636.20250110122548.jpg",
    link: "https://search.shopping.naver.com/catalog/52420960636",
    lprice: "489000",
    maker: "코베아",
    mallName: "네이버",
    productId: "52420960636",
    productType: "1",
    title: "코베아 네스트 W <b>텐트</b> 4인용 브라운",
  },
  {
    brand: "쿠디",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_5257910/52579100578.20250120171356.jpg",
    link: "https://search.shopping.naver.com/catalog/52579100578",
    lprice: "1990000",
    maker: "쿠디",
    mallName: "네이버",
    productId: "52579100578",
    productType: "1",
    title: "쿠디 파밀리아 에어<b>텐트</b> 바닥 일체형 베이지",
  },
];

const NewProductData = [
  {
    brand: "쿠디",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_5261387/52613874085.20250122172801.jpg",
    link: "https://search.shopping.naver.com/catalog/52613874085",
    lprice: "359000",
    maker: "쿠디",
    mallName: "네이버",
    productId: "52613874085",
    productType: "1",
    title: "쿠디 에어<b>텐트</b> 5.8 베이지",
  },
  {
    brand: "코베아",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_3662609/36626094620.20221219153401.jpg",
    link: "https://search.shopping.naver.com/catalog/36626094620",
    lprice: "1165000",
    maker: "",
    mallName: "네이버",
    productId: "36626094620",
    productType: "1",
    title: "코베아 고스트 팬텀 KECY9TO-06",
  },
  {
    brand: "쿠디",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_4517138/45171382618.20240909145408.jpg",
    link: "https://search.shopping.naver.com/catalog/45171382618",
    lprice: "1679000",
    maker: "쿠디",
    mallName: "네이버",
    productId: "45171382618",
    productType: "1",
    title: "쿠디 에어<b>텐트</b> 13.6",
  },
  {
    brand: "아이두젠",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_5262980/52629806146.20250123144444.jpg",
    link: "https://search.shopping.naver.com/catalog/52629806146",
    lprice: "299000",
    maker: "아이두젠",
    mallName: "네이버",
    productId: "52629806146",
    productType: "1",
    title: "아이두젠 옥타곤 원터치 <b>텐트</b> 쉘터 라이트그레이",
  },
  {
    brand: "아이두젠",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "",
    image: "https://shopping-phinf.pstatic.net/main_3146703/31467035618.20240823160702.jpg",
    link: "https://search.shopping.naver.com/catalog/31467035618",
    lprice: "299000",
    maker: "아이두젠",
    mallName: "네이버",
    productId: "31467035618",
    productType: "1",
    title: "아이두젠 아마데우스 원터치 <b>텐트</b> 쉘터",
  },
];

const DiscountProductData = [
  {
    brand: "아이두젠",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "299000",
    image: "https://shopping-phinf.pstatic.net/main_3146703/31467035618.20240823160702.jpg",
    link: "https://search.shopping.naver.com/catalog/31467035618",
    lprice: "249000",
    maker: "아이두젠",
    mallName: "네이버",
    productId: "31467035618",
    productType: "1",
    title: "아이두젠 아마데우스 원터치 <b>텐트</b> 쉘터",
  },
  {
    brand: "로티캠프",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "469000",
    image: "https://shopping-phinf.pstatic.net/main_4612468/46124681618.20240306100132.jpg",
    link: "https://search.shopping.naver.com/catalog/46124681618",
    lprice: "419000",
    maker: "로티",
    mallName: "네이버",
    productId: "46124681618",
    productType: "1",
    title: "로티 로티캠프 힐하우스 그늘막 원터치 <b>텐트</b> 3-4인용",
  },
  {
    brand: "쿠디",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "1490000",
    image: "https://shopping-phinf.pstatic.net/main_5077322/50773227620.20241109133742.jpg",
    link: "https://search.shopping.naver.com/catalog/50773227620",
    lprice: "1279000",
    maker: "쿠디",
    mallName: "네이버",
    productId: "50773227620",
    productType: "1",
    title: "쿠디 에어<b>텐트</b> 10.0",
  },
  {
    brand: "스노우라인",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "820000",
    image: "https://shopping-phinf.pstatic.net/main_2867937/28679375559.20210902120103.jpg",
    link: "https://search.shopping.naver.com/catalog/28679375559",
    lprice: "623200",
    maker: "스노우라인",
    mallName: "네이버",
    productId: "28679375559",
    productType: "1",
    title: "스노우라인 새턴2룸 프로 터널형<b>텐트</b> 4인용",
  },
  {
    brand: "로티캠프",
    category1: "스포츠/레저",
    category2: "캠핑",
    category3: "텐트",
    category4: "3-4인용",
    hprice: "99000",
    image: "https://shopping-phinf.pstatic.net/main_1118076/11180765626.20240805182225.jpg",
    link: "https://search.shopping.naver.com/catalog/11180765626",
    lprice: "78900",
    maker: "로티",
    mallName: "네이버",
    productId: "11180765626",
    productType: "1",
    title: "로티 로티캠프 육각 돔 원터치 <b>텐트</b> 4윈도우 3-4인용",
  },
];

const ReviewData: ReviewCardProps[] = [
  {
    src: "/images/shopping/photo-review-dummy-1.png",
    profileSrc: "/images/review/ReviewProfileImg-01.jpg",
    contents:
      "2박3일 캠핑하는 동안 모든 게 좋았습니다. (언덕은 운동하는 기분으로) 깔끔하고 힐링하는 분위기 속에서 정말 잘 쉬었습니다. 다른 캠핑장을 가봐도 여기가 최고인 것 같아요!",
    timestamp: "24분 전",
    userId: "사용자 이름1",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-2.png",
    profileSrc: "/images/review/ReviewProfileImg-02.jpg",
    contents:
      "캠핑장은 너무 좋았고, 특히 밤하늘의 별이 정말 아름다웠어요. 아이들과 함께 별자리를 찾아보며 특별한 추억을 만들었습니다. 캠핑장 근처 산책로도 잘 정비되어 있어 좋았어요.",
    timestamp: "1시간 전",
    userId: "사용자 이름2",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-3.png",
    profileSrc: "/images/review/ReviewProfileImg-03.jpg",
    contents:
      "시설이 정말 깨끗했고, 관리가 잘 되어 있었습니다. 주변 경치도 훌륭했고, 특히 아침에 새소리를 들으며 일어나는 기분은 최고였어요. 다시 오고 싶은 곳입니다.",
    timestamp: "2시간 전",
    userId: "사용자 이름3",
    path: PATH.communityPostPath,
  },
  {
    src: "/images/shopping/photo-review-dummy-4.png",
    profileSrc: "/images/review/ReviewProfileImg-04.png",
    contents:
      "주차 공간이 넓어서 가족 단위로 방문하기 편리했어요. 근처에 있는 계곡에서 물놀이도 즐기고, 캠핑장에서 바비큐 파티도 했습니다. 다음에도 꼭 올 예정입니다.",
    timestamp: "3시간 전",
    userId: "사용자 이름4",
    path: PATH.communityPostPath,
  },
];

export default function ShoppingMain() {
  const navigate = useNavigate();

  const handleNavigateToSearch = (keyword: string) => {
    if (keyword.trim()) {
      navigate(`${PATH.shoppingSearch}?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  const handleSearch = (searchKeyword: string) => {
    handleNavigateToSearch(searchKeyword);
  };

  return (
    <div className="flex flex-col gap-[60px]">
      {/* Banner */}
      <section className="relative">
        <img src="/images/shopping/shopping-banner.png" alt="banner" className="w-full" />
        <SearchBar
          handleSubmit={(input) => handleSearch(input)}
          className="absolute bottom-[60px] left-[50%] -translate-x-[50%]"
        />
      </section>

      {/* Category */}
      <section>
        <div className="flex justify-between items-center">
          <SubTitle>카테고리별 분류</SubTitle>
          <Link to={PATH.shoppingSearch} className="text-sub-title text-info-500">
            더보기
          </Link>
        </div>
        <div className="flex gap-0 justify-between">
          <CategoryCard src="/images/shopping/food.png" catName="먹거리" />
          <CategoryCard src="/images/shopping/tent.png" catName="텐트" />
          <CategoryCard src="/images/shopping/sleeping-bag.png" catName="침낭" />
          <CategoryCard src="/images/shopping/brazier.png" catName="화로대" />
          <CategoryCard src="/images/shopping/camping-furniture.png" catName="캠핑 가구" />
          <CategoryCard src="/images/shopping/bonfire.png" catName="소모품" />
        </div>
      </section>

      {/* Recommend */}
      <section>
        <div className="flex justify-between items-center">
          <SubTitle>오늘의 추천 상품</SubTitle>
          <Link to={PATH.shoppingSearch} className="text-sub-title text-info-500">
            더보기
          </Link>
        </div>
        <div className="flex gap-2 justify-between items-center">
          {RecommendProductData.map((product) => (
            <RecommendCard
              key={product.productId}
              product={product}
              bookmarked={false}
              handleClickBookmark={() => alert("bookmark")}
            />
          ))}
        </div>
      </section>

      {/* NewProduct */}
      <section>
        <div className="flex justify-between items-center">
          <SubTitle>신상품</SubTitle>
          <Link to={PATH.shoppingSearch} className="text-sub-title text-info-500">
            더보기
          </Link>
        </div>
        <div className="flex gap-2 justify-between items-center">
          {NewProductData.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
              bookmarked={false}
              handleClickBookmark={() => alert("bookmark")}
            />
          ))}
        </div>
      </section>

      {/* Sale */}
      <section className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500/5 w-screen h-[450px] -z-10"></div>
        <div className="flex justify-between items-center">
          <SubTitle>최저가 득템!</SubTitle>
          <Link to={PATH.shoppingSearch} className="text-sub-title text-info-500">
            더보기
          </Link>
        </div>
        <div className="flex gap-2 justify-between items-center">
          {DiscountProductData.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
              bookmarked={false}
              handleClickBookmark={() => alert("bookmark")}
            />
          ))}
        </div>
      </section>

      {/* Review */}
      <section>
        <div className="flex justify-between items-center">
          <SubTitle>포토 리뷰 모음집</SubTitle>
          <Link to={PATH.community} className="text-sub-title text-info-500">
            더보기
          </Link>
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
              profileSrc={item.profileSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
