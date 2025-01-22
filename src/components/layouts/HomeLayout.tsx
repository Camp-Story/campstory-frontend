import { Outlet } from "react-router";
import "swiper/css";

export default function HomeLayout() {
  return (
    <div>
      <main className="px-main">
        <Outlet />
        redo the test1
      </main>
      <footer className="h-52 bg-gray-200 px-main py-7">footer</footer>
    </div>
  );
}
