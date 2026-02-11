// components/Breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  projectName: string;
}

export default function Breadcrumbs({ projectName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 bg-gray-50 dark:bg-zinc-900/50 p-3 rounded-lg w-fit">
      <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
        <Home size={14} /> Home
      </Link>
      
      <ChevronRight size={14} className="text-gray-400" />
      
      <Link href="/projects" className="hover:text-blue-600 transition-colors">
        Projects
      </Link>
      
      <ChevronRight size={14} className="text-gray-400" />
      
      <span className="text-gray-900 dark:text-gray-200 font-medium truncate max-w-[150px] md:max-w-none">
        {projectName}
      </span>
    </nav>
  );
}