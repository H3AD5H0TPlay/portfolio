import { useRef, useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Particles from './Particles'
import FluidGeometry from './shaders/FluidGeometry'
import ProjectsGallery from './ProjectsGallery'
import SkillsCloud from './SkillsCloud'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

export default function Scene() {
  const { camera } = useThree()
  const sceneGroup = useRef()

  // Setting up the scroll-based camera animation
  useLayoutEffect(() => {
    camera.position.set(0, 0, 5)
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
      }
    })

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

    return () => tl.kill()
  }, [camera])

  return (
    <>
      <group ref={sceneGroup}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#a855f7" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#0ea5e9" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#0ea5e9" distance={10} />
        
        {/* Volumetric Fog */}
        <fog attach="fog" args={['#020202', 2, 20]} />

        {/* Hero Section Elements (y = 0) */}
        <Particles />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <FluidGeometry position={[0, 0, -2]} scale={1.2} />
        </Float>

        {/* Projects Section Elements (y = -10 to -20) */}
        <ProjectsGallery position={[0, -12, 0]} />

        {/* Skills Section Elements (y = -30) */}
        <SkillsCloud position={[0, -30, 0]} />

        {/* Contact Section Elements (y = -40) */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <FluidGeometry position={[0, -42, -5]} scale={1.5} />
        </Float>
      </group>

      {/* Post Processing Pipeline */}
      <EffectComposer disableNormalPass multisampling={4}>
        <Bloom 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.9} 
          height={300}
          intensity={1.5}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new THREE.Vector2(0.002, 0.002)}
        />
        <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.3} />
      </EffectComposer>
    </>
  )
}
