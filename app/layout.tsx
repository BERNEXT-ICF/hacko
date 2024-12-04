"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Hacko',
//   description: 'Hacko is a platform for learning and sharing knowledge.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hacko</title>
        <meta name="title" content="Hacko" />
        <meta
          name="description"
          content="Hacko is a platform for learning and sharing knowledge."
        />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
