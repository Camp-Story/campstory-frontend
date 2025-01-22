import { Outlet } from "react-router";
import "swiper/css";

export default function RootLayout() {
  return (
    <div className="h-dvh font-sans">
      <div className="w-full bg-green-200">header</div>
      <Outlet />
    </div>
  );
}
