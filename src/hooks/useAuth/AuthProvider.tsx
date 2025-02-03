import { User } from "types/AuthResponse";
import { useState, ReactNode } from "react";
import { apiInstance } from "@utils/axiosInstance";
import AuthContext from "./AuthContext";
import { UserInfoState } from "@pages/MypageInfo";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = async () => {
    const token = localStorage.getItem("token");

    const response = await apiInstance.get<User>(`/users/${user?._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
  };

  const modifyUser = async (userData: UserInfoState) => {
    const token = localStorage.getItem("token");

    const response = await apiInstance.put<User>(
      "/settings/update-user",
      {
        fullName: JSON.stringify(userData),
        username: userData.nickName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setUser(response.data);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, modifyUser }}>
      {children}
    </AuthContext.Provider>
  );
}
