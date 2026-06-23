import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const particleVertexShader = `
uniform float uTime;
uniform vec2 uMouse;
attribute vec3 customColor;
attribute float size;
varying vec3 vColor;

void main() {
  vColor = customColor;
  vec3 pos = position;
  
  // Disintegration based on mouse proximity
  float dist = distance(pos.xy, uMouse * 10.0);
  float influence = smoothstep(2.0, 0.0, dist);
  
  pos.x += sin(uTime * 5.0 + pos.y) * influence;
  pos.y += cos(uTime * 3.0 + pos.x) * influence;
  pos.z += sin(uTime * 2.0) * influence * 2.0;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = size * (30.0 / -mvPosition.z) * (1.0 + influence * 2.0);
  gl_Position = projectionMatrix * mvPosition;
}
`

const particleFragmentShader = `
varying vec3 vColor;
void main() {
  // Circular particle with soft edge
  float d = distance(gl_PointCoord, vec2(0.5));
  if (d > 0.5) discard;
  
  float alpha = smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor, alpha * 0.8);
}
`

export default function Particles({ count = 3000 }) {
  const mesh = useRef()
  const materialRef = useRef()
  const { mouse, viewport } = useThree()
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    const colorPrimary = new THREE.Color('#0ea5e9')
    const colorAccent = new THREE.Color('#a855f7')

    for (let i = 0; i < count; i++) {
      // Volumetric sphere distribution
      const r = 20 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi) - 5 // shift back
      
      const isPrimary = Math.random() > 0.5
      const mixedColor = isPrimary ? colorPrimary : colorAccent
      mixedColor.toArray(colors, i * 3)
      
      sizes[i] = Math.random() * 2.0 + 0.5
    }
    return [positions, colors, sizes]
  }, [count])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  }), [])

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      
      // Map mouse to world space roughly
      materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.x,
        (mouse.x * viewport.width) / 2,
        0.1
      )
      materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.y,
        (mouse.y * viewport.height) / 2,
        0.1
      )
    }
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.05
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-customColor" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
