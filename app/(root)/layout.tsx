// components/RootLayout.tsx
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      {/* Include Navbar here */}
      <Navbar />
      
      {/* Content passed as children */}
      <div>{children}</div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
      </footer> */}
    </main>
  );
};

export default RootLayout;
