"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(2400)
    for (let i = 0; i < 2400; i += 3) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.8 + Math.random() * 2.8
      pos[i]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      pos[i + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = t * 0.045
    ref.current.rotation.x = Math.sin(t * 0.022) * 0.12 + mouse.y * 0.015
    ref.current.rotation.z = Math.cos(t * 0.018) * 0.05 + mouse.x * 0.01
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2997ff"
        size={0.016}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 52 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Particles />
    </Canvas>
  )
}
