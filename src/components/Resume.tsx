export default function Resume() {
  const education = [
    {
      period: "2023/09 – 2026/06",
      degree: "BSc in Computer Science",
      institution: "University of Pécs (PTE-TTK), Pécs",
      details: "Software Engineering Specialization. Thesis: The Hausdorff Metric and Fractals."
    },
    {
      period: "2022",
      degree: "Category B Driving License",
      institution: "Nagykanizsa",
      details: "Successfully obtained my driving license."
    },
    {
      period: "2018 – 2022",
      degree: "High School Diploma",
      institution: "Dr. Mező Ferenc Gimnázium, Nagykanizsa",
      details: "Graduated with absolute honors (straight A's)."
    },
    {
      period: "2020",
      degree: "C1 Advanced English Exam",
      institution: "Language Certification",
      details: "Demonstrated advanced proficiency in the English language."
    }
  ];

  const experience = [
    {
      period: "202X – Present",
      role: "Full-Stack Developer",
      company: "Freelance / Self-Employed",
      details: "Developing responsive frontends and robust backend systems. Architecting scalable APIs and implementing strict security protocols."
    },
    {
      period: "202X – Present",
      role: "Indie Software Creator",
      company: "Personal Projects",
      details: "Designing interactive language learning applications and developing custom scripts and smart assistants for video games."
    }
  ];

  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-[#111] relative border-y border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Resume.
          </h2>
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-white/10 before:to-transparent">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-indigo-500 ring-4 ring-gray-50 dark:ring-[#111] shadow-sm"></div>
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2">{exp.period}</span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h4>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 block mb-3">{exp.company}</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-xl text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-white/10 before:to-transparent">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-purple-500 ring-4 ring-gray-50 dark:ring-[#111] shadow-sm"></div>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2">{edu.period}</span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1">{edu.degree}</h4>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 block mb-3">{edu.institution}</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
