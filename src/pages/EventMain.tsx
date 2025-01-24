import Banner from "@components/event/Banner";
import EventCalendarSection from "@components/event/EventCalendarSection";
import EventCategoryCard from "@components/event/EventCategoryCard";
import SubTitle from "@components/event/SubTitle";
import TodaySection from "@components/event/TodaySection";
import { PATH } from "@constants/path";

export default function EventMain() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Banner />
      <div>
        <SubTitle
          mainText="다양한 축제, 새로운 즐거움"
          subText="음식, 음악, 자연, 문화가 어우러진 축제의 세계를 만나보세요"
        />
        <div className="flex gap-4 justify-between items-center">
          <EventCategoryCard src="/images/festival/event-category-1.png" path={PATH.eventSearch}>
            일반
          </EventCategoryCard>
          <EventCategoryCard src="/images/festival/event-category-2.png" path={PATH.eventSearch}>
            문화 관광
          </EventCategoryCard>
          <EventCategoryCard src="/images/festival/event-category-3.png" path={PATH.eventSearch}>
            박람회
          </EventCategoryCard>
          <EventCategoryCard src="/images/festival/event-category-4.png" path={PATH.eventSearch}>
            전시회
          </EventCategoryCard>
        </div>
      </div>
      <TodaySection />
      <EventCalendarSection />
    </div>
  );
}
