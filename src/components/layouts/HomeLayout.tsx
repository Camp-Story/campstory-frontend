import { Outlet } from "react-router";
import "swiper/css";

export default function HomeLayout() {
  return (
    <div className="h-dvh font-sans">
      <div className="fixed top-0 w-full bg-green-200">header</div>
      <div className="my-10">
        <Outlet />
        redo the test
      </div>
      <div>footer</div>
    </div>
  );
}
