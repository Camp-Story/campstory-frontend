import { User } from "types/AuthResponse";
import { createContext } from "react";
import { UserInfoState } from "@pages/MypageInfo";

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: () => Promise<void>;
  modifyUser: (userData: UserInfoState) => Promise<{ ok: boolean }>;
  updateUserImage: (userImage: File) => Promise<{ ok: boolean }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
