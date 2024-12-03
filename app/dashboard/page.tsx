import { ProtectedRoute } from "@/context/ProtectedRoutes";

export default function Dashboard() {
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
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Profile
                </a>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">
              Welcome to the Dashboard
            </h2>
            <p className="text-gray-700">
              This is a simple dashboard layout using Tailwind CSS.
            </p>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
