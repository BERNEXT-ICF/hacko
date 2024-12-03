import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import React from "react";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, checkAuth } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      if (isAuthenticated) {
        setIsChecking(false);
        return;
      }

      if (!(await checkAuth()) && router.pathname !== "/login") {
        router.push("/login");
      }

      setIsChecking(false);
    };

    verifyAuth();
  }, [isAuthenticated, checkAuth, router]);

  if (isChecking) {
    return <Loading />;
  }

  if (router.pathname === "/login" && isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  if (router.pathname === "/login") {
    return <>{children}</>;
  }

  return isAuthenticated ? <>{children}</> : null;
};
