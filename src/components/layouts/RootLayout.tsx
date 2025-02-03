import { Outlet, useLoaderData, useSubmit } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";
import { useEffect } from "react";
import { getTokenDuration } from "@utils/authToken";
import AuthProvider from "@hooks/useAuth/AuthProvider";

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <AuthProvider>
      <div className="min-h-dvh">
        <div className="font-sans">
          <header className="sticky top-0 bg-gray-scale-0 py-3 z-20">
            <MainNavigation token={token} />
          </header>
          <Outlet />
        </div>
      </div>
    </AuthProvider>
  );
}
