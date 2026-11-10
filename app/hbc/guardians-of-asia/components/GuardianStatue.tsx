"use client";

const stone = "#393830";

function StoneEllipsoid({
  position,
  scale,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} scale={scale} rotation={rotation} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={stone} roughness={0.97} flatShading />
    </mesh>
  );
}

export default function GuardianStatue() {
  return (
    <group position={[1.6, 0, -1.2]}>
      {/* Procedural scale and ape-like silhouette placeholder; replace with the approved HBC ape sculpt. */}
      <mesh position={[0, 0.62, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.3, 1.24, 4.8]} />
        <meshStandardMaterial color="#48463e" roughness={0.98} />
      </mesh>
      <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.7, 0.22, 4.25]} />
        <meshStandardMaterial color="#625d50" roughness={1} />
      </mesh>

      {/* Heavy torso, shoulders and long arms build a readable monumental ape outline from the approach. */}
      <StoneEllipsoid position={[0, 5.15, 0]} scale={[2.05, 3.15, 1.35]} />
      <StoneEllipsoid position={[-1.72, 6.65, 0.08]} scale={[1.4, 1.4, 1.18]} rotation={[0, 0, -0.12]} />
      <StoneEllipsoid position={[1.72, 6.65, 0.08]} scale={[1.4, 1.4, 1.18]} rotation={[0, 0, 0.12]} />

      <StoneEllipsoid position={[-2.15, 4.42, 0.18]} scale={[0.92, 2.85, 0.88]} rotation={[0, 0, -0.12]} />
      <StoneEllipsoid position={[2.15, 4.42, 0.18]} scale={[0.92, 2.85, 0.88]} rotation={[0, 0, 0.12]} />
      <StoneEllipsoid position={[-2.28, 2.12, 0.45]} scale={[1.02, 0.68, 0.94]} rotation={[0, 0, -0.14]} />
      <StoneEllipsoid position={[2.28, 2.12, 0.45]} scale={[1.02, 0.68, 0.94]} rotation={[0, 0, 0.14]} />

      <StoneEllipsoid position={[-0.9, 2.45, -0.1]} scale={[0.9, 1.45, 1.02]} />
      <StoneEllipsoid position={[0.9, 2.45, -0.1]} scale={[0.9, 1.45, 1.02]} />

      {/* Broad brow, recessed eye sockets, and projecting muzzle suggest the HBC ape until its model is available. */}
      <StoneEllipsoid position={[0, 8.05, 0.05]} scale={[1.62, 1.63, 1.28]} />
      <StoneEllipsoid position={[0, 7.48, 1.02]} scale={[1.04, 0.66, 0.78]} />
      <StoneEllipsoid position={[-0.69, 8.22, 1.06]} scale={[0.34, 0.22, 0.19]} />
      <StoneEllipsoid position={[0.69, 8.22, 1.06]} scale={[0.34, 0.22, 0.19]} />
      <StoneEllipsoid position={[0, 8.66, 1.12]} scale={[1.22, 0.28, 0.36]} rotation={[0.02, 0, 0]} />
      <StoneEllipsoid position={[0, 7.62, 1.66]} scale={[0.53, 0.29, 0.36]} />
    </group>
  );
}
