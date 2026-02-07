"use client";

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className="container mx-auto p-8 pt-10"> {/* pt-28 untuk memberi ruang dari navbar */}
      
      <div className="flex flex-col md:flex-row items-center gap-10"> {/* Flexbox untuk 2 kolom */}
        {/* Bagian Kiri: Teks */}
        <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Let me introduce myself, I am Ridwan Ariana</h1>
          <p className="mb-4">
            Welcome to my portfolio. I am competent, tenacious, adaptable, and always eager to learn new things. I am a graduate of Information Systems from Sriwijaya University, Indralaya, Ogan Ilir, South Sumatra Province.
          </p>
          <p className="mb-4">
            I understand how to create web-based information systems using programming languages ​​such as React (next.js).And I also understand how to use office applications such as MS Word, MS Excel, and others.
          </p>
          <p>
            With this, I have great hopes of being able to work together with all of you.
          </p>
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-center">
        <div 
        onClick={() => setIsClicked(!isClicked)}
        className={`
          relative cursor-pointer transition-all duration-700 ease-in-out
          will-change-transform ring-1 ring-transparent
          
          /* --- BINGKAI BERTEKSTUR (PIGURA) --- */
          bg-[#fdfcf0]             /* Warna kertas dalam (mount) */
          p-0                       /* Jarak kertas ke foto */
          border-[16px] border-[#4a3728] /* Kayu luar tebal */
          outline outline-4 outline-[#2d2118] -outline-offset-[20px] /* Garis dalam kayu */
          shadow-[20px_20px_50px_rgba(0,0,0,0.3)] /* Bayangan lebih dramatis */

          /* Efek Gerak */
          hover:rotate-[20deg] hover:scale-105
          ${isClicked ? "rotate-[20deg] scale-105" : "rotate-0"}
        `}
      >
          <Image
            src="/images/profile.jpg" // Path ke gambar Anda (akan dijelaskan di bawah)
            alt="Photo Profile"
            width={400} // Lebar asli gambar
            height={500} // Tinggi asli gambar
            className="object-cover antialiased" // Class Tailwind untuk styling
            priority // Memuat gambar ini lebih awal (penting untuk gambar utama)
          />
          </div>
        </div>
      </div>
    </main>
  );
}
