// components/RootLayout.tsx
import Footer from '@/components/Footer';
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
      <Footer />
    </main>
  );
};

export default RootLayout;
