import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Mock Data - Nantinya bisa kamu pindahkan ke file /constants/projects.ts
const projectsData: Record<string, any> = {
  "bioexplorer": {
    title: "BioExplorer",
    description: "An interactive biodiversity exploration platform that connects researchers with real-time global species data.",
    fullDescription: "BioExplorer was created to simplify the visualization of often complex biological classification data. The application pulls data from public APIs (GBIF) and INaturalist and displays it in an intuitive UI for researchers and students.",
    image: "/projects/bioexplorer-hero.png",
    github: "https://github.com/ridwanariana-back/bioexplorer",
    demo: "https://bioexplorer.vercel.app",
    tags: ["Next.js", "Tailwind", "Lucide Icons", "SWR", "API Integration"],
    features: [
      "Fast Taxonomic Search",
"Habitat Distribution Map Integration",
"High-Resolution Species Details",
"Data Caching for Optimal Performance"
    ],
    challenge: "The main challenge was rendering thousands of species data sets without degrading application performance. I addressed this by implementing efficient Server-side Rendering (SSR) and Pagination."
  },
  // Kamu bisa tambah data project lain di sini dengan slug sebagai key
};

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> // Ubah type-nya jadi Promise
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  // Jika slug tidak ditemukan
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-40 text-center">
        <h1 className="text-2xl font-bold italic">"{slug}" Not Found</h1>
        <p className="text-gray-500 mb-6">Try checking the slug in the URL or in your projectsData data again.</p>
        <Link href="/projects" className="text-blue-600 underline">Return to Project List</Link>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-24 px-6">
      {/* Breadcrumbs */}
      <Breadcrumbs projectName={project.title} />

      {/* Hero Section */}
      <section className="space-y-6 mt-4">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-500/20"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-medium"
          >
            <Github size={18} /> Source Code
          </a>
        </div>
      </section>

      {/* Main Preview Image */}
      <div className="my-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Description & Features */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Project</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </section>

          <section className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed italic border-l-4 border-blue-500 pl-4">
              "{project.challenge}"
            </p>
          </section>
        </div>

        {/* Right Column: Tech Stack Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech: string) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <hr className="my-6 border-zinc-100 dark:border-zinc-800" />
            
            <div className="space-y-4">
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Role</p>
              <p className="text-zinc-700 dark:text-zinc-300">Frontend Developer & UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}