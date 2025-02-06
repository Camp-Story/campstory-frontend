import DetailLeft from "@components/detail/DetailLeft";
import DetailRight from "@components/detail/DetailRight";
import NearbyPlacesSection from "@components/detail/NearbyPlacesSection";
import { useLocation, useParams } from "react-router";
import useEvent from "@hooks/useEvent";
import { useEffect } from "react";
import ReviewSection from "@components/detail/ReviewSection";
import { PATH } from "@constants/path";
import useBookMark from "@hooks/useBookmark";
import { EVENT_CHANNEL_ID } from "@constants/channelId";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const eventPayload = location.state.event;

  const {
    eventDetailData,
    isLoading,
    error,
    nearbyEventList,
    setEventDetailData,
    setIsLoading,
    fetchNearbyEvents,
    fetchEventImgList,
    fetchEventDetailData,
    fetchEventCommonData,
  } = useEvent(id as string);

  const { isBookmarked, handleUnlike, handleLike } = useBookMark(EVENT_CHANNEL_ID);

  const bookmarked = isBookmarked(id || "");

  useEffect(() => {
    const setDetail = async () => {
      const images = await fetchEventImgList();
      const detail = await fetchEventDetailData();
      const common = await fetchEventCommonData();

      if (images && detail && common) {
        setEventDetailData({ images, ...detail, ...common });
      }
      setIsLoading(false);
    };

    setDetail();

    if (eventDetailData?.mapx && eventDetailData?.mapy) {
      fetchNearbyEvents(Number(eventDetailData.mapx), Number(eventDetailData.mapy), 20000);
    }
  }, [
    eventDetailData?.mapx,
    eventDetailData?.mapy,
    eventPayload,
    fetchEventCommonData,
    fetchEventDetailData,
    fetchEventImgList,
    fetchNearbyEvents,
    setEventDetailData,
    setIsLoading,
  ]);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>{error}</p>;
  if (!eventDetailData) return <p>데이터를 불러오지 못했습니다.</p>;

  return (
    <>
      <section className="mt-20 w-full flex gap-11 mb-14">
        <DetailLeft
          image1={eventPayload.firstimage}
          image2={eventDetailData.images.length > 0 ? eventDetailData.images[0] : ""}
          image3={eventDetailData.images.length > 1 ? eventDetailData.images[1] : ""}
          mapX={eventDetailData.mapx}
          mapY={eventDetailData.mapy}
        />
        <DetailRight
          category={eventDetailData.sponsor1}
          title={eventDetailData.title}
          address={eventDetailData.addr1}
          phone={eventDetailData.sponsor1tel}
          bookmarked={!!bookmarked}
          contenttypeid={eventDetailData.contenttypeid}
          eventstartdate={eventDetailData.eventstartdate}
          eventenddate={eventDetailData.eventenddate}
          addr2={eventDetailData.addr2}
          eventhomepage={eventDetailData.homepage}
          overview={eventDetailData.overview}
          mapX={eventDetailData.mapx}
          mapY={eventDetailData.mapy}
          handleClickBookmark={(e) =>
            bookmarked
              ? handleUnlike(e, bookmarked._id)
              : handleLike(e, eventDetailData.contentid, {
                  category: eventDetailData.sponsor1,
                  image: eventDetailData.images[0],
                  location: eventDetailData.addr1,
                  title: eventDetailData.title,
                })
          }
        />
      </section>
      <NearbyPlacesSection path={PATH.eventSearch} places={nearbyEventList} />
      <ReviewSection />
    </>
  );
}
