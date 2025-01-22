import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";

export default function HomeLayout() {
  return (
    <div className="h-dvh font-sans">
      <div className="sticky top-0 w-full bg-gray-scale-0 px-main py-[10px]">
        <MainNavigation />
      </div>
      <div className="">
        <Outlet />
        redo the test1
      </div>
      <div className="font-impact text-highlight">footer</div>
    </div>
  );
}
