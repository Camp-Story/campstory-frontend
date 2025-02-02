import { PATH } from "@constants/path";
import { NavLink, Outlet } from "react-router";

export default function AuthMyPageLayout() {
  return (
    <div className="flex px-main items-start mt-[100px] w-[1440px] mx-auto">
      <div className="self-start flex flex-col mr-[100px] py-1 divide-y-2 border-2 rounded w-[260px]">
        <NavLink
          to={PATH.information}
          className={({ isActive }) =>
            `px-5 py-4 text-body1 font-bold text-gray-scale-300 hover:text-secondary-300 ${
              isActive ? "text-secondary-300" : "text-gray-scale-300"
            }`
          }
        >
          내 정보 관리
        </NavLink>
        <NavLink
          to={PATH.reservedList}
          className={({ isActive }) =>
            `px-5 py-4 text-body1 font-bold text-gray-scale-300 hover:text-secondary-300 ${
              isActive ? "text-secondary-300" : "text-gray-scale-300"
            }`
          }
        >
          예약 내역
        </NavLink>
        <NavLink
          to={PATH.bookmark}
          className={({ isActive }) =>
            `px-5 py-4 text-body1 font-bold text-gray-scale-300 hover:text-secondary-300 ${
              isActive ? "text-secondary-300" : "text-gray-scale-300"
            }`
          }
        >
          찜 목록
        </NavLink>
        <NavLink
          to={PATH.activities}
          className={({ isActive }) =>
            `px-5 py-4 text-body1 font-bold text-gray-scale-300 hover:text-secondary-300 ${
              isActive ? "text-secondary-300" : "text-gray-scale-300"
            }`
          }
        >
          나의 활동
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
