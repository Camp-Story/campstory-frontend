import { useState } from "react";

type UserInfoState = {
  nickName: string;
  name: string;
  phone: string;
  birth: string;
};

export default function Info() {
  const [userInfo, setUserInfo] = useState<UserInfoState>({
    nickName: "",
    name: "",
    phone: "",
    birth: "",
  });

  const handleChange = (field: keyof UserInfoState, value: string) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-6">내 정보 관리</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            id="nickname"
            value={userInfo.nickName}
            onChange={(e) => handleChange("nickName", e.target.value)}
            placeholder="현재 닉네임"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="홍길동"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="relative">
          <input
            type="text"
            id="phone"
            value={userInfo.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="0101234****"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            id="birth"
            value={userInfo.birth}
            onChange={(e) => handleChange("birth", e.target.value)}
            placeholder="19**년 *월 *일"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
