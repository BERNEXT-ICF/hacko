export default function Loading() {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col">
          <h1>Loading...</h1>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }
  