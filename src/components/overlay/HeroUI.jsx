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
      <div className="p-8 text-center max-w-4xl mx-4 relative pointer-events-auto mix-blend-difference z-10">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Péter <span className="text-primary mix-blend-screen">Varga</span>
        </h1>
        <h2 ref={subtitleRef} className="text-xl md:text-3xl text-gray-300 font-light tracking-widest uppercase">
          Creative WebGL Developer
        </h2>
        <div className="mt-12 flex gap-6 justify-center">
          <a href="#projects" className="px-8 py-4 rounded-none border border-primary/50 text-primary hover:bg-primary hover:text-dark-900 transition-all font-mono tracking-widest pointer-events-auto backdrop-blur-sm">
            [ VIEW_WORK ]
          </a>
          <a href="#contact" className="px-8 py-4 rounded-none border border-white/20 text-white hover:bg-white/10 transition-all font-mono tracking-widest pointer-events-auto backdrop-blur-sm">
            [ CONTACT ]
          </a>
        </div>
      </div>
    </div>
  )
}
