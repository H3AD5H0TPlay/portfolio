import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import * as THREE from 'three'

function ProjectCard({ position, rotation, title, description, url }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    // Gentle hovering effect
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 2.5]} />
        <meshPhysicalMaterial 
          color="#050505"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.5}
          transmission={0.9}
          thickness={0.5}
          clearcoat={1}
        />
        {/* Border glow */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(4, 2.5)]} />
          <lineBasicMaterial color="#0ea5e9" />
        </lineSegments>
        
        <Text
          position={[-1.7, 0.8, 0.1]}
          fontSize={0.3}
          color="#a855f7"
          anchorX="left"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
        >
          {title}
        </Text>
        
        <Text
          position={[-1.7, 0.2, 0.1]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="left"
          maxWidth={3.4}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
        >
          {description}
        </Text>

        <Html transform position={[1.2, -0.8, 0.1]} scale={0.5}>
          <div className="pointer-events-auto">
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-dark-900 transition-colors"
              >
                View Live
              </a>
            )}
          </div>
        </Html>
      </mesh>
    </group>
  )
}

export default function ProjectsGallery({ position }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group position={position} ref={group}>
      <ProjectCard 
        position={[0, 0, 2]} 
        rotation={[0, 0, 0]}
        title="KitsuKana"
        description="Full-Stack Japanese Learning Web Application built with Next.js (App Router), React 18, TypeScript, Supabase, and Clerk. Features custom glassmorphism UI."
        url="https://kitsukana.vercel.app"
      />
      <ProjectCard 
        position={[3, 0, -1]} 
        rotation={[0, -Math.PI / 3, 0]}
        title="SEO Auditing App"
        description="Custom SEO auditing web application for automated analysis and comparison of competitor webshops using Python (Django), React, and Web Scraping."
      />
      <ProjectCard 
        position={[-3, 0, -1]} 
        rotation={[0, Math.PI / 3, 0]}
        title="Robotics Control"
        description="Software configuration, testing, and troubleshooting of control scripts for complex robotics hardware at Robotika Pécs Foundation."
      />
    </group>
  )
}
