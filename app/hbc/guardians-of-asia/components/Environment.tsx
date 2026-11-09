"use client";

const brokenPillars = [
  { x: -10, z: -8, height: 7.2, lean: -0.08, radius: 0.85 },
  { x: -7.2, z: -11, height: 4.4, lean: 0.06, radius: 0.68 },
  { x: 8.3, z: -9, height: 8.8, lean: 0.04, radius: 0.95 },
  { x: 11.4, z: -5.5, height: 5.3, lean: -0.11, radius: 0.72 },
  { x: -12.5, z: 1, height: 3.7, lean: 0.09, radius: 0.65 },
  { x: 12, z: 3, height: 4.6, lean: -0.05, radius: 0.7 },
];

const fallenStones = [
  { x: -7.1, y: 0.38, z: 3.8, scale: [3.8, 0.72, 1.25] as const, turn: 0.22 },
  { x: 7.8, y: 0.34, z: 5.1, scale: [4.4, 0.62, 1.1] as const, turn: -0.28 },
  { x: -11.2, y: 0.28, z: -2.4, scale: [2.6, 0.56, 1.2] as const, turn: -0.5 },
  { x: 10.5, y: 0.32, z: -1.8, scale: [2.9, 0.65, 1.3] as const, turn: 0.48 },
];

export default function Environment() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#282720" roughness={1} />
      </mesh>

      {/* Temporary procedural ruins: varied broken shafts, leaning drums, and fallen blocks. */}
      {brokenPillars.map((pillar, index) => (
        <group
          key={`pillar-${index}`}
          position={[pillar.x, 0, pillar.z]}
          rotation={[0, index * 0.73, pillar.lean]}
        >
          <mesh position={[0, pillar.height / 2, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[pillar.radius * 0.78, pillar.radius, pillar.height, 7, 1]} />
            <meshStandardMaterial color={index % 2 ? "#514e43" : "#5d594d"} roughness={0.98} />
          </mesh>
          <mesh
            position={[0, pillar.height + 0.1, 0]}
            rotation={[0.16, index, 0.12]}
            castShadow
            receiveShadow
          >
            <dodecahedronGeometry args={[pillar.radius * 0.88, 0]} />
            <meshStandardMaterial color="#625d50" roughness={1} flatShading />
          </mesh>
          {index % 2 === 0 && (
            <mesh position={[pillar.radius * 0.9, 1.15, 0.12]} rotation={[0, 0, -0.38]} castShadow receiveShadow>
              <boxGeometry args={[pillar.radius * 1.6, 2.6, pillar.radius * 1.1]} />
              <meshStandardMaterial color="#48463d" roughness={1} />
            </mesh>
          )}
        </group>
      ))}

      {/* Broken masonry clusters make the perimeter read as collapsed walls, not a colonnade. */}
      {[-1, 1].map((side) => (
        <group key={`wall-${side}`} position={[side * 15, 0, -12]} rotation={[0, side * 0.08, side * -0.06]}>
          {[0, 1, 2, 3, 4].map((block) => {
            const height = [3.8, 5.7, 2.9, 4.6, 2.2][block];
            return (
              <mesh
                key={block}
                position={[side * (block - 2) * 1.65, height / 2, (block % 2) * 0.55]}
                rotation={[0, (block - 2) * 0.12, block % 2 ? 0.05 : -0.08]}
                scale={[1.45, height / 1.7, 1.15]}
                castShadow
                receiveShadow
              >
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={block % 2 ? "#403e36" : "#504c41"} roughness={1} flatShading />
              </mesh>
            );
          })}
        </group>
      ))}

      {fallenStones.map((stone, index) => (
        <mesh
          key={`fallen-${index}`}
          position={[stone.x, stone.y, stone.z]}
          rotation={[0.03, stone.turn, 0.08]}
          scale={stone.scale}
          castShadow
          receiveShadow
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#555145" roughness={1} flatShading />
        </mesh>
      ))}

      {Array.from({ length: 24 }, (_, index) => {
        const x = Math.sin(index * 12.31) * 13;
        const z = -8 + Math.cos(index * 4.17) * 13;
        const size = 0.16 + (index % 4) * 0.11;
        return (
          <mesh key={`debris-${index}`} position={[x, size * 0.45, z]} rotation={[0, index, 0.2]} castShadow>
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color="#625d50" roughness={1} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}
