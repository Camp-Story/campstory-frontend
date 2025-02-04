import Banner from "@components/event/Banner";
import EventCalendarSection from "@components/event/EventCalendarSection";
import EventCategoryCard from "@components/event/EventCategoryCard";
import SubTitle from "@components/event/SubTitle";
import TodaySection from "@components/event/TodaySection";
import { PATH } from "@constants/path";
import TodaySectionProps from "types/TodaySectionProps";

const todaySectionData: TodaySectionProps[] = [
  {
    src: "/images/festival/event-dummy-01.png",
    title: "새해를 여는 밝은 희망, 감악산 해맞이",
    subTitle:
      "새해와 함께 희망을 품어보세요! 감악산 해맞이에서 풍물패 공연, 소원 적기, 떡국 시식 등 다채로운 즐거움을 만나보세요",
    contentId: "1506389",
    tag: ["핫플레이스"],
    path: PATH.eventInfoPath,
  },
  {
    src: "/images/festival/event-dummy-02.png",
    title: "제주민속촌 정월대보름 민속대축제",
    subTitle:
      "제주민속촌 정월대보름 민속대축제는 2025년 정월대보름행사를 통해, 지역주민의 안녕과 지역 발전을 기원하는 행사이다.",
    contentId: "1794537",
    tag: ["불꽃놀이"],
    path: PATH.eventInfoPath,
  },
  {
    src: "/images/festival/event-dummy-03.png",
    title: "홍성남당항 새조개와 함께하는 수산물 축제",
    subTitle:
      "남당항과 천수만 일원에서 12월부터 이듬해 3월 사이에 주로 잡히는 새조개는 살이 매우 통통하고 커서 제철을 이루고 있다.",
    contentId: "409187",
    tag: ["남당항", "새조개"],
    path: PATH.eventInfoPath,
  },
];

export default function EventMain() {
  const randomIndex = Math.floor(Math.random() * todaySectionData.length);
  const selectedData = todaySectionData[randomIndex];

  return (
    <div className="flex flex-col gap-[60px]">
      <Banner />
      <div>
        <SubTitle
          mainText="다양한 축제, 색다른 즐거움"
          subText="음식, 음악, 자연, 문화가 어우러진 축제의 세계를 만나보세요"
        />
        <div className="flex gap-4 justify-between items-center">
          <EventCategoryCard
            src="/images/festival/event-category-1.png"
            path={PATH.eventSearch}
            cat3="A02070200"
          >
            일반
          </EventCategoryCard>
          <EventCategoryCard
            src="/images/festival/event-category-2.png"
            path={PATH.eventSearch}
            cat3="A02070100"
          >
            문화 관광
          </EventCategoryCard>
          <EventCategoryCard
            src="/images/festival/event-category-3.png"
            path={PATH.eventSearch}
            cat3="A02080600"
          >
            박람회
          </EventCategoryCard>
          <EventCategoryCard
            src="/images/festival/event-category-4.png"
            path={PATH.eventSearch}
            cat3="A02080500"
          >
            전시회
          </EventCategoryCard>
        </div>
      </div>
      <TodaySection
        src={selectedData.src}
        title={selectedData.title}
        subTitle={selectedData.subTitle}
        tag={selectedData.tag}
        contentId={selectedData.contentId}
        path={selectedData.path}
      />
      <EventCalendarSection />
    </div>
  );
}
