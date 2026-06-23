import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function SkillText({ position, text, color = "#ffffff", fontSize = 0.5 }) {
  const textRef = useRef()
  const randomOffset = Math.random() * 100

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + randomOffset) * 0.2
      // make them always face camera
      textRef.current.quaternion.copy(state.camera.quaternion)
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={color}
      font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
    >
      {text}
    </Text>
  )
}

export default function SkillsCloud({ position }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y -= delta * 0.1
    }
  })

  const skills = [
    { text: "React", pos: [-3, 2, 0], color: "#0ea5e9" },
    { text: "Next.js", pos: [2, 3, -1], color: "#ffffff" },
    { text: "TypeScript", pos: [0, 0, 2], color: "#3178c6" },
    { text: "Three.js", pos: [-2, -2, 1], color: "#a855f7" },
    { text: "GSAP", pos: [3, -1, 0], color: "#88ce02" },
    { text: "Tailwind CSS", pos: [0, -3, -2], color: "#38bdf8" },
    { text: "Node.js", pos: [4, 1, -2], color: "#339933" },
    { text: "Supabase", pos: [-4, 0, -2], color: "#3ecf8e" },
    { text: "Python", pos: [1, 2, 3], color: "#ffde57" },
    { text: "PostgreSQL", pos: [-1, 3, 1], color: "#336791" },
    { text: "Vercel CI/CD", pos: [2, -3, 2], color: "#ffffff" },
    { text: "Linux", pos: [-3, -3, -1], color: "#fcc624" },
  ]

  return (
    <group position={position} ref={group}>
      {skills.map((skill, index) => (
        <SkillText key={index} position={skill.pos} text={skill.text} color={skill.color} fontSize={Math.random() * 0.3 + 0.4} />
      ))}
      {/* Central glow */}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}
