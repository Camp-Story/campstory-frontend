import Banner from "@components/event_components/Banner"
import CardButton from "@components/event_components/CardButton"
import EventCalendarSection from "@components/event_components/EventCalendarSection"
import SubTitle from "@components/event_components/SubTitle"
import TodaySection from "@components/event_components/TodaySection"

export default function EventMain() {

    return (
        <div>
            <Banner/>
            <div>
            <SubTitle mainText="다양한 축제, 새로운 즐거움" subText="음식, 음악, 자연, 문화가 어우러진 축제의 세계를 만나보세요"/>
                <div className="flex justify-between items-center">
                    <CardButton src="/images/festival/event-category-1.png">일반</CardButton>
                    <CardButton src="/images/festival/event-category-2.png">문화 관광</CardButton>
                    <CardButton src="/images/festival/event-category-3.png">박람회</CardButton>
                    <CardButton src="/images/festival/event-category-4.png">전시회</CardButton>
                </div>
            </div>
            <TodaySection/>
            <EventCalendarSection/>
        </div>
    )
}