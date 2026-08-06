import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
  title: "LuxeFinance",
  description: "Personal finance and wealth management platform designed to track transactions, analyze spending habits, and manage budgets efficiently.",
  image: "/projects/luxefinance.png", // Jangan lupa sesuaikan gambar screenshot proyek ini di folder public/projects/
  tags: ["Next.js", "Finance", "Dashboard", "Tailwind CSS"],
  slug: "luxefinance",
  },
  {
    title: "BioExplorer",
    description: "Interactive biodiversity exploration platform with real-time data.",
    image: "/projects/bioexplorer-hero.png",
    tags: ["Next.js", "Biology", "API"],
    slug: "bioexplorer",
  },
  {
    title: "WorldCulinary",
    description: "Find food & drink recipes from around the world.",
    image: "/projects/worldculinary.PNG",
    tags: ["Next.js", "Food & Drink", "API"],
    slug: "worldculinary",
  }
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Featured Works
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
            A curated showcase of applications and web software I have engineered.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.25)]"
            >
              {/* Image Preview Container */}
              <div className="aspect-video relative overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Cyber Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-cyan-400 p-3 rounded-xl text-slate-950 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_#22d3ee]">
                    <ArrowUpRight size={24} className="stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}