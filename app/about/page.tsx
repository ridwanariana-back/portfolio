import React from 'react';

// Komponen Reusable untuk Section Title
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 border-b-2 border-blue-500 w-fit">
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-700">
      {/* 1. Header & Intro */}
      <section>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hello, I am a person who understands and can create good, user-friendly and efficient websites or webapps. 
          I am very happy to create a website or webapps to solve existing problems.
        </p>
      </section>

      {/* 2. Pengalaman Magang (Experience) */}
      <section>
        <SectionTitle>Internship Experience</SectionTitle>
        <div className="border-l-4 border-slate-200 pl-4 py-2 hover:border-blue-400 transition-colors">
          <h3 className="text-xl font-semibold text-slate-900">Knowledge Management Intern</h3>
          <p className="text-blue-600 font-medium text-sm">PT.Pupuk Sriwidjaja Palembang | 2017</p>
          <ul className="mt-3 list-disc list-inside space-y-2">
            <li>Internship in knowledge management section.</li>
            <li>Develop E-Library webapps in knowledge management section.</li>
          </ul>
        </div>
      </section>

      {/* 3. Pendidikan & Skripsi */}
      <section>
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Bachelor of Information Systems</h3>
            <p className="text-slate-500">Sriwijaya University | 2015 - 2019</p>
            
            {/* Detail Skripsi */}
            <div className="mt-4 bg-slate-50 p-5 rounded-lg border border-slate-100">
              <h4 className="font-bold text-slate-800 italic">Bachelor's Thesis / final assignment:</h4>
              <p className="mt-2">
                <strong>"Implementation of Knowledge Capture System to Create Meeting Minutes Using Multinomial Naive Bayes Method (Case Study: Cooperatives and Small and Medium Enterprises Service of Palembang City)"</strong>
              </p>
              <p className="text-sm mt-2">
                How to filter/capture knowledge data obtained from employees and meeting activities and how to manage this knowledge so that it can be distributed to employees who need it in the form of webapps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills (Opsional tapi bagus) */}
      <section>
        <SectionTitle>Tech Stack</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}