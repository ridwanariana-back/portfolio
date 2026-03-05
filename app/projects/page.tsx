import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Data project (bisa kamu pindahin ke file constants/ terpisah nantinya)
const projects = [
  {
    title: "BioExplorer",
    description: "Interactive biodiversity exploration platform with real-time data.",
    image: "/projects/bioexplorer-hero.png", // Ganti dengan path gambarmu
    tags: ["Next.js", "Biology", "API"],
    slug: "bioexplorer",
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "WorldCulinary",
    description: "Find food & drink recipes from around the world.",
    image: "/projects/worldculinary-hero.png", // Ganti dengan path gambarmu
    tags: ["Next.js", "Food & Drink", "API"],
    slug: "worldculinary",
    color: "bg-orange-500/10 text-orange-600"
  }
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Selected Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">A collection of works and experiments that I have built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image Preview */}
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="text-black" size={24} />
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-md ${project.color}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}