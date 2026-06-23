import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Shader code temporarily commented out to prevent crashes while debugging geometries
/*
const vertexShader = \`...\`
const fragmentShader = \`...\`
*/

export default function FluidGeometry({ position, scale = 1 }) {
  const meshRef = useRef()
  const materialRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 64]} />
        {/* TEMPORARY FALLBACK MATERIAL FOR DEBUGGING */}
        <meshStandardMaterial color="hotpink" wireframe={true} />
      </mesh>
      {/* Inner solid glowing core */}
      <mesh scale={0.8}>
        <icosahedronGeometry args={[1.5, 32]} />
        <meshBasicMaterial color="#0ea5e9" wireframe={true} />
      </mesh>
    </group>
  )
}
