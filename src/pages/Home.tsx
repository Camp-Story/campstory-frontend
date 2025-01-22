import BannerSection from "@components/home/BannerSection";
import TopCampingSpotsSection from "@components/home/TopCampingSpotsSection";
import FestivalSection from "@components/home/FestivalSection";
import FoodSection from "@components/home/FoodSection";
import ShoppingSection from "@components/home/ShoppingSection";
import EventSection from "@components/home/EventSection";

function Home() {
  return (
    <>
      <BannerSection />
      <TopCampingSpotsSection />
      <FestivalSection />
      <section className="grid grid-cols-12 mb-14 gap-4">
        <FoodSection />
        <ShoppingSection />
      </section>
      <EventSection />
    </>
  );
}

export default Home;
