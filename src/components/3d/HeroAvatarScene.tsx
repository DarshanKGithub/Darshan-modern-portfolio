"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, Html, Float, MeshDistortMaterial } from "@react-three/drei";
import AvatarModel from "./AvatarModel";
import * as THREE from "three";

function FloatingElements() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, -1]} scale={0.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial color="#4f46e5" envMapIntensity={2} clearcoat={1} clearcoatRoughness={0.1} metalness={0.8} roughness={0.2} distort={0.4} speed={2} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -0.5, 1]} scale={0.4} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
          <torusGeometry args={[1, 0.3, 32, 100]} />
          <meshPhysicalMaterial color="#ec4899" envMapIntensity={2} clearcoat={1} clearcoatRoughness={0.1} metalness={0.5} roughness={0.1} transmission={0.5} thickness={0.5} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[1.5, 2.5, -2]} scale={0.3}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial color="#06b6d4" envMapIntensity={3} clearcoat={1} metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroAvatarScene() {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing relative">
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 45 }}>
        {/* Soft, bright ambient light for a gallery feel */}
        <ambientLight intensity={0.8} color="#ffffff" />
        
        {/* Key light: warm and bright */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow shadow-mapSize={1024} color="#fffcf5" />
        
        {/* Colorful Fill / Rim lights to make the white clay pop */}
        <pointLight position={[-3, 0, -2]} intensity={5} color="#ec4899" distance={10} />
        <pointLight position={[3, -2, 2]} intensity={4} color="#06b6d4" distance={10} />
        <pointLight position={[0, 4, -4]} intensity={3} color="#4f46e5" distance={10} />
        
        <Environment preset="studio" />

        <Suspense fallback={<Html center><div className="text-[#1A1D20] text-micro whitespace-nowrap">Loading...</div></Html>}>
          <AvatarModel />
          <FloatingElements />
        </Suspense>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#1A1D20" />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
