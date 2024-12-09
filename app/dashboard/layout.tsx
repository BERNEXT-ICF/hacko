// app/dashboard/layout.tsx
import { ProtectedRoute } from "@/context/ProtectedRoutes";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-100 p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/profile" className="block text-gray-700 hover:text-blue-600">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings" className="block text-gray-700 hover:text-blue-600">
                  Settings
                </Link>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  SignOut
                </a>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
