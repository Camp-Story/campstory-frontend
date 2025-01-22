import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";

export default function HomeLayout() {
  return (
    <div className="h-dvh font-sans">
      <header className="sticky top-0 w-full bg-gray-scale-0 px-main py-[10px]">
        <MainNavigation />
      </header>
      <main className="px-main">
        <Outlet />
        redo the test1
      </main>
      <footer className="h-52 bg-gray-200 px-main py-7">footer</footer>
    </div>
  );
}
