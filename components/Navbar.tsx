"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Daftar menu yang konsisten
  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Portfolio
        </Link>

        {/* Tombol Hamburger (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white font-medium">
            {menus.map((item) => {
  // Logika baru: 
  // 1. Kalau Home ('/'), harus exact match agar tidak aktif di semua halaman.
  // 2. Kalau menu lain, cek apakah pathname dimulai dengan path menu tersebut.
  const isActive = item.path === '/' 
    ? pathname === '/' 
    : pathname.startsWith(item.path);

  return (
    <li key={item.path}>
      <Link 
        href={item.path} 
        className={`block py-2 px-3 transition-colors duration-200 rounded md:p-0 ${
          isActive 
            ? "text-blue-700 font-bold bg-blue-50 md:bg-transparent md:text-blue-700 underline underline-offset-8 decoration-2" 
            : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    </li>
  );
})}
          </ul>
        </div>
      </div>
    </nav>
  );
}