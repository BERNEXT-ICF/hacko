"use client";

import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: any) => {
      await api.post("/users/register", data);
    },
    onSuccess: () => {
      alert("register success, login bang"); //jelek banget pake alert, ntar ganti aja
      router.push("/login");
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};
