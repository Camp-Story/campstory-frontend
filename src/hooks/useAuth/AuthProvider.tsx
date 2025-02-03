import { User } from "types/AuthResponse";
import { useState, ReactNode } from "react";
import { apiInstance } from "@utils/axiosInstance";
import AuthContext from "./AuthContext";

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

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
