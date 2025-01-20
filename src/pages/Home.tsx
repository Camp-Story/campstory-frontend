import { apiInstance, goCampingInstance, tourApiInstance } from "../utils/axiosInstance";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

function renderEventContent(eventInfo: { timeText: string; event: { title: string } }) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
const events = [{ title: "Meeting", start: new Date() }];

function Home() {
  const handleClickGoCamping = async () => {
    apiInstance
      .post("/login", {
        email: "sypark041754@gmail.com",
        password: "qwe123!@#",
      })
      .then((response) => {
        console.log(response.statusText);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
    const response = await goCampingInstance.get("/basedList", {
      params: {
        numOfRows: 5,
      },
    });
    const tour = await tourApiInstance.get("/searchKeyword1", {
      params: {
        keyword: "파크",
      },
    });

    console.log(response.data);
    console.log(tour.data);
  };

  return (
    <div className="flex flex-col gap-2 px-10">
      <div className="text-highlight">강조</div>
      <div className="text-banner">배너</div>
      <div className="text-title">제목</div>
      <div className="text-sub-title">서브타이틀</div>
      <div className="text-body1">본문</div>
      <div className="text-body2">설명</div>

      <div className="flex gap-2">
        <div className="border p-2 rounded-sm">border radius 4</div>
        <div className="border p-2 rounded">border radius 8</div>
        <div className="border p-2 rounded-lg">border radius 12</div>
        <div className="border p-2 rounded-xl">border radius 16</div>
      </div>

      <div className="flex gap-2">
        <div className="bg-primary-500 p-2">primary 500</div>
        <div className="bg-secondary-300 p-2">secondary 300</div>
        <div className="bg-secondary-500 p-2">secondary 500</div>
        <div className="bg-info-500 p-2">info 500</div>
        <div className="bg-gray-scale-0 p-2">gray scale 0</div>
        <div className="bg-gray-scale-100 p-2">gray scale 100</div>
        <div className="bg-gray-scale-200 p-2">gray scale 200</div>
        <div className="bg-gray-scale-300 text-white p-2">gray scale 300</div>
        <div className="bg-gray-scale-400 text-white p-2">gray scale 400</div>
        <div className="bg-gray-scale-500 text-white p-2">gray scale 500</div>
      </div>

      <button className="p-2 border rounded-lg m-3 bg-red-100" onClick={handleClickGoCamping}>
        api test (console 창으로 확인)
      </button>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-center w-full h-36"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

export default Home;
