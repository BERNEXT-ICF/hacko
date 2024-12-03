"use client"

import React, { createContext, useState, useContext, useEffect } from "react";
import { api, setAuthProvider } from "@/services/api";
import { UseMutationResult } from "react-query";
import { useRouter } from "next/navigation";
import { useLogin } from "@/app/(auth)/login/api";
import { useLogout } from "@/app/(auth)/login/api";

interface AuthContextType {
  isAuthenticated: boolean;
  checkAuth: () => Promise<boolean>;
  loginFn: UseMutationResult<void, unknown, any, unknown> & {
    login: (data: any) => Promise<void>;
  };
  logoutFn: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginMutation = useLogin();
  const logoutMutation = useLogout();
  const router = useRouter();

  useEffect(() => {
    setAuthProvider({ setIsAuthenticated });
  }, []);

  const checkAuth = async (): Promise<boolean> => {
    try {
      const res = await api.get("/users/profile");
      if (res.status === 401) {
        setIsAuthenticated(false);
        return false;
      }
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      const refreshed = await refreshToken();
      if (refreshed) {
        try {
          await api.get("/users/profile");
          setIsAuthenticated(true);
          return true;
        } catch (error) {
          setIsAuthenticated(false);
          return false;
        }
      } else {
        setIsAuthenticated(false);
        return false;
      }
    }
  };

  const refreshToken = async (): Promise<boolean> => {
    try {
      await api.get("/users/refresh");
      return true;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    }
  };

  const login = async (data: any): Promise<void> => {
    await loginMutation.mutateAsync(data);
    setIsAuthenticated(true);
    router.push("/dashboard");
  };

  const logout = async (): Promise<void> => {
    await logoutMutation.mutateAsync();
    setIsAuthenticated(false);
    router.push("/login");
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    checkAuth,
    loginFn: { ...loginMutation, login },
    logoutFn: logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
