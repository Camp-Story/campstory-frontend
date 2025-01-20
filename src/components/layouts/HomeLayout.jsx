import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div className="h-dvh">
      <div className="fixed top-0 w-full bg-green-200">header</div>
      <div>
        <Outlet />
        body
      </div>
      <div>footer</div>
    </div>
  );
}
