import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroUI() {
  const titleRef = useRef()
  const subtitleRef = useRef()

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    )
    gsap.fromTo(subtitleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
    )
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pointer-events-none">
      <div className="glass p-8 rounded-2xl text-center max-w-2xl mx-4 relative overflow-hidden pointer-events-auto">
        {/* Glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl -z-10"></div>
        
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Péter <span className="text-primary">Varga</span>
        </h1>
        <h2 ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 font-light">
          Software Information Technology Developer
        </h2>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 rounded-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-dark-900 transition-all font-medium pointer-events-auto">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium pointer-events-auto">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
