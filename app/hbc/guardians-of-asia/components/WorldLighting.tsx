"use client";

import { Environment, Sparkles } from "@react-three/drei";
import { Fog } from "three";

export default function WorldLighting() {
  return (
    <>

      <color attach="background" args={["#11120f"]} />
      <primitive attach="fog" object={new Fog("#272820", 17, 68)} />

      <ambientLight intensity={0.22} color="#b7b4a9" />
      <hemisphereLight args={["#9ba8b1", "#30291d", 0.5]} />

      <directionalLight
        position={[-7, 15, 7]}
        intensity={2.1}
        color="#f2d2a0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={18}
        shadow-camera-bottom={-12}
        shadow-bias={-0.00015}
      />
      <directionalLight position={[5, 8, -10]} intensity={1.15} color="#8695a0" />
      <spotLight position={[0, 11, -5]} target-position={[0, 3, 0]} angle={0.58} penumbra={0.8} intensity={38} color="#c9b18a" />

      <Sparkles count={70} scale={[24, 9, 26]} size={1.4} speed={0.12} opacity={0.28} color="#d7c39e" />
      <Environment preset="sunset" background={false} />
    </>
  );
}
