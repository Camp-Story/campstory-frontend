import { User } from "types/AuthResponse";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
