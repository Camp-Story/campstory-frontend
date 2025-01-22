import CampingSearchForm from "../components/home/CampingSearchForm";

function Home() {
  return (
    <>
      <section className="relative mb-24">
        <img
          src="/images/main/main-banner-2.png"
          alt="자연 속에서 써내려가는 우리의 이야기, CAMP STORY"
          className="w-full object-cover"
        />
        <CampingSearchForm />
      </section>
    </>
  );
}

export default Home;
