import React from 'react';

// Komponen Reusable untuk Section Title dengan Aksen Cyan Glow
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-100 mt-14 mb-6 flex items-center gap-3">
    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full shadow-[0_0_8px_#22d3ee]" />
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* 1. Header & Intro */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Background & Profile
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed pt-2">
            Hello, I am a dedicated developer focused on engineering intuitive, user-friendly, and high-performance web applications. I thrive on translating complex real-world problems into seamless digital solutions.
          </p>
        </section>

        {/* 2. Pengalaman Magang (Experience) */}
        <section>
          <SectionTitle>Internship Experience</SectionTitle>
          
          <div className="relative pl-6 border-l-2 border-slate-800 space-y-6">
            <div className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all" />
              
              <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-xl group-hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-100">Knowledge Management Intern</h3>
                <p className="text-cyan-400 font-mono text-xs mt-1 mb-4">
                  PT. Pupuk Sriwidjaja Palembang | 2017
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm md:text-base">
                  <li>Internship in the knowledge management section.</li>
                  <li>Developed E-Library web application tailored for internal knowledge management workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pendidikan & Skripsi */}
        <section>
          <SectionTitle>Education</SectionTitle>
          
          <div className="relative pl-6 border-l-2 border-slate-800">
            <div className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all" />
              
              <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-xl group-hover:border-cyan-500/50 transition-all duration-300 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Bachelor of Information Systems</h3>
                  <p className="text-slate-400 text-xs font-mono mt-1">Sriwijaya University | 2015 - 2019</p>
                </div>

                {/* Detail Skripsi Card */}
                <div className="bg-slate-950/80 p-5 rounded-xl border border-cyan-500/20 space-y-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                    Bachelor&apos;s Thesis / Final Assignment
                  </span>
                  <p className="text-sm font-medium text-slate-200 leading-snug">
                    &quot;Implementation of Knowledge Capture System to Create Meeting Minutes Using Multinomial Naive Bayes Method (Case Study: Cooperatives and Small and Medium Enterprises Service of Palembang City)&quot;
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                    Engineered a web application to capture, filter, and structure knowledge gathered from employee meeting activities using machine learning algorithms to enable seamless distribution to relevant personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tech Stack */}
        <section>
          <SectionTitle>Tech Stack</SectionTitle>
          
          <div className="flex flex-wrap gap-2.5">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 rounded-xl font-mono text-xs shadow-inner transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}