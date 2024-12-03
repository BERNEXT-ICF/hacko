"use client"

import { api } from "@/services/api";
import { useRouter } from "next/navigation"; // Gunakan ini untuk App Router
import { useMutation } from "react-query";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
      mutationKey: ["login"],
      mutationFn: async (data: any) => {
        await api.post("/users/login", data);
      },
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  export const useLogout = () => {
    const router = useRouter();
  
    return useMutation({
      mutationKey: ["logout"],
      mutationFn: async () => {
        await api.delete("/users/logout");
        document.cookie =
          "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict;";
      },
      onSuccess: () => {
        router.push("/login");
      },
    });
  };