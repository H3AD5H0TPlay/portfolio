export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#111] text-white pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Contact Email */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6 font-semibold">Contact</p>
          <a href="mailto:vargapeter.workmail@gmail.com" className="text-3xl md:text-5xl lg:text-6xl font-serif italic hover:text-indigo-400 transition-colors duration-300">
            vargapeter.workmail@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-20"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          
          {/* Left Column: Info & Quote */}
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-4xl font-serif text-white mb-3">Varga Péter</h2>
              <p className="text-gray-400 text-sm mb-2 font-medium">Software Engineer</p>
              <p className="text-gray-600 text-xs tracking-widest uppercase font-bold">Nagykanizsa &bull; Pécs</p>
            </div>
            
            <div className="max-w-sm">
              <p className="text-gray-400 italic text-sm leading-relaxed mb-4">
                "Simplicity is prerequisite for reliability."
              </p>
              <p className="text-gray-600 text-xs uppercase tracking-widest font-bold">&mdash; Edsger W. Dijkstra</p>
            </div>
          </div>

          {/* Middle Column: Focus */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">Focus</h3>
            <ul className="space-y-5 text-gray-300 text-sm font-medium">
              <li>Full-Stack Web Development</li>
              <li>Interactive Learning Software</li>
              <li>Algorithms & Automation</li>
            </ul>
          </div>

          {/* Right Column: Connect */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">Connect</h3>
            <ul className="space-y-5 text-gray-300 text-sm font-medium">
              <li>
                <a href="https://www.linkedin.com/in/varpeter/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/H3AD5H0TPlay" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:vargapeter.workmail@gmail.com" className="hover:text-indigo-400 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-white/10 pt-8 font-medium">
          <p>&copy; {currentYear} Varga Péter. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-[0.1em]">Nagykanizsa &bull; Pécs</p>
        </div>

      </div>
    </footer>
  );
}
