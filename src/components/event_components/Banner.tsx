<<<<<<< HEAD
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="relative">
      <img src="/images/festival/festival-banner.png" alt="festival banner" className="w-full" />
      <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
=======

export default function Banner() {
    return (
      <>
        <div className="relative">
          <img src="/public/images/festival/festival-banner.png" alt="이미지" className="w-full object-cover" />
        </div>
      </>
    );
  }
>>>>>>> 6650190 (add: event_banner_componets add)
