import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  projectName: string;
}

export default function Breadcrumbs({ projectName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8 bg-slate-900/60 border border-slate-800/80 p-2.5 px-4 rounded-xl backdrop-blur-xl w-fit shadow-inner">
      <Link 
        href="/" 
        className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
      >
        <Home size={14} className="text-cyan-400" /> 
        <span>Home</span>
      </Link>
      
      <ChevronRight size={14} className="text-slate-600" />
      
      <Link 
        href="/projects" 
        className="hover:text-cyan-400 transition-colors"
      >
        Projects
      </Link>
      
      <ChevronRight size={14} className="text-slate-600" />
      
      <span className="text-cyan-400 font-semibold truncate max-w-[150px] md:max-w-none">
        {projectName}
      </span>
    </nav>
  );
}