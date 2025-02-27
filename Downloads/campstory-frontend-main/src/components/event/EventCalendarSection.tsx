import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function renderEventContent(eventInfo: { timeText: string; event: { title: string } }) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const events = [{ title: "Meeting", start: new Date() }];

export default function EventCalendarSection() {
  return (
    <div className="flex mb-[100px] h-[461px]">
      <div className="w-[400px] h-[461px] border border-gray-scale-300 p-2 rounded mr-[20px] bg-white drop-shadow">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={renderEventContent}
          height="100%"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-highlight text-gray-scale-500 mb-2">축제 일정 한눈에 보기</div>
        <div className="text-[20px] text-gray-scale-400 mb-[37px]">
          월별 축제 일정을 한눈에 확인하고, 원하는 축제를 놓치지 마세요.
        </div>
        <div className="text-[20px] text-gray-scale-400 font-bold mb-[20px]">2025.01.22</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center">
            <div className="w-[100px] h-[100px] ml-[15px] mr-6">
              <img
                src="/images/festival/event-dummy.png"
                alt="행사 이미지"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-[20px] font-bold text-gray-scale-500">가파도청보리축제</div>
              <div className="flex items-center">
                <img
                  src="/images/festival/event-tag-location.png"
                  alt="지도 아이콘"
                  className="w-[20px] h-[20px] mr-[5px]"
                />
                <div className="text-[15px] text-gray-scale-300">
                  제주 서귀포시 대정읍 가파도 일원
                </div>
              </div>
            </div>
          </div>
          <div className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center">
            <div className="w-[100px] h-[100px] ml-[15px] mr-6">
              <img
                src="/images/festival/event-dummy.png"
                alt="행사 이미지"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-[20px] font-bold text-gray-scale-500">가파도청보리축제</div>
              <div className="flex items-center">
                <img
                  src="/images/festival/event-tag-location.png"
                  alt="지도 아이콘"
                  className="w-[20px] h-[20px] mr-[5px]"
                />
                <div className="text-[15px] text-gray-scale-300">
                  제주 서귀포시 대정읍 가파도 일원
                </div>
              </div>
            </div>
          </div>
          <div className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center">
            <div className="w-[100px] h-[100px] ml-[15px] mr-6">
              <img
                src="/images/festival/event-dummy.png"
                alt="행사 이미지"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-[20px] font-bold text-gray-scale-500">가파도청보리축제</div>
              <div className="flex items-center">
                <img
                  src="/images/festival/event-tag-location.png"
                  alt="지도 아이콘"
                  className="w-[20px] h-[20px] mr-[5px]"
                />
                <div className="text-[15px] text-gray-scale-300">
                  제주 서귀포시 대정읍 가파도 일원
                </div>
              </div>
            </div>
          </div>
          <div className="w-[408px] h-[130px] border border-gray-scale-200 p-2 rounded-xl bg-white drop-shadow-md flex items-center">
            <div className="w-[100px] h-[100px] ml-[15px] mr-6">
              <img
                src="/images/festival/event-dummy.png"
                alt="행사 이미지"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-[20px] font-bold text-gray-scale-500">가파도청보리축제</div>
              <div className="flex items-center">
                <img
                  src="/images/festival/event-tag-location.png"
                  alt="지도 아이콘"
                  className="w-[20px] h-[20px] mr-[5px]"
                />
                <div className="text-[15px] text-gray-scale-300">
                  제주 서귀포시 대정읍 가파도 일원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
