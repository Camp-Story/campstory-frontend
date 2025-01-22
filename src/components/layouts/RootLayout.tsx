import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";

export default function RootLayout() {
  return (
    <div className="h-dvh font-sans">
      <header className="sticky top-0 w-full bg-gray-scale-0 px-main py-[10px]">
        <MainNavigation />
      </header>
      <Outlet />
    </div>
  );
}
