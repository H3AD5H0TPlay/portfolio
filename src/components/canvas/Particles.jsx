import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ count = 2000 }) {
  const mesh = useRef()
  const { mouse, viewport } = useThree()
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  // Generate random positions and colors
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      
      // Determine color - mixing primary and accent
      const isPrimary = Math.random() > 0.5
      const color = new THREE.Color(isPrimary ? '#0ea5e9' : '#a855f7')
      color.multiplyScalar(Math.random() * 1.5 + 0.5) // add some variation

      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0, color })
    }
    return temp
  }, [count])

  const colors = useMemo(() => {
    const floatArray = new Float32Array(count * 3)
    particles.forEach((p, i) => {
      p.color.toArray(floatArray, i * 3)
    })
    return floatArray
  }, [particles, count])

  useFrame((state) => {
    // Interactivity: particles react to mouse
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      
      // Update time
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      // Mouse interaction effect
      particle.mx += (mouse.x * viewport.width - particle.mx) * 0.01
      particle.my += (mouse.y * viewport.height - particle.my) * 0.01
      
      // Calculate position
      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) + b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.setScalar(s * 0.5)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.02, 8, 8]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </sphereGeometry>
      <meshStandardMaterial vertexColors emissive="#0ea5e9" emissiveIntensity={0.5} roughness={0.1} />
    </instancedMesh>
  )
}
