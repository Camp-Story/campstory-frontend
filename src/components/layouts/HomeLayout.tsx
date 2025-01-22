import { Outlet } from "react-router";
import "swiper/css";

export default function HomeLayout() {
  return (
    <div>
      <main className="px-main">
        <Outlet />
      </main>
    </div>
  );
}
