// React & libraries
import { createContext, useContext, useState } from "react";

// Constants & types
import { AuthContextType, Role } from "../types";
import { ReactNode } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("authToken")
  );
  const [role, setRole] = useState<Role | null>(
    (localStorage.getItem("userRole") as Role) || null
  );

  const login = (username: string, password: string): boolean => {
    const mockRole = username.toLowerCase().includes("editor")
      ? Role.Editor
      : Role.Viewer;

    localStorage.setItem("authToken", "mock-jwt-token");
    localStorage.setItem("userRole", mockRole);
    setIsAuthenticated(true);
    setRole(mockRole);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context is undefined");
  }
  return context;
};
