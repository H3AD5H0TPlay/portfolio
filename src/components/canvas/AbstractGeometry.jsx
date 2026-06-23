import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AbstractGeometry({ position, scale = 1, wireframe = false }) {
  const meshRef = useRef()
  const materialRef = useRef()

  // Generate an Icosahedron geometry
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 1), [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial 
          ref={materialRef}
          color="#050505"
          emissive="#a855f7"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
          wireframe={wireframe}
        />
      </mesh>
      {/* Inner glowing core if not wireframe */}
      {!wireframe && (
        <mesh>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#0ea5e9" wireframe />
        </mesh>
      )}
    </group>
  )
}
