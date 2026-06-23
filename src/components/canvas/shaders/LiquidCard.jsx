import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uTime;
uniform float uHover;
varying vec2 vUv;

// Simple 2D noise
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;
  
  // Liquid distortion effect on hover
  float distortion = sin(uv.y * 20.0 + uTime * 5.0) * 0.02 * uHover;
  uv.x += distortion;
  
  vec3 color1 = vec3(0.02, 0.02, 0.02); // dark background
  vec3 color2 = vec3(0.05, 0.65, 0.91); // primary edge highlight
  
  // Gradient background
  vec3 finalColor = mix(color1, color2, uv.y * 0.2);
  
  // Glitch effect on hover
  if (uHover > 0.0) {
     float glitch = step(0.98, random(vec2(uTime, uv.y)));
     finalColor += vec3(glitch) * 0.2;
  }
  
  gl_FragColor = vec4(finalColor, 0.8);
}
`

export default function LiquidCard({ position, rotation, title, description, url }) {
  const meshRef = useRef()
  const materialRef = useRef()
  const [hovered, setHovered] = useState(false)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uHover: { value: 0 }
  }), [])

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      // Smoothly animate hover value
      materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uHover.value,
        hovered ? 1 : 0,
        0.1
      )
    }
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
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent={true}
        />
        
        {/* Glow border on hover */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(4, 2.5)]} />
          <lineBasicMaterial color={hovered ? "#0ea5e9" : "#333333"} />
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
