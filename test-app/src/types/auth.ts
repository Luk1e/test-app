// Constants & types
import { Role } from "./enums";

export interface AuthContextType {
  login: (username: string, password: string) => boolean;
  isAuthenticated: boolean;
  logout: () => void;
  role: Role | null;
}
