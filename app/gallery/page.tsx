"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Definisi Tipe Data (TypeScript)
interface GalleryItem {
  id: number;
  title: string;
  src: string;
  category: string;
}

// 2. Data Galeri (Ganti src dengan path foto kamu)
const galleryData: GalleryItem[] = [
  { id: 1, title: 'Next.js App Router Fundamentals By Vercel', src: '/certificate/9.jpg', category: 'Certificate' },
  { id: 2, title: 'Java Programming Training', src: '/certificate/1.jpg', category: 'Certificate' },
  { id: 3, title: 'English Soft Skill Training', src: '/certificate/2.jpg', category: 'Certificate' },
  { id: 4, title: 'Java Fundamental Course By Oracle', src: '/certificate/3.jpg', category: 'Certificate' },
  { id: 5, title: 'Java Programming Course By Oracle', src: '/certificate/4.jpg', category: 'Certificate' },
  { id: 6, title: 'Training on Managing Numeric Data Using Microsoft Excel (Including Macros and Pivot Table)', src: '/certificate/5.jpg', category: 'Certificate' },
  { id: 7, title: 'Appreciation for Completing the Microsoft Excel Course (If, Macro, and Pivot Table)', src: '/certificate/6.jpg', category: 'Certificate' },
  { id: 8, title: 'Html and CSS Course Completion', src: '/certificate/7.jpg', category: 'Certificate' },
  { id: 9, title: 'Attendance of IDCamp Alumni Dialogue #1 - Unlocking Your Potential: Personal Development In Tech', src: '/certificate/8.jpg', category: 'Certificate' },
];

export default function GalleryPage() {
  // State untuk menyimpan ID foto yang dipilih
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Mengambil index saat ini untuk navigasi
  const currentIndex = galleryData.findIndex(item => item.id === selectedId);
  const selectedItem = galleryData.find(item => item.id === selectedId);

  // --- FUNGSI NAVIGASI ---
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedId(galleryData[nextIndex].id);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedId(galleryData[prevIndex].id);
  };

  // --- SHORTCUT KEYBOARD ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, currentIndex]);

  return (
    <section className="py-24 px-6 bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-serif text-amber-950 mb-4 italic tracking-tight">Gallery Collection</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-md mx-auto">My collection of certificates from the beginning until now.</p>
        </header>

        {/* --- GRID DISPLAY --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ 
                rotate: index % 2 === 0 ? -3 : 3, 
                scale: 1.05,
                zIndex: 10 
              }}
              className="group cursor-pointer bg-white p-4 shadow-xl border border-gray-200 rounded-sm ring-1 ring-transparent will-change-transform"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-amber-950 font-bold">{item.title}</h3>
                <p className="text-[10px] text-amber-700 uppercase tracking-widest mt-1">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL LIGHTBOX --- */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            {/* Tombol Navigasi Panah (Desktop) */}
            <button 
              onClick={showPrev}
              className="hidden md:block absolute left-8 z-[110] text-white/50 hover:text-white text-6xl transition-all"
            >
              &#8249;
            </button>
            <button 
              onClick={showNext}
              className="hidden md:block absolute right-8 z-[110] text-white/50 hover:text-white text-6xl transition-all"
            >
              &#8250;
            </button>

            <motion.div
              layoutId={selectedId.toString()}
              className="relative max-w-5xl w-full bg-white rounded-xl shadow-2xl overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button 
                className="absolute top-4 right-4 z-[120] bg-black/40 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                onClick={() => setSelectedId(null)}
              >
                &times;
              </button>
              
              <div className="flex flex-col md:flex-row max-h-[90vh]">
                {/* Gambar Utama */}
                <div className="relative flex-1 bg-stone-100 min-h-[350px] md:min-h-[550px]">
                  <Image 
                    src={selectedItem.src} 
                    alt={selectedItem.title} 
                    fill 
                    className="object-contain p-6"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                
                {/* Informasi Panel */}
                <div className="p-8 md:w-80 bg-white border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center">
                  <span className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">{selectedItem.category}</span>
                  <h2 className="text-2xl font-serif text-gray-800 leading-snug mb-4">{selectedItem.title}</h2>
                  <div className="w-10 h-1 bg-amber-600 mb-6"></div>
                  
                  {/* Indikator Halaman (Mobile Navigation included) */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <button onClick={showPrev} className="md:hidden text-2xl px-4 py-2 bg-stone-100 rounded"> &#8249; </button>
                    <p className="text-gray-400 text-sm font-medium">{currentIndex + 1} / {galleryData.length}</p>
                    <button onClick={showNext} className="md:hidden text-2xl px-4 py-2 bg-stone-100 rounded"> &#8250; </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}