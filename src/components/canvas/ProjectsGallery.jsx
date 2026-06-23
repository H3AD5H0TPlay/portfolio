import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import LiquidCard from './shaders/LiquidCard'

export default function ProjectsGallery({ position }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.03
    }
  })

  return (
    <group position={position} ref={group}>
      <LiquidCard 
        position={[0, 0, 2]} 
        rotation={[0, 0, 0]}
        title="KitsuKana"
        description="Full-Stack Japanese Learning Web Application built with Next.js (App Router), React 18, TypeScript, Supabase, and Clerk. Features a custom glassmorphism UI entirely from scratch."
        url="https://kitsukana.vercel.app"
      />
      <LiquidCard 
        position={[3.5, 0, -1.5]} 
        rotation={[0, -Math.PI / 4, 0]}
        title="SEO Auditing App"
        description="Custom SEO auditing web application for automated analysis and comparison of competitor webshops using Python (Django), React, and automated Web Scraping pipelines."
      />
      <LiquidCard 
        position={[-3.5, 0, -1.5]} 
        rotation={[0, Math.PI / 4, 0]}
        title="Robotics Control"
        description="Low-level software configuration, testing, and troubleshooting of control scripts for complex robotics hardware assemblies at Robotika Pécs Foundation."
      />
    </group>
  )
}
