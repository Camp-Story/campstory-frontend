import { Outlet, useLoaderData } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";
import { useEffect } from "react";
import { getTokenDuration } from "@utils/authToken";

export default function RootLayout() {
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      alert("토큰이 만료되었습니다.");
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      alert("토큰이 만료되었습니다.");
    }, tokenDuration);
  }, [token]);

  return (
    <div className="min-h-dvh">
      <div className="font-sans">
        <header className="sticky top-0 bg-gray-scale-0 py-3 z-20">
          <MainNavigation token={token} />
        </header>
        <Outlet />
      </div>
    </div>
  );
}
