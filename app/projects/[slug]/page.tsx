import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

// Projects Data Dictionary
const projectsData: Record<string, any> = {
  "bioexplorer": {
    title: "BioExplorer",
    description: "An interactive biodiversity exploration platform that connects researchers with real-time global species data.",
    fullDescription: "BioExplorer was created to simplify the visualization of often complex biological classification data. The application pulls data from public APIs (GBIF) and iNaturalist and displays it in an intuitive UI for researchers and students.",
    image: "/projects/bioexplorer-hero.png",
    github: "https://github.com/ridwanariana-back/bioexplorer",
    demo: "https://bioexplorer.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Lucide Icons", "SWR", "API Integration"],
    features: [
      "Fast Taxonomic Search",
      "Habitat Distribution Map Integration",
      "High-Resolution Species Details",
      "Data Caching for Optimal Performance"
    ],
    challenge: "The main challenge was rendering thousands of species data sets without degrading application performance. I addressed this by implementing efficient Server-side Rendering (SSR) and Pagination."
  },
  "worldculinary": {
    title: "WorldCulinary",
    description: "A streamlined recipe discovery platform featuring smart search and curated global food categories.",
    fullDescription: "WorldCulinary is a web application designed to help users find food and drink recipes from around the globe instantly. Built with a focus on speed and accessibility, it provides a clean interface for exploring diverse culinary inspirations, from main courses to signature cocktails.",
    image: "/projects/worldculinary.PNG",
    github: "https://github.com/ridwanariana-back/worldculinary",
    demo: "https://worldculinary.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "MealDB API", "Lucide Icons", "Responsive Design"],
    features: [
      "Real-time Recipe Search with Autocomplete",
      "Curated Popular Categories (Beef, Chicken, Cocktails, etc.)",
      "Comprehensive Recipe Instructions & Ingredients",
      "Fully Responsive UI for Mobile Cooking"
    ],
    challenge: "The main challenge was handling asynchronous data fetching to ensure the autocomplete search felt instantaneous. I implemented optimized API calling and state management to prevent lag during user input."
  },
  "luxefinance": {
    title: "LuxeFinance",
    description: "Personal finance and wealth management platform designed to track transactions, analyze spending habits, and manage budgets efficiently.",
    fullDescription: "LuxeFinance is an intuitive web application designed to streamline personal wealth management. It empowers users to take full control of their financial health through dynamic expense tracking, custom budget allocation, and insightful analytical dashboards built with interactive visualizations.",
    image: "/projects/luxefinance.png",
    github: "https://github.com/ridwanariana-back/luxefinance",
    demo: "https://luxefinance.my.id",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Dashboard UI", "Finance API"],
    features: [
      "Interactive Financial Dashboard & Analytics",
      "Real-time Transaction Logging & Categorization",
      "Custom Budget Allocation & Expense Tracking",
      "Fully Responsive & Secure Cybernetic Interface"
    ],
    challenge: "The primary challenge was designing a clean, non-cluttered interface capable of visualizing multi-layered financial metrics seamlessly across mobile and desktop displays without sacrificing performance."
  }
};

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-xl text-center space-y-4 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-extrabold italic text-rose-400">&quot;{slug}&quot; Not Found</h1>
          <p className="text-slate-400 text-sm">Try checking the slug in the URL or in your projectsData dictionary.</p>
          <Link href="/projects" className="inline-block mt-4 text-cyan-400 hover:underline font-mono text-sm">
            &larr; Return to Project List
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Breadcrumbs Component */}
        <Breadcrumbs projectName={project.title} />

        {/* Hero Section */}
        <section className="space-y-6 mt-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-6 py-3 rounded-xl font-mono text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 px-6 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-300"
            >
              <Github size={18} /> Source Code
            </a>
          </div>
        </section>

        {/* Main Preview Image */}
        <div className="my-10 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)]">
          <Image 
            src={project.image} 
            alt={`${project.title} Preview`} 
            width={1200} 
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-2 space-y-10">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                About Project
              </h2>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {project.fullDescription}
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-xl space-y-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                    <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                Challenges & Solutions
              </h2>
              <p className="text-slate-300 leading-relaxed italic border-l-2 border-cyan-400/80 pl-4 py-1 text-sm md:text-base bg-cyan-500/5 rounded-r-xl">
                &quot;{project.challenge}&quot;
              </p>
            </section>
          </div>

          {/* Right Column: Sidebar Tech Stack */}
          <div className="space-y-6">
            <div className="sticky top-28 bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-xl space-y-6">
              <div>
                <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-4 font-semibold">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 text-slate-300 rounded-lg font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <hr className="border-slate-800/80" />
              
              <div className="space-y-2">
                <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                  Role
                </p>
                <p className="text-slate-300 text-sm font-medium">
                  Frontend Developer & UI Designer
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}