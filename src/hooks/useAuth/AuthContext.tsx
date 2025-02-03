import { User } from "types/AuthResponse";
import { createContext } from "react";
import { UserInfoState } from "@pages/MypageInfo";

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: () => void;
  modifyUser: (userData: UserInfoState) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
