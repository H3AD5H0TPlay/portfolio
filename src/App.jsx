import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroUI from './components/overlay/HeroUI'
import ProjectsUI from './components/overlay/ProjectsUI'
import ContactUI from './components/overlay/ContactUI'
import SkillsUI from './components/overlay/SkillsUI'

export default function App() {
  const container = useRef(null)

  return (
    <div ref={container} style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      
      {/* BULLETPROOF WRAPPER */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, backgroundColor: '#111' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          {/* THE "DUMB" SCENE */}
          <ambientLight intensity={1} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      </div>

      {/* HTML Overlays Layered on top */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', pointerEvents: 'none' }}>
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
