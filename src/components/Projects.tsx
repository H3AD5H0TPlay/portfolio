export default function Projects() {
  const projects = [
    {
      title: "My Website",
      link: "https://github.com/H3AD5H0TPlay/portfolio",
      description: "The very portfolio you are browsing right now. A modern, highly responsive personal website built with React and Tailwind CSS, featuring a sleek, custom UI designed to showcase my professional journey."
    },
    {
      title: "DriveSim",
      link: "https://github.com/H3AD5H0TPlay/driveSim",
      description: "A zen driving experience inspired by slowroads.io, but with a unique twist: instead of procedurally generated endless roads, you drive on meticulously mapped real-world routes traveling from city A to city B within Hungary."
    },
    {
      title: "World Cup Prediction App",
      link: "https://github.com/H3AD5H0TPlay/2026_vb_predikcio",
      description: "An advanced analytical tool utilizing strict mathematical models to simulate and calculate the most probable winner of the 2026 FIFA World Cup based on statistical data."
    },
    {
      title: "StreamEast",
      link: "https://github.com/H3AD5H0TPlay/iptv_app",
      description: "A custom Android IPTV application featuring a premium, Netflix-style user interface, designed specifically for seamlessly streaming free-to-air Japanese and Korean television channels."
    },
    {
      title: "AdventOfCode",
      link: "https://github.com/H3AD5H0TPlay/AdventOfCode",
      description: "My personal challenge repository containing algorithmic problem-solving solutions for Advent of Code, implemented across five distinct programming languages: C, C++, C#, Java, and Python."
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Projects & Links
          </h2>
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
        </div>

        {/* Highlighted Project: KitsuKana */}
        <div className="mb-24">
          <div className="relative group rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-100 dark:border-indigo-500/20 p-8 md:p-12 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-10">
              <div>
                <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-black rounded-full uppercase tracking-wider mb-4">Highlighted Project • 1/2 • 2025 – Present</span>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">KitsuKana</h3>
                <p className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400">Full-Stack Japanese Learning Web Application</p>
              </div>
              <a href="https://kitsukana.vercel.app" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center space-x-2 px-8 py-4 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-bold rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-xl">
                <span>Live URL</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium max-w-4xl">
              End-to-end product development leveraging an AI-assisted engineering workflow. Designed from the ground up to provide a modern, seamless, and highly interactive learning experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 transition-colors">
                <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3">Core Stack & UI</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Architected a highly performant application using Next.js (App Router) and React 18, enforced by strict TypeScript typing for robust development. Designed and implemented a custom, CSS variable-based design system (glassmorphism aesthetic) entirely from scratch, avoiding heavy UI libraries.</p>
              </div>
              <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                <h4 className="text-sm font-black text-purple-500 uppercase tracking-widest mb-3">Data & Auth</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Integrated Supabase (PostgreSQL BaaS) for infinitely scalable data management and Clerk for secure, modern user authentication.</p>
              </div>
              <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 transition-colors">
                <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3">Infrastructure</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Deployed via Vercel CI/CD pipelines to guarantee zero-downtime updates, and integrated PostHog for GDPR-compliant, event-based product telemetry.</p>
              </div>
              <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                <h4 className="text-sm font-black text-purple-500 uppercase tracking-widest mb-3">Integrations</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Built automated issue-tracking pipelines using the GitHub REST API and seamlessly handled flexible monetization strategies via Stripe and Ko-fi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="group block bg-gray-50 dark:bg-[#111] p-8 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-indigo-500/30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow font-medium leading-relaxed text-lg">{project.description}</p>
              <div className="mt-8 flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                <span>View Link</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
