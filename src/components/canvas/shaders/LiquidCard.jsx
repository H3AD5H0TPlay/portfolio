import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import * as THREE from 'three'

export default function LiquidCard({ position, rotation, title, description, url }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <group 
      position={position} 
      rotation={rotation}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true) }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false) }}
    >
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 2.5, 32, 32]} />
        {/* TEMPORARY FALLBACK MATERIAL FOR DEBUGGING */}
        <meshStandardMaterial color={hovered ? "#0ea5e9" : "hotpink"} wireframe={true} />
        
        {/* Glow border on hover */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(4, 2.5)]} />
          <lineBasicMaterial color={hovered ? "#0ea5e9" : "#ffffff"} />
        </lineSegments>
        
        <Text
          position={[-1.7, 0.8, 0.1]}
          fontSize={0.3}
          color={hovered ? "#a855f7" : "#ffffff"}
          anchorX="left"
        >
          {title}
        </Text>
        
        <Text
          position={[-1.7, 0.2, 0.1]}
          fontSize={0.15}
          color="#cccccc"
          anchorX="left"
          maxWidth={3.4}
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
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-dark-900 transition-colors bg-dark-900/50 backdrop-blur-md"
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
