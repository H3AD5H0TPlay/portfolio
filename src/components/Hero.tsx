export default function Hero() {
  return (
    <section id="my-story" className="min-h-[85vh] flex flex-col items-center justify-center text-center pt-10 pb-20">
      
      {/* Profile Image Placeholder */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8 group">
        {/* Glow effect behind the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
        {/* Actual image container */}
        <div className="relative w-full h-full rounded-full border-4 border-white dark:border-[#1a1a1a] shadow-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Varga Péter" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
        Varga Péter
      </h1>
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-8 uppercase">
        Software Engineer
      </h2>

      {/* Quote */}
      <p className="text-lg md:text-xl font-medium italic text-gray-600 dark:text-gray-300 mb-6 max-w-xl relative">
        <span className="absolute -left-4 -top-2 text-4xl text-indigo-500/30">"</span>
        Crafting robust digital foundations that stand the test of time.
        <span className="absolute -right-4 -bottom-4 text-4xl text-purple-500/30">"</span>
      </p>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
        I am a versatile full-stack developer, crafting everything from responsive frontends to robust backend systems. Beyond standard web development, I am deeply passionate about building my own indie games, custom software solutions, and interactive language learning applications.
      </p>

      {/* Location Badge */}
      <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/5 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>Nagykanizsa · Pécs</span>
      </div>

    </section>
  );
}
