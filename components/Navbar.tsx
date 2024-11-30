'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to close mobile menu
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white p-4 flex justify-between items-center relative z-10">
            <div className="text-black text-lg font-bold">
                <Link href="/">HACK[O]</Link>
            </div>

            {/* Desktop menu items */}
            <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
                <Link href="/course" className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Course
                </Link>
                <Link href="/about" className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    About
                </Link>
                <Link href="/contact" className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </Link>
            </div>

            {/* Mobile hamburger button */}
            <button 
                onClick={toggleMenu} 
                className="md:hidden text-black hover:bg-gray-200 p-2 rounded-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg z-20`}>
                <div className="flex flex-col items-center p-4 space-y-4">
                    {/* Mobile Links */}
                    <Link href="/" onClick={closeMenu} className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        Home
                    </Link>
                    <Link href="/course" onClick={closeMenu} className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        Course
                    </Link>
                    <Link href="/about" onClick={closeMenu} className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        About
                    </Link>
                    <Link href="/contact" onClick={closeMenu} className="text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                    </Link>
                </div>

                <div className="flex justify-center p-4 border-b">
                    <div className="flex space-x-4">
                        <Link href="/login" onClick={closeMenu} className="text-black border border-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </Link>
                        <Link href="/signup" onClick={closeMenu} className="text-white bg-black hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop menu items */}
            <div className="hidden md:flex space-x-4">
                <Link href="/login" className="text-black border border-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                </Link>
                <Link href="/signup" className="text-white bg-black hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
