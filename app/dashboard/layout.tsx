'use client'; // Add the "use client" directive

import { useState } from "react";
import { ProtectedRoute } from "@/context/ProtectedRoutes";
import Link from "next/link";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation"; 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const pathname = usePathname(); 

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ProtectedRoute>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside
            className={`${
              isSidebarOpen ? "w-64" : "w-16"
            } sm:w-64 bg-gray-100 p-4 flex flex-col space-y-4 transition-all duration-300`}
          >
            <ul className="w-full space-y-4">
              <li>
                <Link
                  href="/dashboard"
                  className={`flex items-center space-x-2 text-gray-700 w-full p-2 rounded-md ${
                    pathname === "/dashboard" ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <FaHome />
                  <span className={`${isSidebarOpen ? "" : "hidden"} sm:inline`}>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/profile"
                  className={`flex items-center space-x-2 text-gray-700 w-full p-2 rounded-md ${
                    pathname === "/dashboard/profile" ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <FaUser />
                  <span className={`${isSidebarOpen ? "" : "hidden"} sm:inline`}>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center space-x-2 text-gray-700 w-full p-2 rounded-md ${
                    pathname === "/dashboard/settings" ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <FaCog />
                  <span className={`${isSidebarOpen ? "" : "hidden"} sm:inline`}>Settings</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center space-x-2 text-gray-700 w-full p-2 rounded-md ${
                    pathname === "/dashboard/signout" ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <FaSignOutAlt />
                  <span className={`${isSidebarOpen ? "" : "hidden"} sm:inline`}>SignOut</span>
                </a>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
