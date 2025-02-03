import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth/useAuth";

type UserInfoState = {
  nickName: string;
  fullName: string;
  phone: string;
  birthDate: string;
};

export default function Info() {
  const { user, updateUser } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfoState>(
    (JSON.parse(user?.fullName || "") as UserInfoState) || {
      nickName: "",
      fullName: "",
      phone: "",
      birthDate: "",
    },
  );
  const [isReadMode, setIsReadMode] = useState(true);

  const handleChange = (field: keyof UserInfoState, value: string) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div className="rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-sub-title font-bold mb-6">내 정보 관리</h1>
        <div
          className="border border-primary-500 px-2 py-1 rounded text-body1 bg-primary-500 text-white hover:brightness-95 cursor-pointer"
          onClick={() => setIsReadMode((prev) => !prev)}
        >
          {isReadMode ? "수정하기" : "저장하기"}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label htmlFor="nicnName" className="text-body1">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            value={userInfo.nickName}
            onChange={(e) => handleChange("nickName", e.target.value)}
            disabled={isReadMode}
            placeholder="현재 닉네임"
            className="w-full bg-gray-scale-100 rounded-md mt-[10px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:text-gray-scale-500"
          />
        </div>

        <div className="relative">
          <label htmlFor="fullName" className="text-body1">
            이름
          </label>
          <input
            type="text"
            id="fullName"
            value={userInfo.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            disabled={isReadMode}
            placeholder="홍길동"
            className="w-full border bg-gray-scale-100 rounded-md mt-[10px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="relative">
          <label htmlFor="phone" className="text-body1">
            휴대폰 번호
          </label>
          <input
            type="text"
            id="phone"
            value={userInfo.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            disabled={isReadMode}
            placeholder="0101234****"
            className="w-full border bg-gray-scale-100 rounded-md mt-[10px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <label htmlFor="birthDate" className="text-body1">
            생년월일
          </label>
          <input
            type="text"
            id="birthDate"
            value={userInfo.birthDate}
            onChange={(e) => handleChange("birthDate", e.target.value)}
            disabled={isReadMode}
            placeholder="19**년 *월 *일"
            className="w-full border bg-gray-scale-100 rounded-md mt-[10px]  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
