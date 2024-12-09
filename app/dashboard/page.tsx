export default function Dashboard() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
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

  );
}
