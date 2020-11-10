import { MeshWobbleMaterial, OrbitControls, softShadows } from "drei"
import React, { useRef, useState } from "react"
import { a, useSpring } from "react-spring/three"
import { Canvas, useFrame } from "react-three-fiber"
import "../styles/home-banner.scss"

softShadows()

function Plane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  )
}

function SpinningMesh({ position, args, color, speed }) {
  const meshRef = useRef(null)
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  )

  const [expand, setExpand] = useState(false)

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={meshRef}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.5}
      />
    </a.mesh>
  )
}

function HomeBanner() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, 20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <Plane />

      <SpinningMesh
        position={[Math.floor(Math.random() * 10), 1, 0]}
        args={[3, 2, 1]}
        color="lightblue"
        speed={2}
      />
      <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
      <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
    </Canvas>
  )
}

export default HomeBanner
