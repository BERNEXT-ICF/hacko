"use client";

import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import React from "react";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, checkAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuth = await checkAuth();

        if (!isAuth && pathname !== "/login") {
          router.push("/login");
        }

        if (isAuth && pathname === "/login") {
          router.push("/dashboard");
        }
      } finally {
        setIsChecking(false);
      }
    };

    verifyAuth();
  }, [checkAuth, pathname, router]);

  if (isChecking) {
    return <Loading />;
  }

  // Tampilkan halaman login atau halaman yang diizinkan
  if (pathname === "/login" || isAuthenticated) {
    return <>{children}</>;
  }

  // Jangan render apa pun jika tidak diizinkan
  return null;
};
