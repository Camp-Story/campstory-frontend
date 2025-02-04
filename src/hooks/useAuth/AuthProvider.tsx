import { User } from "types/AuthResponse";
import { useState, ReactNode, useEffect } from "react";
import { apiInstance } from "@utils/axiosInstance";
import AuthContext from "./AuthContext";
import { UserInfoState } from "@pages/MypageInfo";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      logout();
    } else if (!user) {
      updateUser();
    }
  }, [user, token]);

  const login = (userData: User) => {
    localStorage.setItem("id", userData._id);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("id");
    setUser(null);
  };

  const updateUser = async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const response = await apiInstance.get<User>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
  };

  const modifyUser = async (userData: UserInfoState) => {
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

    if (response.status === 200) {
      setUser(response.data);
      return Promise.resolve({ ok: true });
    }
    return Promise.reject({ ok: false });
  };

  const updateUserImage = async (file: File) => {
    const response = await apiInstance.post(
      "/users/upload-photo",
      {
        isCover: false,
        image: file,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    if (response.status === 200) {
      return Promise.resolve({ ok: true });
    }
    return Promise.reject({ ok: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, modifyUser, updateUserImage }}>
      {children}
    </AuthContext.Provider>
  );
}
