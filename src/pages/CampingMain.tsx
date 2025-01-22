import Banner from "@components/camping/campingMain/Banner";
import CategoryCard from "@components/camping/campingMain/CategoryCard";
import PopularCampCard from "@components/camping/campingMain/PopularCampCard";
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
    </div>
  );
}
