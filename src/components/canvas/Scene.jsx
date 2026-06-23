import { useRef, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Particles from './Particles'
import AbstractGeometry from './AbstractGeometry'
import ProjectsGallery from './ProjectsGallery'
import SkillsCloud from './SkillsCloud'

gsap.registerPlugin(ScrollTrigger)

export default function Scene() {
  const { camera, scene } = useThree()
  const sceneGroup = useRef()

  // Setting up the scroll-based camera animation
  useLayoutEffect(() => {
    // Reset camera position initially
    camera.position.set(0, 0, 5)
    
    // We create a master timeline tied to the document scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      }
    })

    // Animation phases
    // 1. Zoom into abstract geometry / move to projects
    tl.to(camera.position, {
      z: 2,
      y: -5,
      ease: "power1.inOut"
    }, 0)
    
    // 2. Move through projects section (y from -5 to -15)
    tl.to(camera.position, {
      y: -20,
      z: 3,
      ease: "power1.inOut"
    }, "<+=0.5")

    // 3. Move to skills section
    tl.to(camera.position, {
      y: -30,
      z: 5,
      ease: "power1.inOut"
    }, ">")

    // 4. Move to contact
    tl.to(camera.position, {
      y: -40,
      z: 8,
      rotationX: 0.2,
      ease: "power1.inOut"
    }, ">")

    return () => {
      tl.kill()
    }
  }, [camera])

  return (
    <group ref={sceneGroup}>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#0ea5e9" distance={10} />
      
      {/* Fog for cinematic depth */}
      <fog attach="fog" args={['#050505', 2, 15]} />

      {/* Hero Section Elements (y = 0) */}
      <Particles />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <AbstractGeometry position={[0, 0, 0]} />
      </Float>

      {/* Projects Section Elements (y = -10 to -20) */}
      <ProjectsGallery position={[0, -12, 0]} />

      {/* Skills Section Elements (y = -30) */}
      <SkillsCloud position={[0, -30, 0]} />

      {/* Contact Section Elements (y = -40) */}
      {/* Adding a rotating background element for the contact form */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <AbstractGeometry position={[0, -42, -5]} scale={2} wireframe />
      </Float>

    </group>
  )
}
