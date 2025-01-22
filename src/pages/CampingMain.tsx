import Banner from "@components/camping/campingMain/Banner";
import CategoryCard from "@components/camping/campingMain/CategoryCard";
import PopularCampCard from "@components/camping/campingMain/PopularCampCard";
import ReviewCard from "@components/camping/campingMain/ReviewCard";
import Subtitle from "@components/camping/campingMain/Subtitle";

// Swiper 관련 모듈
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CampingMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Banner />
      <div>
        <Subtitle>카테고리별 캠핑장</Subtitle>
        <div className="flex gap-2 justify-between items-center">
          <CategoryCard src="/images/camping/camping-category-1.png">캠핑</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-2.png">글램핑</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-3.png">카라반</CategoryCard>
          <CategoryCard src="/images/camping/camping-category-4.png">오토캠핑</CategoryCard>
        </div>
      </div>
      <div>
        <Subtitle>인기 캠핑장</Subtitle>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <PopularCampCard src="/images/camping/PopularCamping1.png" category="글램핑">
              스토리 캠핑장
            </PopularCampCard>
          </SwiperSlide>
          <SwiperSlide>
            <PopularCampCard src="/images/camping/PopularCamping2.png" category="카라반">
              스토리 캠핑장
            </PopularCampCard>
          </SwiperSlide>
          <SwiperSlide>
            <PopularCampCard src="/images/camping/PopularCamping3.png" category="오토캠핑">
              스토리 캠핑장
            </PopularCampCard>
          </SwiperSlide>
          <SwiperSlide>
            <PopularCampCard src="/images/camping/PopularCamping4.png" category="일반아영장">
              스토리 캠핑장
            </PopularCampCard>
          </SwiperSlide>
          <SwiperSlide>
            <PopularCampCard src="/images/camping/PopularCamping5.png" category="카라반">
              스토리 캠핑장
            </PopularCampCard>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Subtitle>리뷰 모음</Subtitle>
        <div className="grid grid-cols-2 justify-between items-center gap-4">
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
          <ReviewCard
            src="/images/shpping/photo-review-dummy-1.png"
            contents="2박3일 캠핑하는 동안 모든게 좋았습니다.(언덕은 운동하는기분으로) 깔끔하고, 힐링하는 분위기에, 정말 잘 쉬었습니다. 다른 캠핑장가봐도•••"
            timestamp="24분전"
            userId="사용자 이름"
          />
        </div>
      </div>
    </div>
  );
}
