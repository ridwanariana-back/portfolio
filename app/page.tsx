// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className="relative bg-slate-950 text-slate-100 flex items-start justify-center pt-6 md:pt-10 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Bagian Kiri: Teks & Tech Badges */}
        <div className="md:w-1/2 space-y-5 text-left">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            System Information & Web Developer
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Ridwan Ariana
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Welcome to my digital space. I am a System Information graduate from Sriwijaya University specializing in engineering web-based architectures, responsive frontend interfaces, and scalable full-stack applications.
          </p>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Proficient in <span className="text-cyan-400 font-medium">React (Next.js)</span>, TypeScript, and modern ecosystem tooling to translate complex ideas into seamless user experiences.
          </p>

          {/* Tech Stack Pills */}
          <div className="pt-1 flex flex-wrap gap-2.5">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 shadow-inner"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bagian Kanan: Frame Holografik / Cybernetic */}
        <div className="md:w-1/2 flex justify-center">
          <div 
            onClick={() => setIsClicked(!isClicked)}
            className={`
              relative group cursor-pointer p-2.5 rounded-2xl transition-all duration-500 ease-out
              bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl
              shadow-[0_0_40px_-10px_rgba(6,182,212,0.25)]
              hover:shadow-[0_0_50px_0px_rgba(6,182,212,0.45)] hover:border-cyan-400
              ${isClicked ? "scale-105 border-cyan-400 shadow-[0_0_60px_0px_rgba(6,182,212,0.55)]" : "scale-100"}
            `}
          >
            {/* Siku Cybernetic */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br" />

            {/* Gambar */}
            <div className="overflow-hidden rounded-xl relative">
              <Image
                src="/images/profile.jpg"
                alt="Ridwan Ariana Profile"
                width={380}
                height={480}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              {/* Overlay Gradient Lembut di Bawah Foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}