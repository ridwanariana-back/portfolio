"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
  category: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, title: "Next.js App Router Fundamentals By Vercel", src: "/certificate/9.jpg", category: "Certificate" },
  { id: 2, title: "React Foundations For Next.js By Vercel", src: "/certificate/10.jpg", category: "Certificate" },
  { id: 3, title: "Java Programming Training", src: "/certificate/1.jpg", category: "Certificate" },
  { id: 4, title: "English Soft Skill Training", src: "/certificate/2.jpg", category: "Certificate" },
  { id: 5, title: "Java Fundamental Course By Oracle", src: "/certificate/3.jpg", category: "Certificate" },
  { id: 6, title: "Java Programming Course By Oracle", src: "/certificate/4.jpg", category: "Certificate" },
  { id: 7, title: "Training on Managing Numeric Data Using Microsoft Excel (Including Macros and Pivot Table)", src: "/certificate/5.jpg", category: "Certificate" },
  { id: 8, title: "Appreciation for Completing the Microsoft Excel Course (If, Macro, and Pivot Table)", src: "/certificate/6.jpg", category: "Certificate" },
  { id: 9, title: "Html and CSS Course Completion", src: "/certificate/7.jpg", category: "Certificate" },
  { id: 10, title: "Attendance of IDCamp Alumni Dialogue #1 - Unlocking Your Potential: Personal Development In Tech", src: "/certificate/8.jpg", category: "Certificate" },
];

const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Perhitungan Pagination
  const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = galleryData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Navigasi Lightbox Modal
  const currentIndex = galleryData.findIndex((item) => item.id === selectedId);
  const selectedItem = galleryData.find((item) => item.id === selectedId);

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
    <section className="relative min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6 md:px-12 overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-grow">
        
        {/* Header Section */}
        <header className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Achievements & Credentials
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Gallery{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
            A curated archive of my certificates and professional training achievements.
          </p>
        </header>

        {/* Grid Display (3 Kolom di Laptop) */}
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)] flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-950/80 border border-slate-800">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              </div>

              <div className="mt-4 space-y-2 text-left">
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded w-fit border border-cyan-500/20 inline-block">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 disabled:opacity-40 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-all text-xs font-mono"
          >
            &larr; Prev
          </button>

          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-xl font-mono text-xs transition-all ${
                  currentPage === page
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-bold"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 disabled:opacity-40 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-all text-xs font-mono"
          >
            Next &rarr;
          </button>
        </div>

      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-xl cursor-zoom-out"
          >
            <button
              onClick={showPrev}
              className="hidden md:flex items-center justify-center absolute left-8 z-[110] w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-2xl"
            >
              &#8249;
            </button>
            <button
              onClick={showNext}
              className="hidden md:flex items-center justify-center absolute right-8 z-[110] w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-2xl"
            >
              &#8250;
            </button>

            <motion.div
              layoutId={selectedId.toString()}
              className="relative max-w-5xl w-full bg-slate-900 border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-[120] bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center transition-all text-xl"
                onClick={() => setSelectedId(null)}
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row max-h-[85vh]">
                <div className="relative flex-1 bg-slate-950 p-6 min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[300px] md:min-h-[480px]">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                <div className="p-8 md:w-80 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 mb-3">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-xl font-bold text-slate-100 leading-snug">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 mt-6">
                    <button
                      onClick={showPrev}
                      className="md:hidden text-lg px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200"
                    >
                      &#8249;
                    </button>
                    <p className="text-slate-400 text-xs font-mono">
                      {currentIndex + 1} / {galleryData.length}
                    </p>
                    <button
                      onClick={showNext}
                      className="md:hidden text-lg px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200"
                    >
                      &#8250;
                    </button>
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