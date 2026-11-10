"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WorldCamera({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const { camera } = useThree();
  const progress = useRef(0);

  useEffect(() => {
    camera.position.set(0, 6.8, 25);
    camera.lookAt(0, 4.7, -0.5);
  }, [camera]);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    progress.current = Math.min(progress.current + delta / 11, 1);
    const eased = 1 - Math.pow(1 - progress.current, 3);

    camera.position.z = THREE.MathUtils.lerp(25, 17, eased);
    camera.position.y = THREE.MathUtils.lerp(6.8, 5.6, eased);
    camera.lookAt(0, 4.65, -0.5);
  });

  return null;
}
