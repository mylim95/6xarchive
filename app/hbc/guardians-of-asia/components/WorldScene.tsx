"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Environment from "./Environment";
import GuardianStatue from "./GuardianStatue";
import WorldLighting from "./WorldLighting";
import WorldCamera from "./WorldCamera";

export default function WorldScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    );
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.35]}
      camera={{
        position: [0, 6.8, 25],
        fov: 42,
        near: 0.1,
        far: 140,
      }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <WorldLighting />
        <Environment />
        <GuardianStatue />
        <WorldCamera reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
