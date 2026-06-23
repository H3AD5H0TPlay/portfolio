import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene from './components/canvas/Scene'
import HeroUI from './components/overlay/HeroUI'
import ProjectsUI from './components/overlay/ProjectsUI'
import ContactUI from './components/overlay/ContactUI'
import SkillsUI from './components/overlay/SkillsUI'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const container = useRef(null)

  return (
    <div ref={container} className="relative w-full overflow-x-hidden">
      
      {/* 3D Canvas Background */}
      {/* Strict fixed dimensions ensuring full viewport coverage behind UI */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-dark-900">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>

      {/* HTML Overlays Layered on top (z-10) */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none">
        <section id="hero" className="w-full h-screen pointer-events-auto">
          <HeroUI />
        </section>
        
        <section id="projects" className="w-full min-h-[200vh] pointer-events-auto">
          <ProjectsUI />
        </section>
        
        <section id="skills" className="w-full h-screen pointer-events-auto">
          <SkillsUI />
        </section>

        <section id="contact" className="w-full h-screen pointer-events-auto">
          <ContactUI />
        </section>
      </div>
      
    </div>
  )
}
