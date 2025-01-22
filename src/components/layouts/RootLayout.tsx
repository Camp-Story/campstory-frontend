import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";

export default function RootLayout() {
  return (
    <>
      <div className="h-dvh font-sans w-[1440px] m-auto">
        <header className="sticky top-0 w-full bg-gray-scale-0 px-main py-3 z-20">
          <MainNavigation />
        </header>
        <Outlet />
      </div>
      <footer className="h-52 bg-gray-200 px-main py-7">footer</footer>
    </>
  );
}
