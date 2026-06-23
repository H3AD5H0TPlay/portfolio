import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function SkillText({ position, text, color = "#ffffff", fontSize = 0.5, isTerminal = false }) {
  const textRef = useRef()
  const randomOffset = Math.random() * 100

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + randomOffset) * 0.2
      textRef.current.quaternion.copy(state.camera.quaternion)
    }
  })

  // For terminal skills, make them look like code
  const displayString = isTerminal ? `> ${text}_` : text;

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={color}
      font={isTerminal ? "https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff" : undefined}
    >
      {displayString}
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
    { text: "React / R3F", pos: [-3, 2, 0], color: "#0ea5e9" },
    { text: "Next.js", pos: [2, 3, -1], color: "#ffffff" },
    { text: "TypeScript", pos: [0, 0, 2], color: "#3178c6" },
    { text: "GLSL Shaders", pos: [-2, -2, 1], color: "#a855f7" },
    { text: "GSAP", pos: [3, -1, 0], color: "#88ce02" },
    { text: "Tailwind", pos: [0, -3, -2], color: "#38bdf8" },
    { text: "Python / AI", pos: [1, 2, 3], color: "#ffde57" },
    { text: "PostgreSQL", pos: [-1, 3, 1], color: "#336791" },
    { text: "Arch Linux", pos: [-3, -3, -1], color: "#1793d1", isTerminal: true },
    { text: "Terminal", pos: [4, 1, -2], color: "#33ff00", isTerminal: true },
    { text: "Vim / Tmux", pos: [-4, 0, -2], color: "#33ff00", isTerminal: true },
    { text: "CI/CD", pos: [2, -3, 2], color: "#ffffff" },
  ]

  return (
    <group position={position} ref={group}>
      {skills.map((skill, index) => (
        <SkillText 
          key={index} 
          position={skill.pos} 
          text={skill.text} 
          color={skill.color} 
          fontSize={skill.isTerminal ? 0.35 : Math.random() * 0.3 + 0.4} 
          isTerminal={skill.isTerminal}
        />
      ))}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  )
}
