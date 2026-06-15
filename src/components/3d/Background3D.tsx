"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// Generate random points in a sphere
function generatePoints(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 15 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

const particles = generatePoints(3000);

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4f46e5"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

// Generate random floating geometries
function AbstractGeometries() {
  const shapes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 40; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20 - 5
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          0
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.2,
        type: Math.floor(Math.random() * 3), // 0: Icosahedron, 1: Torus, 2: Octahedron
        speed: Math.random() * 2 + 0.5,
      });
    }
    return items;
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={shape.speed} rotationIntensity={2} floatIntensity={3}>
          <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
            {shape.type === 0 && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 1 && <torusGeometry args={[1, 0.2, 16, 32]} />}
            {shape.type === 2 && <octahedronGeometry args={[1, 0]} />}
            <meshBasicMaterial color={i % 2 === 0 ? "#06b6d4" : "#ec4899"} wireframe transparent opacity={0.15} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
        <AbstractGeometries />
      </Canvas>
    </div>
  );
}
