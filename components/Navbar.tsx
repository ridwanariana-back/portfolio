"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 fixed w-full z-50 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        
        {/* Logo Bercahaya */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          Portfolio
        </Link>

        {/* Tombol Hamburger (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-slate-300 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 focus:outline-none"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-xl bg-slate-900/90 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent font-medium">
            {menus.map((item) => {
              const isActive = item.path === '/' 
                ? pathname === '/' 
                : pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`block py-2 px-3 transition-all duration-200 rounded-md md:p-0 ${
                      isActive 
                        ? "text-cyan-400 font-semibold bg-cyan-500/10 md:bg-transparent underline underline-offset-8 decoration-2 decoration-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
                        : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 md:hover:bg-transparent"
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