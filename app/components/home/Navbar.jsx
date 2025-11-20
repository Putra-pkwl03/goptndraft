"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-start px-4 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-900">GO PTN</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm text-white/90 ml-10">
          <li><Link href="#">Product</Link></li>
          <li><Link href="#">Work</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">About ▾</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3 ml-auto">
          <button className="px-4 py-2 bg-blue-900 text-white rounded-md text-sm">
            Sign In
          </button>
          <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded-md text-sm">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}
