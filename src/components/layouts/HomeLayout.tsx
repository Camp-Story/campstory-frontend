import { Outlet } from "react-router";
import "swiper/css";

export default function HomeLayout() {
  return (
    <>
      <main className="w-[1440px] m-auto">
        <div className="px-main">
          <Outlet />
        </div>
      </main>

      <footer className="h-52 bg-gray-200 mt-28">
        <div className="w-[1440px] m-auto px-main py-7">footer</div>
      </footer>
    </>
  );
}
