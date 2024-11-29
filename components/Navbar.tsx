import React from 'react';
import Link from 'next/link'; // If using Next.js, otherwise use 'a' tag

const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center">
            <div className="text-black text-lg font-bold">
                <Link href="/">HACKO</Link>
            </div>

            <div className="flex space-x-6">
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

            <div className="space-x-4">
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
